<section class="content-header">
  <h1>
    Exposico
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
            <dd><?= h($exposico->nome) ?></dd>
            <dt scope="row"><?= __('Capa') ?></dt>
            <dd><?= h($exposico->capa) ?></dd>
            <dt scope="row"><?= __('Capa Dir') ?></dt>
            <dd><?= h($exposico->capa_dir) ?></dd>
            <dt scope="row"><?= __('Profissional') ?></dt>
            <dd><?= h($exposico->profissional) ?></dd>
            <dt scope="row"><?= __('Foto') ?></dt>
            <dd><?= h($exposico->foto) ?></dd>
            <dt scope="row"><?= __('Foto Dir') ?></dt>
            <dd><?= h($exposico->foto_dir) ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($exposico->id) ?></dd>
            <dt scope="row"><?= __('Data') ?></dt>
            <dd><?= h($exposico->data) ?></dd>
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
            <?= $this->Text->autoParagraph($exposico->descricao); ?>
        </div>
      </div>
    </div>
  </div>
</section>
