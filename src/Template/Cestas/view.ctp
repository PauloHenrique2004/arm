<section class="content-header">
  <h1>
    Cesta
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
            <dd><?= h($cesta->name) ?></dd>
            <dt scope="row"><?= __('Capa') ?></dt>
            <dd><?= h($cesta->capa) ?></dd>
            <dt scope="row"><?= __('Capa Dir') ?></dt>
            <dd><?= h($cesta->capa_dir) ?></dd>
            <dt scope="row"><?= __('Preco') ?></dt>
            <dd><?= h($cesta->preco) ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($cesta->id) ?></dd>
            <dt scope="row"><?= __('Created') ?></dt>
            <dd><?= h($cesta->created) ?></dd>
            <dt scope="row"><?= __('Modified') ?></dt>
            <dd><?= h($cesta->modified) ?></dd>
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
            <?= $this->Text->autoParagraph($cesta->description); ?>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header with-border">
          <i class="fa fa-share-alt"></i>
          <h3 class="box-title"><?= __('Produto Images') ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <?php if (!empty($cesta->produto_images)): ?>
          <table class="table table-hover">
              <tr>
                    <th scope="col"><?= __('Id') ?></th>
                    <th scope="col"><?= __('Imagem') ?></th>
                    <th scope="col"><?= __('Imagem Dir') ?></th>
                    <th scope="col"><?= __('Cesta Id') ?></th>
                    <th scope="col" class="actions text-center"><?= __('Actions') ?></th>
              </tr>
              <?php foreach ($cesta->produto_images as $produtoImages): ?>
              <tr>
                    <td><?= h($produtoImages->id) ?></td>
                    <td><?= h($produtoImages->imagem) ?></td>
                    <td><?= h($produtoImages->imagem_dir) ?></td>
                    <td><?= h($produtoImages->cesta_id) ?></td>
                      <td class="actions text-right">
                      <?= $this->Html->link(__('View'), ['controller' => 'ProdutoImages', 'action' => 'view', $produtoImages->id], ['class'=>'btn btn-info btn-xs']) ?>
                      <?= $this->Html->link(__('Edit'), ['controller' => 'ProdutoImages', 'action' => 'edit', $produtoImages->id], ['class'=>'btn btn-warning btn-xs']) ?>
                      <?= $this->Form->postLink(__('Delete'), ['controller' => 'ProdutoImages', 'action' => 'delete', $produtoImages->id], ['confirm' => __('Are you sure you want to delete # {0}?', $produtoImages->id), 'class'=>'btn btn-danger btn-xs']) ?>
                  </td>
              </tr>
              <?php endforeach; ?>
          </table>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</section>
