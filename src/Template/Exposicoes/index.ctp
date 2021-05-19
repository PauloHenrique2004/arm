<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    Exposicoes

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
                  <th scope="col"><?= $this->Paginator->sort('nome',['label' =>'Nome do exposição']) ?></th>
                  <th scope="col"><?= $this->Paginator->sort('data') ?></th>
                  <th scope="col"><?= $this->Paginator->sort('capa') ?></th>
                  <th scope="col"><?= $this->Paginator->sort('profissional',['label' =>'Nome do artísta']) ?></th>
                  <th scope="col"><?= $this->Paginator->sort('foto',['label' =>'Foto do artísta']) ?></th>
                  <th scope="col" class="actions text-center"><?= __('Actions') ?></th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($exposicoes as $exposico): ?>
                <tr>
                  <td><?= $this->Number->format($exposico->id) ?></td>
                  <td><?= h($exposico->nome) ?></td>
                  <td><?= h($exposico->data) ?></td>
                    <td><img  style="height: 70px; margin-left: 11px" src="<?= "/files/Exposicoes/capa/" . $exposico->capa ?>"></td>
                    <td><?= h($exposico->profissional) ?></td>
                    <td><img  style="height: 70px; margin-left: 11px" src="<?= "/files/Exposicoes/foto/" . $exposico->foto ?>"></td>
                    <td class="actions text-right">
                      <?= $this->Html->link(__('Edit'), ['action' => 'edit', $exposico->id], ['class'=>'btn btn-warning btn-xs']) ?>
                      <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $exposico->id], ['confirm' => __('Are you sure you want to delete # {0}?', $exposico->id), 'class'=>'btn btn-danger btn-xs']) ?>
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
