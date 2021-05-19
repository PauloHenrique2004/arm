<section class="content-header">
  <h1>
    Media
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
            <dt scope="row"><?= __('Nome') ?></dt>
            <dd><?= h($media->nome) ?></dd>
            <dt scope="row"><?= __('Imagem') ?></dt>
            <dd><?= h($media->imagem) ?></dd>
            <dt scope="row"><?= __('Imagem Dir') ?></dt>
            <dd><?= h($media->imagem_dir) ?></dd>
            <dt scope="row"><?= __('Video') ?></dt>
            <dd><?= h($media->video) ?></dd>
            <dt scope="row"><?= __('Exposico') ?></dt>
            <dd><?= $media->has('exposico') ? $this->Html->link($media->exposico->id, ['controller' => 'Exposicoes', 'action' => 'view', $media->exposico->id]) : '' ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($media->id) ?></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header with-border">
          <i class="fa fa-text-width"></i>
          <h3 class="box-title"><?= __('Descricao') ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <?= $this->Text->autoParagraph($media->descricao); ?>
        </div>
      </div>
    </div>
  </div>
</section>
