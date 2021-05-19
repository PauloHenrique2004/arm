<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * ProjectsImages Controller
 *
 * @property \App\Model\Table\ProjectsImagesTable $ProjectsImages
 *
 * @method \App\Model\Entity\ProjectsImage[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ProjectsImagesController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $projectsImages = $this->paginate($this->ProjectsImages);

        $this->set(compact('projectsImages'));
    }

    /**
     * View method
     *
     * @param string|null $id Projects Image id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $projectsImage = $this->ProjectsImages->get($id, [
            'contain' => []
        ]);

        $this->set('projectsImage', $projectsImage);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $this->LoadModel('Projects');
        $projects = $this->Projects->find('all');
        $this->set('projects', $projects);

        $projectsImage = $this->ProjectsImages->newEntity();
        if ($this->request->is('post')) {
            $projectsImage = $this->ProjectsImages->patchEntity($projectsImage, $this->request->getData());
            if ($this->ProjectsImages->save($projectsImage)) {
                $this->Flash->success(__('The {0} has been saved.', 'Projects Image'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Projects Image'));
        }
        $this->set(compact('projectsImage'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Projects Image id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $this->LoadModel('Projects');
        $projects = $this->Projects->find('all');
        $this->set('projects', $projects);
        $projectsImage = $this->ProjectsImages->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $projectsImage = $this->ProjectsImages->patchEntity($projectsImage, $this->request->getData());
            if ($this->ProjectsImages->save($projectsImage)) {
                $this->Flash->success(__('The {0} has been saved.', 'Projects Image'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Projects Image'));
        }
        $this->set(compact('projectsImage'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Projects Image id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {

        $this->request->allowMethod(['post', 'delete']);
        $projectsImage = $this->ProjectsImages->get($id);
        if ($this->ProjectsImages->delete($projectsImage)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Projects Image'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Projects Image'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
