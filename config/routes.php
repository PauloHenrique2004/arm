<?php
/**
 * Routes configuration
 *
 * In this file, you set up routes to your controllers and their actions.
 * Routes are very important mechanism that allows you to freely connect
 * different URLs to chosen controllers and their actions (functions).
 *
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */
use Cake\Http\Middleware\CsrfProtectionMiddleware;
use Cake\Routing\RouteBuilder;
use Cake\Routing\Router;
use Cake\Routing\Route\DashedRoute;

Router::defaultRouteClass(DashedRoute::class);

Router::prefix('admin', function($routes){
    $routes->fallbacks(DashedRoute::class);
});

Router::scope('/', function (RouteBuilder $routes) {
    // Register scoped middleware for in scopes.
    $routes->registerMiddleware('csrf', new CsrfProtectionMiddleware([
        'httpOnly' => true
    ]));


    $routes->applyMiddleware('csrf');

    $routes->connect('/', ['controller' => 'Pages', 'action' => 'site']);
    $routes->connect('/admin', ['controller' => 'Users', 'action' => 'login']);
    $routes->connect('/contato', ['controller' => 'Contacts', 'action' => 'contato']);
    $routes->connect('/posts', ['controller' => 'Blog', 'action' => 'blog']);
    $routes->connect('/pesquisa/', ['controller' => 'Servicos', 'action' => 'pesquisa']);
    $routes->connect('/servico/', ['controller' => 'Servicos', 'action' => 'todos']);

    $routes->connect('/sobre-nos/:id', ['controller' => 'Abouts', 'action' => 'about'])->setPass(['id']);
    $routes->connect('/como-funciona/:id', ['controller' => 'Abouts', 'action' => 'about'])->setPass(['id']);
    $routes->connect('/empresa/:nome_empresa/:id', ['controller' => 'Empresas', 'action' => 'empresa'])->setPass(['nome_empresa','id']);
    $routes->connect('/categoria/:categoria/:id', ['controller' => 'Servicos', 'action' => 'categoria'])->setPass(['categoria','id']);
    $routes->connect('/servico/:nome/:id', ['controller' => 'Servicos', 'action' => 'single'])->setPass(['nome','id']);
    $routes->connect('/postagem/:title/:id', ['controller' => 'Blog', 'action' => 'post'])->setPass(['title','id']);


    /**
     * ...and connect the rest of 'Pages' controller's URLs.
     */
    $routes->connect('/pages/*', ['controller' => 'Pages', 'action' => 'display']);

    $routes->fallbacks(DashedRoute::class);
});

Router::connect('/sobre', ['controller' => 'Abouts', 'action' => 'about']);
