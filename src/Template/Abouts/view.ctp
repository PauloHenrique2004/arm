<section class="content-header">
  <h1>
    About
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
            <dt scope="row"><?= __('Titulo Sobre') ?></dt>
            <dd><?= h($about->titulo_sobre) ?></dd>
            <dt scope="row"><?= __('Titulo Missao') ?></dt>
            <dd><?= h($about->titulo_missao) ?></dd>
            <dt scope="row"><?= __('Titulo Visao') ?></dt>
            <dd><?= h($about->titulo_visao) ?></dd>
            <dt scope="row"><?= __('Descricao Visao') ?></dt>
            <dd><?= h($about->descricao_visao) ?></dd>
            <dt scope="row"><?= __('Titulo Valor') ?></dt>
            <dd><?= h($about->titulo_valor) ?></dd>
            <dt scope="row"><?= __('Descricao Valor') ?></dt>
            <dd><?= h($about->descricao_valor) ?></dd>
            <dt scope="row"><?= __('Capa') ?></dt>
            <dd><?= h($about->capa) ?></dd>
            <dt scope="row"><?= __('Capa Dir') ?></dt>
            <dd><?= h($about->capa_dir) ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($about->id) ?></dd>
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
          <h3 class="box-title"><?= __('Descricao') ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <?= $this->Text->autoParagraph($about->descricao); ?>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header with-border">
          <i class="fa fa-text-width"></i>
          <h3 class="box-title"><?= __('Descricao Missao') ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <?= $this->Text->autoParagraph($about->descricao_missao); ?>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header with-border">
          <i class="fa fa-share-alt"></i>
          <h3 class="box-title"><?= __('Sobre Imagens') ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <?php if (!empty($about->sobre_imagens)): ?>
          <table class="table table-hover">
              <tr>
                    <th scope="col"><?= __('Id') ?></th>
                    <th scope="col"><?= __('Nome') ?></th>
                    <th scope="col"><?= __('Imagem') ?></th>
                    <th scope="col"><?= __('Imagem Dir') ?></th>
                    <th scope="col"><?= __('About Id') ?></th>
                    <th scope="col" class="actions text-center"><?= __('Actions') ?></th>
              </tr>
              <?php foreach ($about->sobre_imagens as $sobreImagens): ?>
              <tr>
                    <td><?= h($sobreImagens->id) ?></td>
                    <td><?= h($sobreImagens->nome) ?></td>
                    <td><?= h($sobreImagens->imagem) ?></td>
                    <td><?= h($sobreImagens->imagem_dir) ?></td>
                    <td><?= h($sobreImagens->about_id) ?></td>
                      <td class="actions text-right">
                      <?= $this->Html->link(__('View'), ['controller' => 'SobreImagens', 'action' => 'view', $sobreImagens->id], ['class'=>'btn btn-info btn-xs']) ?>
                      <?= $this->Html->link(__('Edit'), ['controller' => 'SobreImagens', 'action' => 'edit', $sobreImagens->id], ['class'=>'btn btn-warning btn-xs']) ?>
                      <?= $this->Form->postLink(__('Delete'), ['controller' => 'SobreImagens', 'action' => 'delete', $sobreImagens->id], ['confirm' => __('Are you sure you want to delete # {0}?', $sobreImagens->id), 'class'=>'btn btn-danger btn-xs']) ?>
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
