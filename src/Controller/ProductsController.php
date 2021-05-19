<?php
namespace App\Controller;
use Cake\Event\Event;
use App\Controller\AppController;
use Intervention\Image\ImageManagerStatic as Image;

/**
 * Products Controller
 *
 * @property \App\Model\Table\ProductsTable $Products
 *
 * @method \App\Model\Entity\Product[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ProductsController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $this->paginate = [
            'order' => ['id DESC']
        ];

        $products = $this->paginate($this->Products);

        $this->set(compact('products'));
    }

    /**
     * View method
     *
     * @param string|null $id Product id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $product = $this->Products->get($id, [
            'contain' => []
        ]);

        $this->set('product', $product);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $product = $this->Products->newEntity();
        if ($this->request->is('post')) {
            $product = $this->Products->patchEntity($product, $this->request->getData());
            if ($this->Products->save($product)) {
                $this->resizeImage($product->capa);
                $this->Flash->success(__('The {0} has been saved.', 'Product'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Product'));
        }
        $this->set(compact('product'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Product id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $product = $this->Products->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $product = $this->Products->patchEntity($product, $this->request->getData());
            if ($this->Products->save($product)) {
                $this->resizeImage($product->capa);
                $this->Flash->success(__('The {0} has been saved.', 'Product'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Product'));
        }
        $this->set(compact('product'));
    }

    private function getImageFullPath($target) {
        $currentDir = getcwd();
        return "$currentDir/files/Products/capa/$target";
    }

    private function getImageThumbFullPath($target) {
        $currentDir = getcwd();
        return "$currentDir/files/Products/capa/thumb-$target";
    }


    private function resizeImage($target) {
        $targetFullPath = $this->getImageFullPath($target);
//        ini_set('memory_limit','2048M');


        if(file_exists($targetFullPath)) {
            // Thumb
            Image::make($targetFullPath)->resize(400, 400)->save($this->getImageThumbFullPath($target));

            // Dessa forma sobrecreve a original
            Image::make($targetFullPath)->widen(800, function ($constraint) {
                $constraint->upsize();
            })->save($targetFullPath);
        }
    }


    /**
     * Delete method
     *
     * @param string|null $id Product id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $product = $this->Products->get($id);
        if ($this->Products->delete($product)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Product'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Product'));
        }

        return $this->redirect(['action' => 'index']);
    }

    public function product(){
        $this->paginate = [
            'limit'=> 8,
        ];

        $this->viewBuilder()->setLayout('site');
        $product = $this->paginate($this->Products->find()->order(['id DESC']));
        $this->set('product', $product);

        $title = 'Produtos';
        $this->set('title', $title);
    }


    public function productSingle($id){
        $this->viewBuilder()->setLayout('site');
        $productSingle = $this->Products->get($id);
        $this->set('productSingle', $productSingle);
        $this->loadModel('Produto_images');
        $imagens = $this->Produto_images->find('all')->where(['Produto_images.product_id' => $id]);
        $this->set('imagens', $imagens);
        $title = 'Produto';
        $this->set('title', $title);
    }


    public function beforeFilter(Event $event){
        $this->Auth->allow(['product','productSingle']);
    }




}
