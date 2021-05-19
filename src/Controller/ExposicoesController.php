<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;
use Intervention\Image\ImageManagerStatic as Image;


/**
 * Exposicoes Controller
 *
 * @property \App\Model\Table\ExposicoesTable $Exposicoes
 *
 * @method \App\Model\Entity\Exposico[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ExposicoesController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $exposicoes = $this->paginate($this->Exposicoes->find()->order(['id' => 'desc']));

        $this->set(compact('exposicoes'));
    }

    /**
     * View method
     *
     * @param string|null $id Exposico id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $exposico = $this->Exposicoes->get($id, [
            'contain' => []
        ]);

        $this->set('exposico', $exposico);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $exposico = $this->Exposicoes->newEntity();
        if ($this->request->is('post')) {
            $exposico = $this->Exposicoes->patchEntity($exposico, $this->request->getData());
            if ($this->Exposicoes->save($exposico)) {
                $this->resizeImage($exposico->capa);
                $this->Flash->success(__('The {0} has been saved.', 'Exposico'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Exposico'));
        }
        $this->set(compact('exposico'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Exposico id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $exposico = $this->Exposicoes->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $exposico = $this->Exposicoes->patchEntity($exposico, $this->request->getData());
            if ($this->Exposicoes->save($exposico)) {
                $this->resizeImage($exposico->capa);
                $this->Flash->success(__('The {0} has been saved.', 'Exposico'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Exposico'));
        }
        $this->set(compact('exposico'));
    }



    private function getImageFullPath($target) {
        $currentDir = getcwd();
        return "$currentDir/files/Exposicoes/capa/$target";
    }

    private function getImageThumbFullPath($target) {
        $currentDir = getcwd();
        return "$currentDir/files/Exposicoes/capa/thumb-$target";

    }



    private function resizeImage($target) {
        $targetFullPath = $this->getImageFullPath($target);
//        ini_set('memory_limit','2048M');


        if(file_exists($targetFullPath)) {
            // Thumb
            Image::make($targetFullPath)->resize(400, 400)->save($this->getImageThumbFullPath($target));

            // Dessa forma sobrecreve a original
            Image::make($targetFullPath)->widen(600, function ($constraint) {
                $constraint->upsize();
            })->save($targetFullPath);
        }
    }


    /**
     * Delete method
     *
     * @param string|null $id Exposico id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $exposico = $this->Exposicoes->get($id);
        if ($this->Exposicoes->delete($exposico)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Exposico'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Exposico'));
        }

        return $this->redirect(['action' => 'index']);
    }

    public function exposicao($id){
        $this->viewBuilder()->setLayout('site');
        $exposicao = $this->Exposicoes->get($id);
        $this->set('exposicao', $exposicao);

        $recentes = $this->Exposicoes->find('all')->order(['id DESC'])->limit(6);
        $this->set('recentes', $recentes);

        $this->media();
    }


    public function expAll(){
        $this->paginate = [
            'limit'=> 6,
        ];

        $this->viewBuilder()->setLayout('site');
        $exp = $this->paginate($this->Exposicoes->find()->order(['id DESC']));
        $this->set('exp', $exp);
        $title = 'Exposições-online';
        $this->set('title', $title);

    }

    public function media(){
        $this->loadModel('Media');
        $media = $this->Media->find();
        $this->set('media', $media);
        $title = 'Exposição-online';
        $this->set('title', $title);

    }

    public function beforeFilter(Event $event)
    {
        $this->Auth->allow(['exposicao','expAll']);
    }




}
