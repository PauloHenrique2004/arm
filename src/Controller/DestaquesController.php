<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * Destaques Controller
 *
 * @property \App\Model\Table\DestaquesTable $Destaques
 *
 * @method \App\Model\Entity\Destaque[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class DestaquesController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $this->paginate = [
            'contain' => ['Empresas'],
            'order' => ['id' => 'desc']
        ];
        $destaques = $this->paginate($this->Destaques);

        $this->set(compact('destaques'));
    }

    /**
     * View method
     *
     * @param string|null $id Destaque id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $destaque = $this->Destaques->get($id, [
            'contain' => ['Empresas']
        ]);

        $this->set('destaque', $destaque);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $destaque = $this->Destaques->newEntity();
        if ($this->request->is('post')) {
            $destaque = $this->Destaques->patchEntity($destaque, $this->request->getData());
            if ($this->Destaques->save($destaque)) {
                $this->Flash->success(__('The {0} has been saved.', 'Destaque'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Destaque'));
        }
        $empresas = $this->Destaques->Empresas->find('list', ['limit' => 200]);
        $this->set(compact('destaque', 'empresas'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Destaque id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $destaque = $this->Destaques->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $destaque = $this->Destaques->patchEntity($destaque, $this->request->getData());
            if ($this->Destaques->save($destaque)) {
                $this->Flash->success(__('The {0} has been saved.', 'Destaque'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Destaque'));
        }
        $empresas = $this->Destaques->Empresas->find('list', ['limit' => 200]);
        $this->set(compact('destaque', 'empresas'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Destaque id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $destaque = $this->Destaques->get($id);
        if ($this->Destaques->delete($destaque)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Destaque'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Destaque'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
