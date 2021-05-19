<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * CivicImages Controller
 *
 * @property \App\Model\Table\CivicImagesTable $CivicImages
 *
 * @method \App\Model\Entity\CivicImage[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class CivicImagesController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $civicImages = $this->paginate($this->CivicImages);

        $this->set(compact('civicImages'));
    }

    /**
     * View method
     *
     * @param string|null $id Civic Image id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $civicImage = $this->CivicImages->get($id, [
            'contain' => []
        ]);

        $this->set('civicImage', $civicImage);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $civicImage = $this->CivicImages->newEntity();
        if ($this->request->is('post')) {
            $civicImage = $this->CivicImages->patchEntity($civicImage, $this->request->getData());
            if ($this->CivicImages->save($civicImage)) {
                $this->Flash->success(__('The {0} has been saved.', 'Civic Image'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Civic Image'));
        }
        $this->set(compact('civicImage'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Civic Image id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $civicImage = $this->CivicImages->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $civicImage = $this->CivicImages->patchEntity($civicImage, $this->request->getData());
            if ($this->CivicImages->save($civicImage)) {
                $this->Flash->success(__('The {0} has been saved.', 'Civic Image'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Civic Image'));
        }
        $this->set(compact('civicImage'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Civic Image id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $civicImage = $this->CivicImages->get($id);
        if ($this->CivicImages->delete($civicImage)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Civic Image'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Civic Image'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
