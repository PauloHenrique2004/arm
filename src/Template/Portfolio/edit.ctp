<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Portfolio $portfolio
 */
?>
<!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Portfolio
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
          <?php echo $this->Form->create($portfolio, ['role' => 'form']); ?>
            <div class="box-body">
              <?php
//                echo $this->Form->control('modifield', ['empty' => true]);
                echo $this->Form->control('title');
                echo $this->Form->control('description' ,['id' => 'editor']);
              ?>
                <span style="color: red"> <?='Para melhor visualização ultilizar imagens com as dimensões 480 x 680px' ?></span>

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

<?php echo $this->Html->script([
    'ckeditor/ckeditor',
    'ckeditor/translations/pt-br',
]); ?>
    <script>
        ClassicEditor
            .create(document.querySelector('#editor')).then(editor => {
        }).catch(error => {
        });
    </script>
<?php $this->end(); ?>
