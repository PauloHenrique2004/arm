<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Servico $servico
 */
?>
<!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Servico
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
          <?php echo $this->Form->create($servico, ['role' => 'form']); ?>
            <div class="box-body">
              <?php

                echo $this->Form->control('nome');
                echo $this->Form->control('descricao');
                echo $this->Form->control('video');
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
    var editor = CKEDITOR.replace( 'descricao' );

</script>
<?php  $this->end();?>

<style>
    span{
        isplay: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
    }

    select{
        width: 100%;
    }
</style>
