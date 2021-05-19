<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    Imagens Cestas de Café da Manhã

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
                  <th scope="col"><?= $this->Paginator->sort('imagem') ?></th>
                  <th scope="col"><?= $this->Paginator->sort('cesta_id') ?></th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($cestaImagens as $cestaImagen): ?>
                <tr>
                  <td><?= $this->Number->format($cestaImagen->id) ?></td>
                    <td><img  style="height: 70px; margin-left: 11px" src="<?= "/files/CestaImagens/imagem/" . $cestaImagen->imagem ?>"></td>


                    <td><?= $cestaImagen->has('cesta') ? $this->Html->link($cestaImagen->cesta->name, ['controller' => 'Cestas', 'action' => 'view', $cestaImagen->cesta->id]) : '' ?></td>



                    <td class="actions text-right">
                      <?= $this->Html->link(__('View'), ['action' => 'view', $cestaImagen->id], ['class'=>'btn btn-info btn-xs']) ?>
                      <?= $this->Html->link(__('Edit'), ['action' => 'edit', $cestaImagen->id], ['class'=>'btn btn-warning btn-xs']) ?>
                      <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $cestaImagen->id], ['confirm' => __('Are you sure you want to delete # {0}?', $cestaImagen->id), 'class'=>'btn btn-danger btn-xs']) ?>
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
</section>
