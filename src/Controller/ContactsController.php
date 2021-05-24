<?php
namespace App\Controller;

use Cake\Event\Event;
use Cake\Mailer\Email;





class ContactsController extends AppController
{
    public function contato(){
        $this->viewBuilder()->setLayout('site');

        if ($this->request->is('post')){
            $formData = $this->request->getData();
            $email = new Email('default');
            $email->setFrom(['site@armconsultorias.com.br' => 'ARM Consultoria'])
                ->setTo('contato@armconsultorias.com')
                ->setSubject('Contato site ARM Consultoria')
                ->send(' Nome: ' . $formData['name']
                    . "\n". ' Email: ' . $formData['email']
                    . "\n". ' Telefone: ' . $formData['telefone']
                    . "\n". ' Mensagem: ' . $formData['message']);
        }

        $title = 'Contato';
        $this->set('title', $title);
    }

    public function beforeFilter(Event $event)
    {
        $this->Auth->allow(['contato']);
    }


}
