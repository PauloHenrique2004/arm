<section class="content-header">
  <h1>
    Blog
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
            <dt scope="row"><?= __('Title') ?></dt>
            <dd><?= h($blog->title) ?></dd>
            <dt scope="row"><?= __('Signature') ?></dt>
            <dd><?= h($blog->signature) ?></dd>
            <dt scope="row"><?= __('Date') ?></dt>
            <dd><?= h($blog->date) ?></dd>
            <dt scope="row"><?= __('Photo') ?></dt>
            <dd><?= h($blog->photo) ?></dd>
            <dt scope="row"><?= __('Photo Dir') ?></dt>
            <dd><?= h($blog->photo_dir) ?></dd>
            <dt scope="row"><?= __('Category') ?></dt>
            <dd><?= $blog->has('category') ? $this->Html->link($blog->category->title, ['controller' => 'Categories', 'action' => 'view', $blog->category->id]) : '' ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($blog->id) ?></dd>
            <dt scope="row"><?= __('Created') ?></dt>
            <dd><?= h($blog->created) ?></dd>
            <dt scope="row"><?= __('Modified') ?></dt>
            <dd><?= h($blog->modified) ?></dd>
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
          <h3 class="box-title"><?= __('Description') ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <?= $this->Text->autoParagraph($blog->description); ?>
        </div>
      </div>
    </div>
  </div>
</section>
