<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;
use Intervention\Image\ImageManagerStatic as Image;

/**
 * Cestas Controller
 *
 * @property \App\Model\Table\CestasTable $Cestas
 *
 * @method \App\Model\Entity\Cesta[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class CestasController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $cestas = $this->paginate($this->Cestas);

        $this->set(compact('cestas'));
    }

    /**
     * View method
     *
     * @param string|null $id Cesta id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $cesta = $this->Cestas->get($id, [
            'contain' => ['ProdutoImages']
        ]);

        $this->set('cesta', $cesta);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $cesta = $this->Cestas->newEntity();
        if ($this->request->is('post')) {
            $cesta = $this->Cestas->patchEntity($cesta, $this->request->getData());
            if ($this->Cestas->save($cesta)) {
                $this->resizeImage($cesta->capa);
                $this->Flash->success(__('The {0} has been saved.', 'Cesta'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Cesta'));
        }
        $this->set(compact('cesta'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Cesta id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $cesta = $this->Cestas->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $cesta = $this->Cestas->patchEntity($cesta, $this->request->getData());
            if ($this->Cestas->save($cesta)) {
                $this->resizeImage($cesta->capa);
                $this->Flash->success(__('The {0} has been saved.', 'Cesta'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Cesta'));
        }
        $this->set(compact('cesta'));
    }



//   start compactar imagem
    private function getImageFullPath($target) {
        $currentDir = getcwd();
        return "$currentDir/files/Cestas/capa/$target";
    }

    private function getImageThumbFullPath($target) {
        $currentDir = getcwd();
        return "$currentDir/files/Cestas/capa/thumb-$target";
    }

    private function resizeImage($target) {
        $targetFullPath = $this->getImageFullPath($target);
//        ini_set('memory_limit','2048M');


        if(file_exists($targetFullPath)) {
            // Thumb
            Image::make($targetFullPath)->resize(400, 400)->save($this->getImageThumbFullPath($target));

            // Dessa forma sobrecreve a original
            Image::make($targetFullPath)->widen(800, function ($constraint) {
                $constraint->upsize();
            })->save($targetFullPath);
        }
    }
//   end compactar imagem


    /**
     * Delete method
     *
     * @param string|null $id Cesta id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $cesta = $this->Cestas->get($id);
        if ($this->Cestas->delete($cesta)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Cesta'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Cesta'));
        }

        return $this->redirect(['action' => 'index']);
    }


    public function cesta(){
        $this->paginate = [
            'limit'=> 8,
        ];

        $this->viewBuilder()->setLayout('site');
        $cestas = $this->paginate($this->Cestas->find()->order(['id DESC']));
        $this->set('cestas', $cestas);

        $title = 'Cestas de Café da Manhã';
        $this->set('title', $title);
    }


    public function cestaSingle($id){
        $this->viewBuilder()->setLayout('site');
        $cestaSingle = $this->Cestas->get($id);
        $this->set('cestaSingle', $cestaSingle);
        $this->loadModel('Cesta_imagens');
        $imagens = $this->Cesta_imagens->find('all')->where(['Cesta_imagens.cesta_id' => $id]);
        $this->set('imagens', $imagens);
        $title = 'Cestas de Café da Manhã';
        $this->set('title', $title);
    }



    public function beforeFilter(Event $event){
        $this->Auth->allow(['cesta','cestaSingle']);
    }

}
