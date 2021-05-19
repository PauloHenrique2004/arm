<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;

/**
 * Portfolio Controller
 *
 * @property \App\Model\Table\PortfolioTable $Portfolio
 *
 * @method \App\Model\Entity\Portfolio[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class PortfolioController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $portfolio = $this->paginate($this->Portfolio);

        $this->set(compact('portfolio'));
    }

    /**
     * View method
     *
     * @param string|null $id Portfolio id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $portfolio = $this->Portfolio->get($id, [
            'contain' => []
        ]);

        $this->set('portfolio', $portfolio);
    }


    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $portfolio = $this->Portfolio->newEntity();
        if ($this->request->is('post')) {
            $portfolio = $this->Portfolio->patchEntity($portfolio, $this->request->getData());
            if ($this->Portfolio->save($portfolio)) {
                $this->Flash->success(__('The {0} has been saved.', 'Portfolio'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Portfolio'));
        }
        $this->set(compact('portfolio'));
    }


    /**
     * Edit method
     *
     * @param string|null $id Portfolio id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $portfolio = $this->Portfolio->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $portfolio = $this->Portfolio->patchEntity($portfolio, $this->request->getData());
            if ($this->Portfolio->save($portfolio)) {
                $this->Flash->success(__('The {0} has been saved.', 'Portfolio'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The {0} could not be saved. Please, try again.', 'Portfolio'));
        }
        $this->set(compact('portfolio'));
    }


    /**
     * Delete method
     *
     * @param string|null $id Portfolio id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $portfolio = $this->Portfolio->get($id);
        if ($this->Portfolio->delete($portfolio)) {
            $this->Flash->success(__('The {0} has been deleted.', 'Portfolio'));
        } else {
            $this->Flash->error(__('The {0} could not be deleted. Please, try again.', 'Portfolio'));
        }

        return $this->redirect(['action' => 'index']);
    }


    public function portifolio(){
        $this->paginate = [
            'limit'=> 6,
        ];
        $this->viewBuilder()->setLayout('site');
        $portifolio = $this->paginate($this->Portfolio);
        $this->set('portifolio', $portifolio);
    }
    public function portifolioSingle($id)
    {
        $this->viewBuilder()->setLayout('site');
        $portifolioSingle = $this->Portfolio->get($id);
        $this->set('portifolioSingle', $portifolioSingle);
    }

    public function beforeFilter(Event $event)
    {
        $this->Auth->allow(['portifolio','portifolioSingle']);
    }
}
