<ul class="sidebar-menu" data-widget="tree">
    <li class="header">MENU</li>
    <li>
        <a href="<?php echo $this->Url->build('/'); ?>">
            <i class="fa fa-dashboard" aria-hidden="true"></i>
            <span>Ir para o site</span>
            <span class="pull-right-container">
      </span>
        </a>

    </li>


    <li>
        <a href="<?php echo $this->Url->build('/users/index'); ?>">
            <i class="fa fa-circle-o" aria-hidden="true"></i>
            <span>Usuarios</span>
            <span class="pull-right-container">
      </span>
        </a>
    </li>

    <li>
        <a href="<?php echo $this->Url->build('/sliders/index'); ?>">
            <i class="fa fa-circle-o" aria-hidden="true"></i>
            <span>Banner</span>
            <span class="pull-right-container">
      </span>
        </a>
    </li>

    <li>
        <a href="<?php echo $this->Url->build('/abouts/edit/5'); ?>">
            <i class="fa fa-circle-o" aria-hidden="true"></i>
            <span>A Empresa</span>
            <span class="pull-right-container">
      </span>
        </a>
    </li>

    <li>
        <a href="<?php echo $this->Url->build('/abouts/edit/8'); ?>">
            <i class="fa fa-circle-o" aria-hidden="true"></i>
            <span>Como Funciona</span>
            <span class="pull-right-container">
      </span>
        </a>
    </li>

    <li>
        <a href="<?php echo $this->Url->build('/SobreImagens'); ?>">
            <i class="fa fa-circle-o" aria-hidden="true"></i>
            <span style="font-size: 12px">Imagens Sobre Nós e Como Funciona</span>
            <span class="pull-right-container">
      </span>
        </a>
    </li>


    <li class="treeview">
        <a href="#">
            <i class="fa fa-circle-o"></i>
            <span>Serviços</span>
            <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i></span>
        </a>
        <ul class="treeview-menu">

            <li class="">
                <a href="<?php echo $this->Url->build('/servicos'); ?>">
                    <i class="fa fa-circle"></i> Serviços</a>
            </li>

            <li class="">
                <a href="<?php echo $this->Url->build('/servicoImagens'); ?>">
                    <i class="fa fa-circle"></i> Serviços imagens</a>
            </li>
        </ul>
    </li>

</ul>
