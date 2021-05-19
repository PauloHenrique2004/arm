<section class="content-header">
  <h1>
    Categoria
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
            <dd><?= h($categoria->categoria) ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($categoria->id) ?></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header with-border">
          <i class="fa fa-share-alt"></i>
          <h3 class="box-title"><?= __('Empresas') ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <?php if (!empty($categoria->empresas)): ?>
          <table class="table table-hover">
              <tr>
                    <th scope="col"><?= __('Id') ?></th>
                    <th scope="col"><?= __('Categoria Id') ?></th>
                    <th scope="col"><?= __('Nome Empresa') ?></th>
                    <th scope="col"><?= __('Nome Servico') ?></th>
                    <th scope="col"><?= __('Descricao Servico') ?></th>
                    <th scope="col"><?= __('Tel Contato') ?></th>
                    <th scope="col"><?= __('Tel Whats') ?></th>
                    <th scope="col"><?= __('Facebook') ?></th>
                    <th scope="col"><?= __('Instagram') ?></th>
                    <th scope="col"><?= __('Email') ?></th>
                    <th scope="col"><?= __('Site') ?></th>
                    <th scope="col"><?= __('Endereco') ?></th>
                    <th scope="col"><?= __('Capa') ?></th>
                    <th scope="col"><?= __('Capa Dir') ?></th>
                    <th scope="col" class="actions text-center"><?= __('Actions') ?></th>
              </tr>
              <?php foreach ($categoria->empresas as $empresas): ?>
              <tr>
                    <td><?= h($empresas->id) ?></td>
                    <td><?= h($empresas->categoria_id) ?></td>
                    <td><?= h($empresas->nome_empresa) ?></td>
                    <td><?= h($empresas->nome_servico) ?></td>
                    <td><?= h($empresas->descricao_servico) ?></td>
                    <td><?= h($empresas->tel_contato) ?></td>
                    <td><?= h($empresas->tel_whats) ?></td>
                    <td><?= h($empresas->facebook) ?></td>
                    <td><?= h($empresas->instagram) ?></td>
                    <td><?= h($empresas->email) ?></td>
                    <td><?= h($empresas->site) ?></td>
                    <td><?= h($empresas->endereco) ?></td>
                    <td><?= h($empresas->capa) ?></td>
                    <td><?= h($empresas->capa_dir) ?></td>
                      <td class="actions text-right">
                      <?= $this->Html->link(__('View'), ['controller' => 'Empresas', 'action' => 'view', $empresas->id], ['class'=>'btn btn-info btn-xs']) ?>
                      <?= $this->Html->link(__('Edit'), ['controller' => 'Empresas', 'action' => 'edit', $empresas->id], ['class'=>'btn btn-warning btn-xs']) ?>
                      <?= $this->Form->postLink(__('Delete'), ['controller' => 'Empresas', 'action' => 'delete', $empresas->id], ['confirm' => __('Are you sure you want to delete # {0}?', $empresas->id), 'class'=>'btn btn-danger btn-xs']) ?>
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
