<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * SobreImagens Controller
 *
 * @property \App\Model\Table\SobreImagensTable $SobreImagens
 *
 * @method \App\Model\Entity\SobreImagen[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class SobreImagensController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $this->paginate = [
            'contain' => ['Abouts'],
            'order' => ['id' => 'desc']
        ];
        $sobreImagens = $this->paginate($this->SobreImagens);

        $this->set(compact('sobreImagens'));
    }

    /**
     * View method
     *
     * @param string|null $id Sobre Imagen id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $sobreImagen = $this->SobreImagens->get($id, [
            'contain' => ['Abouts']
        ]);

        $this->set('sobreImagen', $sobreImagen);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $sobreImagen = $this->SobreImagens->newEntity();
        if ($this->request->is('post')) {
            $sobreImagen = $this->SobreImagens->patchEntity($sobreImagen, $this->request->getData());
            if ($this->SobreImagens->save($sobreImagen)) {
                $this->Flash->success(__('The {0} has been saved.', 'Sobre Imagen'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Sobre Imagen'));
        }
        $abouts = $this->SobreImagens->Abouts->find('list', ['limit' => 200]);
        $this->set(compact('sobreImagen', 'abouts'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Sobre Imagen id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $sobreImagen = $this->SobreImagens->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $sobreImagen = $this->SobreImagens->patchEntity($sobreImagen, $this->request->getData());
            if ($this->SobreImagens->save($sobreImagen)) {
                $this->Flash->success(__('The {0} has been saved.', 'Sobre Imagen'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Sobre Imagen'));
        }
        $abouts = $this->SobreImagens->Abouts->find('list', ['limit' => 200]);
        $this->set(compact('sobreImagen', 'abouts'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Sobre Imagen id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $sobreImagen = $this->SobreImagens->get($id);
        if ($this->SobreImagens->delete($sobreImagen)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Sobre Imagen'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Sobre Imagen'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
