<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * ServicoImagens Controller
 *
 * @property \App\Model\Table\ServicoImagensTable $ServicoImagens
 *
 * @method \App\Model\Entity\ServicoImagen[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ServicoImagensController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $this->paginate = [
            'contain' => ['Servicos']
        ];
        $servicoImagens = $this->paginate($this->ServicoImagens);

        $this->set(compact('servicoImagens'));
    }

    /**
     * View method
     *
     * @param string|null $id Servico Imagen id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $servicoImagen = $this->ServicoImagens->get($id, [
            'contain' => ['Servicos']
        ]);

        $this->set('servicoImagen', $servicoImagen);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $servicoImagen = $this->ServicoImagens->newEntity();
        if ($this->request->is('post')) {
            $servicoImagen = $this->ServicoImagens->patchEntity($servicoImagen, $this->request->getData());
            if ($this->ServicoImagens->save($servicoImagen)) {
                $this->Flash->success(__('The {0} has been saved.', 'Servico Imagen'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Servico Imagen'));
        }
        $servicos = $this->ServicoImagens->Servicos->find('list', ['limit' => 200]);
        $this->set(compact('servicoImagen', 'servicos'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Servico Imagen id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $servicoImagen = $this->ServicoImagens->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $servicoImagen = $this->ServicoImagens->patchEntity($servicoImagen, $this->request->getData());
            if ($this->ServicoImagens->save($servicoImagen)) {
                $this->Flash->success(__('The {0} has been saved.', 'Servico Imagen'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Servico Imagen'));
        }
        $servicos = $this->ServicoImagens->Servicos->find('list', ['limit' => 200]);
        $this->set(compact('servicoImagen', 'servicos'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Servico Imagen id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $servicoImagen = $this->ServicoImagens->get($id);
        if ($this->ServicoImagens->delete($servicoImagen)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Servico Imagen'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Servico Imagen'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
