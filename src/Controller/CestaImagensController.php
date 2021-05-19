<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * CestaImagens Controller
 *
 * @property \App\Model\Table\CestaImagensTable $CestaImagens
 *
 * @method \App\Model\Entity\CestaImagen[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class CestaImagensController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $this->paginate = [
            'contain' => ['Cestas'],
            'conditions' => isset($_GET['cesta_id']) ? ['cesta_id' => $_GET['cesta_id']] : [],
            'order' => ['CestaImagens.id DESC']
        ];



        $cestaImagens = $this->paginate($this->CestaImagens);

        $this->set(compact('cestaImagens'));
    }

    /**
     * View method
     *
     * @param string|null $id Cesta Imagen id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $cestaImagen = $this->CestaImagens->get($id, [
            'contain' => []
        ]);

        $this->set('cestaImagen', $cestaImagen);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $cestaImagen = $this->CestaImagens->newEntity();
        if ($this->request->is('post')) {
            $cestaImagen = $this->CestaImagens->patchEntity($cestaImagen, $this->request->getData());
            if ($this->CestaImagens->save($cestaImagen)) {
                $this->Flash->success(__('The {0} has been saved.', 'Cesta Imagen'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Cesta Imagen'));
        }

        $cestas = $this->CestaImagens->Cestas->find('list', ['limit' => 200]);
        $this->set(compact('cestaImagen', 'cestas'));

    }


    /**
     * Edit method
     *
     * @param string|null $id Cesta Imagen id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $cestaImagen = $this->CestaImagens->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $cestaImagen = $this->CestaImagens->patchEntity($cestaImagen, $this->request->getData());
            if ($this->CestaImagens->save($cestaImagen)) {
                $this->Flash->success(__('The {0} has been saved.', 'Cesta Imagen'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Cesta Imagen'));
        }
        $cestas = $this->CestaImagens->Cestas->find('list', ['limit' => 200]);
        $this->set(compact('cestaImagen', 'cestas'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Cesta Imagen id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $cestaImagen = $this->CestaImagens->get($id);
        if ($this->CestaImagens->delete($cestaImagen)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Cesta Imagen'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Cesta Imagen'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
