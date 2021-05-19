<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Destaque $destaque
 */
?>
<!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Destaque
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
          <?php echo $this->Form->create($destaque, ['type' => 'file']); ?>
            <div class="box-body">
              <?php
              echo $this->Form->control('imagem',['type' => 'file']);
              echo $this->Form->control('empresa_id', ['options' => $empresas, 'empty' => true]);
              echo "Dimensões recomendadas 420 x 448px";
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
