<section class="content-header">
  <h1>
    Produto Image
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
            <dd><?= h($produtoImage->imagem) ?></dd>
            <dt scope="row"><?= __('Imagem Dir') ?></dt>
            <dd><?= h($produtoImage->imagem_dir) ?></dd>
            <dt scope="row"><?= __('Product') ?></dt>
            <dd><?= $produtoImage->has('product') ? $this->Html->link($produtoImage->product->name, ['controller' => 'Products', 'action' => 'view', $produtoImage->product->id]) : '' ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($produtoImage->id) ?></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

</section>
