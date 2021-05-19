<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;

/**
 * CivicContractions Controller
 *
 * @property \App\Model\Table\CivicContractionsTable $CivicContractions
 *
 * @method \App\Model\Entity\CivicContraction[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class CivicContractionsController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $civicContractions = $this->paginate($this->CivicContractions);

        $this->set(compact('civicContractions'));
    }

    /**
     * View method
     *
     * @param string|null $id Civic Contraction id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $civicContraction = $this->CivicContractions->get($id, [
            'contain' => []
        ]);

        $this->set('civicContraction', $civicContraction);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $civicContraction = $this->CivicContractions->newEntity();
        if ($this->request->is('post')) {
            $civicContraction = $this->CivicContractions->patchEntity($civicContraction, $this->request->getData());
            if ($this->CivicContractions->save($civicContraction)) {
                $this->Flash->success(__('The {0} has been saved.', 'Civic Contraction'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Civic Contraction'));
        }
        $this->set(compact('civicContraction'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Civic Contraction id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $civicContraction = $this->CivicContractions->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $civicContraction = $this->CivicContractions->patchEntity($civicContraction, $this->request->getData());
            if ($this->CivicContractions->save($civicContraction)) {
                $this->Flash->success(__('The {0} has been saved.', 'Civic Contraction'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Civic Contraction'));
        }
        $this->set(compact('civicContraction'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Civic Contraction id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $civicContraction = $this->CivicContractions->get($id);
        if ($this->CivicContractions->delete($civicContraction)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Civic Contraction'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Civic Contraction'));
        }

        return $this->redirect(['action' => 'index']);
    }

    public function constraction($id)
    {
        $this->LoadModel('CivicImages');
        $civicImages = $this->CivicImages->find('all');
        $this->set('civicImages', $civicImages);
        $this->viewBuilder()->setLayout('site');
        $constraction = $this->CivicContractions->get($id);
        $this->set('constraction', $constraction);
    }

    public function beforeFilter(Event $event){
        $this->Auth->allow('constraction');

    }

}
