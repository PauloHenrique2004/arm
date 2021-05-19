<section class="content-header">
  <h1>
    Servico Imagen
    <small><?php echo __('View'); ?></small>
  </h1>
  <ol class="breadcrumb">
    <li><a href="<?php echo $this->Url->build(['action' => 'index']); ?>"><i class="fa fa-dashboard"></i> <?php echo __('Home'); ?></a></li>
  </ol>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header with-border">
          <i class="fa fa-info"></i>
          <h3 class="box-title"><?php echo __('Information'); ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <dl class="dl-horizontal">
            <dt scope="row"><?= __('Imagem') ?></dt>
            <dd><?= h($servicoImagen->imagem) ?></dd>
            <dt scope="row"><?= __('Imagem Dir') ?></dt>
            <dd><?= h($servicoImagen->imagem_dir) ?></dd>
            <dt scope="row"><?= __('Servico') ?></dt>
            <dd><?= $servicoImagen->has('servico') ? $this->Html->link($servicoImagen->servico->id, ['controller' => 'Servicos', 'action' => 'view', $servicoImagen->servico->id]) : '' ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($servicoImagen->id) ?></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

</section>
