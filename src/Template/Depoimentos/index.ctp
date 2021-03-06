<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    Depoimentos

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

          <div class="box-tools">
            <form action="<?php echo $this->Url->build(); ?>" method="POST">
           <!--              <div class="input-group input-group-sm" style="width: 150px;">-->
<!--                <input type="text" name="table_search" class="form-control pull-right" placeholder="--><?php //echo __('Search'); ?><!--">-->
<!---->
<!--                <div class="input-group-btn">-->
<!--                  <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>-->
<!--                </div>-->
<!--              </div>-->
            </form>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover">
            <thead>
              <tr>
                  <th scope="col"><?= $this->Paginator->sort('id') ?></th>
                  <th scope="col"><?= $this->Paginator->sort('cliente') ?></th>
                  <th scope="col"><?= $this->Paginator->sort('photo') ?></th>
                  <th scope="col" class="actions text-center"><?= __('') ?></th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($depoimentos as $depoimento): ?>
                <tr>
                  <td><?= $this->Number->format($depoimento->id) ?></td>
                  <td><?= h($depoimento->cliente) ?></td>
                    <td><img  style="height: 70px; margin-left: 11px" src="<?= "/files/Depoimentos/photo/" . $depoimento->photo ?>"></td>
                  <td class="actions text-right">
                      <?= $this->Html->link(__('Edit'), ['action' => 'edit', $depoimento->id], ['class'=>'btn btn-warning btn-xs']) ?>
                      <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $depoimento->id], ['confirm' => __('Are you sure you want to delete # {0}?', $depoimento->id), 'class'=>'btn btn-danger btn-xs']) ?>
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
            <?php echo $this->Paginator->next(__('Pr??ximo') . ' >'); ?>
            <?php echo $this->Paginator->last(__('??ltima') . ' >>'); ?>
        </ul>
    </div>
</section>
