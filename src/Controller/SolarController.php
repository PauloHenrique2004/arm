<?php

namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;

/**
 * Solar Controller
 *
 * @property \App\Model\Table\SolarTable $Solar
 *
 * @method \App\Model\Entity\Solar[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class SolarController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $solar = $this->paginate($this->Solar);

        $this->set(compact('solar'));
    }

    /**
     * View method
     *
     * @param string|null $id Solar id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $solar = $this->Solar->get($id, [
            'contain' => []
        ]);

        $this->set('solar', $solar);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $solar = $this->Solar->newEntity();
        if ($this->request->is('post')) {
            $solar = $this->Solar->patchEntity($solar, $this->request->getData());
            if ($this->Solar->save($solar)) {
                $this->Flash->success(__('The {0} has been saved.', 'Solar'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Solar'));
        }
        $this->set(compact('solar'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Solar id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $solar = $this->Solar->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $solar = $this->Solar->patchEntity($solar, $this->request->getData());
            if ($this->Solar->save($solar)) {
                $this->Flash->success(__('The {0} has been saved.', 'Solar'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Solar'));
        }
        $this->set(compact('solar'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Solar id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $solar = $this->Solar->get($id);
        if ($this->Solar->delete($solar)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Solar'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Solar'));
        }

        return $this->redirect(['action' => 'index']);
    }

    public function solar($id)
    {
        $this->LoadModel('SolarImages');
        $solarImages = $this->SolarImages->find('all');
        $this->set('solarImages', $solarImages);
        $this->viewBuilder()->setLayout('site');
        $solar = $this->Solar->get($id);
        $this->set('solar', $solar);

    }

    public function beforeFilter(Event $event)
    {
        $this->Auth->allow('solar');

    }
}
