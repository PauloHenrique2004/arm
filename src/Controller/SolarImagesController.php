<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * SolarImages Controller
 *
 * @property \App\Model\Table\SolarImagesTable $SolarImages
 *
 * @method \App\Model\Entity\SolarImage[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class SolarImagesController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $solarImages = $this->paginate($this->SolarImages);

        $this->set(compact('solarImages'));
    }

    /**
     * View method
     *
     * @param string|null $id Solar Image id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $solarImage = $this->SolarImages->get($id, [
            'contain' => []
        ]);

        $this->set('solarImage', $solarImage);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $solarImage = $this->SolarImages->newEntity();
        if ($this->request->is('post')) {
            $solarImage = $this->SolarImages->patchEntity($solarImage, $this->request->getData());
            if ($this->SolarImages->save($solarImage)) {
                $this->Flash->success(__('The {0} has been saved.', 'Solar Image'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Solar Image'));
        }
        $this->set(compact('solarImage'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Solar Image id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $solarImage = $this->SolarImages->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $solarImage = $this->SolarImages->patchEntity($solarImage, $this->request->getData());
            if ($this->SolarImages->save($solarImage)) {
                $this->Flash->success(__('The {0} has been saved.', 'Solar Image'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Solar Image'));
        }
        $this->set(compact('solarImage'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Solar Image id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $solarImage = $this->SolarImages->get($id);
        if ($this->SolarImages->delete($solarImage)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Solar Image'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Solar Image'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
