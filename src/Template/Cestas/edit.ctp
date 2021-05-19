<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Cesta $cesta
 */
?>
<!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
        Cestas de Café da Manhã
      <small><?php echo __('Edit'); ?></small>
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
          <?php echo $this->Form->create($cesta, ['type' => 'file']); ?>
            <div class="box-body">
                <?php
                echo $this->Form->control('name');
                echo $this->Form->control('description');
                echo $this->Form->control('capa', ['type' => 'file']); ?>
                <img src="<?= "/files/Cestas/capa/" . $cesta->capa ?>" style="max-width: 70px">
                <span style="color: red">Dimensões recomendadas 800 x 800px</span>';
                <?=$this->Form->control('preco');?>
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
        var editor = CKEDITOR.replace( 'description' );

    </script>
<?php  $this->end();

