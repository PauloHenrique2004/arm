<section class="content-header">
  <h1>
    Projects Image
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
            <dt scope="row"><?= __('Name') ?></dt>
            <dd><?= h($projectsImage->name) ?></dd>
            <dt scope="row"><?= __('Photo') ?></dt>
            <dd><?= h($projectsImage->photo) ?></dd>
            <dt scope="row"><?= __('Photo Dir') ?></dt>
            <dd><?= h($projectsImage->photo_dir) ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($projectsImage->id) ?></dd>
            <dt scope="row"><?= __('Created') ?></dt>
            <dd><?= h($projectsImage->created) ?></dd>
            <dt scope="row"><?= __('Modified') ?></dt>
            <dd><?= h($projectsImage->modified) ?></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

</section>
