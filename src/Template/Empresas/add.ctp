<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Empresa $empresa
 */
?>
<!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Empresa
      <small><?php echo __('Add'); ?></small>
    </h1>
    <ol class="breadcrumb">
      <li><a href="<?php echo $this->Url->build(['action' => 'index']); ?>"><i class="fa fa-dashboard"></i> <?php echo __('Home'); ?></a></li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <!-- general form elements -->
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title"><?php echo __('Form'); ?></h3>
          </div>
          <!-- /.box-header -->
          <!-- form start -->
          <?php echo $this->Form->create($empresa, ['type' => 'file']); ?>
            <div class="box-body">
              <?php
                echo $this->Form->control('categoria_id', ['options' => $categorias]);
                echo $this->Form->control('nome_empresa',['label' => 'Nome da Empresa']);
                echo $this->Form->control('nome_servico',['label' => 'Nome do Serviço']);
                echo $this->Form->control('descricao_servico',['label' => 'Descrição do Serviço']);
                echo $this->Form->control('tel_contato',['label' => 'Telefone Contato']);
                echo $this->Form->control('tel_whats',['label' => 'WhatsApp adicionar prefixo e numero sem espaços']);
                echo $this->Form->control('facebook');
                echo $this->Form->control('instagram');
                echo $this->Form->control('email');
                echo $this->Form->control('site');
                echo $this->Form->control('endereco',['label' => 'Endereço']);
              ?>
            </div>
            <!-- /.box-body -->

          <?php echo $this->Form->submit(__('Submit')); ?>

          <?php echo $this->Form->end(); ?>
        </div>
        <!-- /.box -->
      </div>
  </div>
  <!-- /.row -->
</section>
<?php $this->start('scriptBottom'); ?>
<?php echo $this->Html->script([
    'ckeditor/ckeditor',
]); ?>
<script>
    var editor = CKEDITOR.replace( 'descricao_servico' );

</script>
<?php  $this->end();?>

