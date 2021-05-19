<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * Visions Controller
 *
 * @property \App\Model\Table\VisionsTable $Visions
 *
 * @method \App\Model\Entity\Vision[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class VisionsController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $visions = $this->paginate($this->Visions);

        $this->set(compact('visions'));
    }

    /**
     * View method
     *
     * @param string|null $id Vision id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $vision = $this->Visions->get($id, [
            'contain' => []
        ]);

        $this->set('vision', $vision);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $vision = $this->Visions->newEntity();
        if ($this->request->is('post')) {
            $vision = $this->Visions->patchEntity($vision, $this->request->getData());
            if ($this->Visions->save($vision)) {
                $this->Flash->success(__('The {0} has been saved.', 'Vision'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Vision'));
        }
        $this->set(compact('vision'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Vision id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $vision = $this->Visions->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $vision = $this->Visions->patchEntity($vision, $this->request->getData());
            if ($this->Visions->save($vision)) {
                $this->Flash->success(__('The {0} has been saved.', 'Vision'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Vision'));
        }
        $this->set(compact('vision'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Vision id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $vision = $this->Visions->get($id);
        if ($this->Visions->delete($vision)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Vision'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Vision'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
