<section class="content-header">
  <h1>
    Empresa
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
            <dt scope="row"><?= __('Categoria') ?></dt>
            <dd><?= $empresa->has('categoria') ? $this->Html->link($empresa->categoria->categoria, ['controller' => 'Categorias', 'action' => 'view', $empresa->categoria->id]) : '' ?></dd>
            <dt scope="row"><?= __('Nome Empresa') ?></dt>
            <dd><?= h($empresa->nome_empresa) ?></dd>
            <dt scope="row"><?= __('Nome Servico') ?></dt>
            <dd><?= h($empresa->nome_servico) ?></dd>
            <dt scope="row"><?= __('Tel Contato') ?></dt>
            <dd><?= h($empresa->tel_contato) ?></dd>
            <dt scope="row"><?= __('Tel Whats') ?></dt>
            <dd><?= h($empresa->tel_whats) ?></dd>
            <dt scope="row"><?= __('Facebook') ?></dt>
            <dd><?= h($empresa->facebook) ?></dd>
            <dt scope="row"><?= __('Instagram') ?></dt>
            <dd><?= h($empresa->instagram) ?></dd>
            <dt scope="row"><?= __('Email') ?></dt>
            <dd><?= h($empresa->email) ?></dd>
            <dt scope="row"><?= __('Site') ?></dt>
            <dd><?= h($empresa->site) ?></dd>
            <dt scope="row"><?= __('Endereco') ?></dt>
            <dd><?= h($empresa->endereco) ?></dd>
            <dt scope="row"><?= __('Capa') ?></dt>
            <dd><?= h($empresa->capa) ?></dd>
            <dt scope="row"><?= __('Capa Dir') ?></dt>
            <dd><?= h($empresa->capa_dir) ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($empresa->id) ?></dd>
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
          <h3 class="box-title"><?= __('Descricao Servico') ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <?= $this->Text->autoParagraph($empresa->descricao_servico); ?>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header with-border">
          <i class="fa fa-share-alt"></i>
          <h3 class="box-title"><?= __('Servicos') ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <?php if (!empty($empresa->servicos)): ?>
          <table class="table table-hover">
              <tr>
                    <th scope="col"><?= __('Id') ?></th>
                    <th scope="col"><?= __('Empresa Id') ?></th>
                    <th scope="col"><?= __('Nome') ?></th>
                    <th scope="col"><?= __('Capa') ?></th>
                    <th scope="col"><?= __('Capa Dir') ?></th>
                    <th scope="col" class="actions text-center"><?= __('Actions') ?></th>
              </tr>
              <?php foreach ($empresa->servicos as $servicos): ?>
              <tr>
                    <td><?= h($servicos->id) ?></td>
                    <td><?= h($servicos->empresa_id) ?></td>
                    <td><?= h($servicos->nome) ?></td>
                    <td><?= h($servicos->capa) ?></td>
                    <td><?= h($servicos->capa_dir) ?></td>
                      <td class="actions text-right">
                      <?= $this->Html->link(__('View'), ['controller' => 'Servicos', 'action' => 'view', $servicos->id], ['class'=>'btn btn-info btn-xs']) ?>
                      <?= $this->Html->link(__('Edit'), ['controller' => 'Servicos', 'action' => 'edit', $servicos->id], ['class'=>'btn btn-warning btn-xs']) ?>
                      <?= $this->Form->postLink(__('Delete'), ['controller' => 'Servicos', 'action' => 'delete', $servicos->id], ['confirm' => __('Are you sure you want to delete # {0}?', $servicos->id), 'class'=>'btn btn-danger btn-xs']) ?>
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
