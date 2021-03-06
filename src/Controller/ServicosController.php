<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;

/**
 * Servicos Controller
 *
 * @property \App\Model\Table\ServicosTable $Servicos
 *
 * @method \App\Model\Entity\Servico[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ServicosController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $servicos = $this->paginate($this->Servicos->find()->order(['id' => 'desc']));

        $this->set(compact('servicos'));
    }

    /**
     * View method
     *
     * @param string|null $id Servico id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $servico = $this->Servicos->get($id, [
            'contain' => ['ServicoImagens']
        ]);

        $this->set('servico', $servico);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $servico = $this->Servicos->newEntity();
        if ($this->request->is('post')) {
            $servico = $this->Servicos->patchEntity($servico, $this->request->getData());
            if ($this->Servicos->save($servico)) {
                $this->Flash->success(__('The {0} has been saved.', 'Servico'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Servico'));
        }
        $this->set(compact('servico'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Servico id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $servico = $this->Servicos->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $servico = $this->Servicos->patchEntity($servico, $this->request->getData());
            if ($this->Servicos->save($servico)) {
                $this->Flash->success(__('The {0} has been saved.', 'Servico'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Servico'));
        }
        $this->set(compact('servico'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Servico id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $servico = $this->Servicos->get($id);
        if ($this->Servicos->delete($servico)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Servico'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Servico'));
        }

        return $this->redirect(['action' => 'index']);
    }

    public function todos(){
        $this->paginate = [
            'limit'=> 6,
            'order' => ['id desc']
        ];
        $this->viewBuilder()->setLayout('site');
        $servicos = $this->paginate($this->Servicos);
        $this->set('servicos', $servicos);

        $title = "Servi??os";
        $this->set('title', $title);
    }

    public function single($nome, $id){
        $this->viewBuilder()->setLayout('site');
        $single = $this->Servicos->get($id);
        $this->set('single', $single);

        $title = "Servi??os";
        $this->set('title', $title);

        $this->loadModel('ServicoImagens');
        $imagens = $this->ServicoImagens->find('all')->where(['ServicoImagens.servico_id' => $id]);
        $this->set('imagens', $imagens);
    }

    public function beforeFilter(Event $event){
        $this->Auth->allow(['todos', 'single']);
    }


}
