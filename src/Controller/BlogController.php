<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;
use Intervention\Image\ImageManagerStatic as Image;

/**
 * Blog Controller
 *
 * @property \App\Model\Table\BlogTable $Blog
 *
 * @method \App\Model\Entity\Blog[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class BlogController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {

        $blog = $this->paginate($this->Blog->find()->order(['id' => 'desc']));

        $this->set(compact('blog'));
    }

    /**
     * View method
     *
     * @param string|null $id Blog id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $blog = $this->Blog->get($id, [
            'contain' => ['Categories']
        ]);

        $this->set('blog', $blog);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $blog = $this->Blog->newEntity();
        if ($this->request->is('post')) {
            $blog = $this->Blog->patchEntity($blog, $this->request->getData());
            if ($this->Blog->save($blog)) {
                $this->resizeImage($blog->photo);
                $this->Flash->success(__('The {0} has been saved.', 'Blog'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Blog'));
        }
        $categories = $this->Blog->find('list', ['limit' => 200]);
        $this->set(compact('blog'));
    }



    /**
     * Edit method
     *
     * @param string|null $id Blog id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $blog = $this->Blog->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $blog = $this->Blog->patchEntity($blog, $this->request->getData());
            if ($this->Blog->save($blog)) {
                $this->resizeImage($blog->photo);
                $this->Flash->success(__('The {0} has been saved.', 'Blog'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Blog'));
        }
        $categories = $this->Blog->find('list', ['limit' => 200]);
        $this->set(compact('blog', 'categories'));
    }



    private function getImageFullPath($target) {
        $currentDir = getcwd();
        return "$currentDir/files/Blog/photo/$target";
    }

    private function getImageThumbFullPath($target) {
        $currentDir = getcwd();
        return "$currentDir/files/Blog/photo/thumb-$target";

    }



    private function resizeImage($target) {
        $targetFullPath = $this->getImageFullPath($target);
//        ini_set('memory_limit','2048M');


        if(file_exists($targetFullPath)) {
            // Thumb
            Image::make($targetFullPath)->resize(400, 250)->save($this->getImageThumbFullPath($target));

            // Dessa forma sobrecreve a original
            Image::make($targetFullPath)->widen(900, function ($constraint) {
                $constraint->upsize();
            })->save($targetFullPath);
        }
    }




    /**
     * Delete method
     *
     * @param string|null $id Blog id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $blog = $this->Blog->get($id);
        if ($this->Blog->delete($blog)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Blog'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Blog'));
        }

        return $this->redirect(['action' => 'index']);
    }

    public function blog(){
        $this->paginate = [
            'limit'=> 6,
        ];
        $this->viewBuilder()->setLayout('site');
        $blog = $this->paginate($this->Blog);
        $this->set('blog', $blog);

        $title = 'Blog';
        $this->set('title', $title);
    }





    public function post($id)
    {
        $this->viewBuilder()->setLayout('site');
        $post = $this->Blog->get($id);
        $this->set('post', $post);
        $recentes = $this->Blog->find('all')->order(['id DESC'])->limit(4);

        $this->set('recentes', $recentes);

        $title = 'Post';
        $this->set('title', $title);

    }

    public function beforeFilter(Event $event)
    {
        $this->Auth->allow(['blog','post']);
    }

}
