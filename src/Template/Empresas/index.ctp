<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    Empresas

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
                  <th scope="col"><?= $this->Paginator->sort('categoria_id') ?></th>
                  <th scope="col"><?= $this->Paginator->sort('nome_empresa',['label' => 'Nome da Empresa']) ?></th>
                  <th scope="col"><?= $this->Paginator->sort('nome_servico',['label' => 'Nome do Serviço']) ?></th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($empresas as $empresa): ?>
                <tr>
                  <td><?= $this->Number->format($empresa->id) ?></td>
                  <td><?= $empresa->has('categoria') ? $this->Html->link($empresa->categoria->categoria, ['controller' => 'Categorias', 'action' => 'view', $empresa->categoria->id]) : '' ?></td>
                  <td><?= h($empresa->nome_empresa) ?></td>
                  <td><?= h($empresa->nome_servico) ?></td>
                  <td class="actions text-right">
                      <?= $this->Html->link(__('Edit'), ['action' => 'edit', $empresa->id], ['class'=>'btn btn-warning btn-xs']) ?>
                      <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $empresa->id], ['confirm' => __('Are you sure you want to delete # {0}?', $empresa->id), 'class'=>'btn btn-danger btn-xs']) ?>
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
