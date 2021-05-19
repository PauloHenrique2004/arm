<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * Depoimentos Controller
 *
 * @property \App\Model\Table\DepoimentosTable $Depoimentos
 *
 * @method \App\Model\Entity\Depoimento[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class DepoimentosController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $depoimentos = $this->paginate($this->Depoimentos->find()->order(['id' => 'desc']));

        $this->set(compact('depoimentos'));
    }

    /**
     * View method
     *
     * @param string|null $id Depoimento id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $depoimento = $this->Depoimentos->get($id, [
            'contain' => []
        ]);

        $this->set('depoimento', $depoimento);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $depoimento = $this->Depoimentos->newEntity();
        if ($this->request->is('post')) {
            $depoimento = $this->Depoimentos->patchEntity($depoimento, $this->request->getData());
            if ($this->Depoimentos->save($depoimento)) {
                $this->Flash->success(__('The {0} has been saved.', 'Depoimento'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Depoimento'));
        }
        $this->set(compact('depoimento'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Depoimento id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $depoimento = $this->Depoimentos->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $depoimento = $this->Depoimentos->patchEntity($depoimento, $this->request->getData());
            if ($this->Depoimentos->save($depoimento)) {
                $this->Flash->success(__('The {0} has been saved.', 'Depoimento'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Depoimento'));
        }
        $this->set(compact('depoimento'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Depoimento id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $depoimento = $this->Depoimentos->get($id);
        if ($this->Depoimentos->delete($depoimento)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Depoimento'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Depoimento'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
