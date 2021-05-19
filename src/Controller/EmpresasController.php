<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;
use Intervention\Image\ImageManagerStatic as Image;

/**
 * Empresas Controller
 *
 * @property \App\Model\Table\EmpresasTable $Empresas
 *
 * @method \App\Model\Entity\Empresa[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class EmpresasController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $this->paginate = [
            'contain' => ['Categorias'],
            'order' => ['id' => 'desc'],
            'limit' => 10
        ];
        $empresas = $this->paginate($this->Empresas);

        $this->set(compact('empresas'));
    }

    /**
     * View method
     *
     * @param string|null $id Empresa id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $empresa = $this->Empresas->get($id, [
            'contain' => ['Categorias', 'Servicos']
        ]);

        $this->set('empresa', $empresa);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $empresa = $this->Empresas->newEntity();
        if ($this->request->is('post')) {
            $empresa = $this->Empresas->patchEntity($empresa, $this->request->getData());
            if ($this->Empresas->save($empresa)) {
                $this->Flash->success(__('The {0} has been saved.', 'Empresa'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Empresa'));
        }
        $categorias = $this->Empresas->Categorias->find('list', ['limit' => 200]);
        $this->set(compact('empresa', 'categorias'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Empresa id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $empresa = $this->Empresas->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $empresa = $this->Empresas->patchEntity($empresa, $this->request->getData());
            if ($this->Empresas->save($empresa)) {
                $this->Flash->success(__('The {0} has been saved.', 'Empresa'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Empresa'));
        }
        $categorias = $this->Empresas->Categorias->find('list', ['limit' => 200]);
        $this->set(compact('empresa', 'categorias'));
    }



    /**
     * Delete method
     *
     * @param string|null $id Empresa id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $empresa = $this->Empresas->get($id);
        if ($this->Empresas->delete($empresa)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Empresa'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Empresa'));
        }

        return $this->redirect(['action' => 'index']);
    }


    public function empresa($nome_empresa,$id){
        $this->viewBuilder()->setLayout('site');
        $empresa = $this->Empresas->get($id);
        $this->set('empresa', $empresa);

        $this->loadModel('Servico_imagens');
        $imagens = $this->Servico_imagens->find('all')->where(['Servico_imagens.empresa_id' => $id]);
        $this->set('imagens', $imagens);

        $this->loadModel('Videos');
        $videos = $this->Videos->find('all')->where(['Videos.empresa_id' => $id]);
        $this->set(compact('videos'));

        $title = $empresa->nome_empresa;
        $this->set(compact('title'));
    }

    public function beforeFilter(Event $event){
        $this->Auth->allow('empresa');
    }



}
