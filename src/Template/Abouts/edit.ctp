<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\About $about
 */
?>
<!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      About
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
          <?php echo $this->Form->create($about, ['type' => 'file']); ?>
            <div class="box-body">
              <?php
                echo $this->Form->control('titulo_sobre');
                echo $this->Form->control('descricao');
                echo $this->Form->control('titulo_missao');
                echo $this->Form->control('descricao_missao');
                echo $this->Form->control('titulo_visao');
                echo $this->Form->control('descricao_visao');
                echo $this->Form->control('titulo_valor');
                echo $this->Form->control('descricao_valor');
                echo $this->Form->control('capa',['type' => 'file']);
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
        var editor = CKEDITOR.replace( 'descricao_missao' );
        var editor = CKEDITOR.replace( 'descricao_visao' );
        var editor = CKEDITOR.replace( 'descricao_valor' );
    </script>
<?php  $this->end();
