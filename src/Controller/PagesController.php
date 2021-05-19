<?php
/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link      https://cakephp.org CakePHP(tm) Project
 * @since     0.2.9
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 */

namespace App\Controller;

use Cake\Core\Configure;
use Cake\Http\Exception\ForbiddenException;
use Cake\Http\Exception\NotFoundException;
use Cake\Mailer\Email;
use Cake\View\Exception\MissingTemplateException;
use Cake\Event\Event;

include 'ContactsController.php';


/**
 * Static content controller
 *
 * This controller will render views from Template/Pages/
 *
 * @link https://book.cakephp.org/3.0/en/controllers/pages-controller.html
 */
class PagesController extends AppController
{

    /**
     * Displays a view
     *
     * @param array ...$path Path segments.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Http\Exception\ForbiddenException When a directory traversal attempt.
     * @throws \Cake\Http\Exception\NotFoundException When the view file could not
     *   be found or \Cake\View\Exception\MissingTemplateException in debug mode.
     */
    public function display(...$path)
    {
        $count = count($path);
        if (!$count) {
            return $this->redirect('/');
        }
        if (in_array('..', $path, true) || in_array('.', $path, true)) {
            throw new ForbiddenException();
        }
        $page = $subpage = null;

        if (!empty($path[0])) {
            $page = $path[0];
        }
        if (!empty($path[1])) {
            $subpage = $path[1];
        }
        $this->set(compact('page', 'subpage'));

        try {
            $this->render(implode('/', $path));
        } catch (MissingTemplateException $exception) {
            if (Configure::read('debug')) {
                throw $exception;
            }
            throw new NotFoundException();
        }
    }

    public function site()
    {
        $this->viewBuilder()->setLayout('site');
        $this->loadModel('Sliders');
        $this->loadModel('Abouts');
        $this->loadModel('Servicos');
        $this->loadModel('Blog');
        $this->loadModel('Empresas');
        $this->loadModel('Exposicoes');
        $this->loadModel("Destaques");


        $servicos = $this->Servicos->find('all')->order(['id' => 'desc'])->limit(3);
        $sobre = $this->Abouts->find('all');
        $sliders = $this->Sliders->find('all')->order(['id' => 'desc']);
        $blog = $this->Blog->find('all')->order(['id DESC'])->limit(3);
        $exposicoes = $this->Exposicoes->find()->order(['id DESC'])->limit(6);
        $empresas = $this->Empresas->find('all');
        $nome = $this->Empresas->Servicos->find('all');
        $destaques = $this->Destaques->find('all')->order(['id DESC']);
        $nomeDestaques = $this->Empresas->find('all');
//               $nome = $this->Empresas->Servicos->find('all')->where(['Empresas.id' => 'Servicos.empresa_id']);

//        var_dump($nomeDestaques); die();

        $title = 'Início';
        $this->set('servicos', $servicos);
        $this->set('sobre', $sobre);
        $this->set('sliders', $sliders);
        $this->set('blog',$blog );
        $this->set('exposicoes',$exposicoes );
        $this->set('empresas',$empresas );
        $this->set('nome',$nome );
        $this->set('destaques', $destaques);
        $this->set('nomeDestaques', $nomeDestaques);
        $this->set('title',$title );


        $this->loadPublicDependencies();


    }



    public function beforeFilter(Event $event)
    {
        $this->Auth->allow();
    }


}
