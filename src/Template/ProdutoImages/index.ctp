<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
   Imagens Produtos

    <div class="pull-right"><?php echo $this->Html->link(__('New'), ['action' => 'add'], ['class'=>'btn btn-success btn-xs']) ?></div>
  </h1>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title"><?php echo __('List'); ?></h3>

        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover">
            <thead>
              <tr>
                  <th scope="col"><?= $this->Paginator->sort('id') ?></th>
                  <th scope="col"><?= $this->Paginator->sort('imagem') ?></th>
                  <th scope="col"><?= $this->Paginator->sort('product_id') ?></th>
                  <th scope="col" class="actions text-center"><?= __('') ?></th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($produtoImages as $produtoImage): ?>
                <tr>
                  <td><?= $this->Number->format($produtoImage->id) ?></td>
                    <td><img  style="height: 70px; margin-left: 11px" src="<?= "/files/ProdutoImages/imagem/" . $produtoImage->imagem ?>"></td>

                    <td><?= $produtoImage->has('product') ? $this->Html->link($produtoImage->product->name, ['controller' => 'Products', 'action' => 'view', $produtoImage->product->id]) : '' ?></td>
                  <td class="actions text-right">
                      <?= $this->Html->link(__('View'), ['action' => 'view', $produtoImage->id], ['class'=>'btn btn-info btn-xs']) ?>
                      <?= $this->Html->link(__('Edit'), ['action' => 'edit', $produtoImage->id], ['class'=>'btn btn-warning btn-xs']) ?>
                      <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $produtoImage->id], ['confirm' => __('Are you sure you want to delete # {0}?', $produtoImage->id), 'class'=>'btn btn-danger btn-xs']) ?>
                  </td>
                </tr>
              <?php endforeach; ?>
            </tbody>
          </table>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
  </div>
    <div class="paginator">
        <ul class="pagination">
            <?php echo $this->Paginator->first('<< ' . __('Primeira')); ?>
            <?php echo $this->Paginator->prev('< ' . __('Anterior')); ?>
            <?php echo $this->Paginator->numbers(); ?>
            <?php echo $this->Paginator->next(__('Próximo') . ' >'); ?>
            <?php echo $this->Paginator->last(__('Última') . ' >>'); ?>
        </ul>
    </div>
</section>
