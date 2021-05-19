<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * ProdutoImages Controller
 *
 * @property \App\Model\Table\ProdutoImagesTable $ProdutoImages
 *
 * @method \App\Model\Entity\ProdutoImage[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ProdutoImagesController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $this->paginate = [
            'contain' => ['Products'],
            'conditions' => isset($_GET['produto_id']) ? ['product_id' => $_GET['produto_id']] : [],
            'order' => ['ProdutoImages.id DESC']
        ];

        $produtoImages = $this->paginate($this->ProdutoImages);

        $this->set(compact('produtoImages'));
    }

    /**
     * View method
     *
     * @param string|null $id Produto Image id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $produtoImage = $this->ProdutoImages->get($id, [
            'contain' => ['Products']
        ]);

        $this->set('produtoImage', $produtoImage);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $produtoImage = $this->ProdutoImages->newEntity();
        if ($this->request->is('post')) {
            $produtoImage = $this->ProdutoImages->patchEntity($produtoImage, $this->request->getData());
            if ($this->ProdutoImages->save($produtoImage)) {
                $this->Flash->success(__('The {0} has been saved.', 'Produto Image'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Produto Image'));
        }
        $products = $this->ProdutoImages->Products->find('list', ['limit' => 200]);
        $this->set(compact('produtoImage', 'products'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Produto Image id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $produtoImage = $this->ProdutoImages->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $produtoImage = $this->ProdutoImages->patchEntity($produtoImage, $this->request->getData());
            if ($this->ProdutoImages->save($produtoImage)) {
                $this->Flash->success(__('The {0} has been saved.', 'Produto Image'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Produto Image'));
        }
        $products = $this->ProdutoImages->Products->find('list', ['limit' => 200]);
        $this->set(compact('produtoImage', 'products'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Produto Image id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $produtoImage = $this->ProdutoImages->get($id);
        if ($this->ProdutoImages->delete($produtoImage)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Produto Image'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Produto Image'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
