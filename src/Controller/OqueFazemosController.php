<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;

/**
 * OqueFazemos Controller
 *
 * @property \App\Model\Table\OqueFazemosTable $OqueFazemos
 *
 * @method \App\Model\Entity\OqueFazemo[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class OqueFazemosController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $oqueFazemos = $this->paginate($this->OqueFazemos);

        $this->set(compact('oqueFazemos'));
    }

    /**
     * View method
     *
     * @param string|null $id Oque Fazemo id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $oqueFazemo = $this->OqueFazemos->get($id, [
            'contain' => []
        ]);

        $this->set('oqueFazemo', $oqueFazemo);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $oqueFazemo = $this->OqueFazemos->newEntity();
        if ($this->request->is('post')) {
            $oqueFazemo = $this->OqueFazemos->patchEntity($oqueFazemo, $this->request->getData());
            if ($this->OqueFazemos->save($oqueFazemo)) {
                $this->Flash->success(__('The {0} has been saved.', 'Oque Fazemo'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Oque Fazemo'));
        }
        $this->set(compact('oqueFazemo'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Oque Fazemo id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $oqueFazemo = $this->OqueFazemos->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $oqueFazemo = $this->OqueFazemos->patchEntity($oqueFazemo, $this->request->getData());
            if ($this->OqueFazemos->save($oqueFazemo)) {
                $this->Flash->success(__('The {0} has been saved.', 'Oque Fazemo'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Oque Fazemo'));
        }
        $this->set(compact('oqueFazemo'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Oque Fazemo id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $oqueFazemo = $this->OqueFazemos->get($id);
        if ($this->OqueFazemos->delete($oqueFazemo)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Oque Fazemo'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Oque Fazemo'));
        }

        return $this->redirect(['action' => 'index']);
    }



    public function detalhe($id){
        $this->viewBuilder()->setLayout('site');
        $detalhe = $this->OqueFazemos->get($id);
        $this->set('detalhe', $detalhe);

    }


    public function beforeFilter(Event $event)
    {
        $this->Auth->allow(['detalhe']);
    }

}
