<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Project $project
 */
?>
<!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
        <?php echo __('Project'); ?>
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
          <?php echo $this->Form->create($project, ['type' => 'file']); ?>
            <div class="box-body">
              <?php
                echo $this->Form->control('name');
                echo $this->Form->control('description',['id' => 'editor']);
//                echo $this->Form->control('description-front',['id' => 'editor_2']);
                echo $this->Form->control('photo', ['type' => 'file']);
                echo 'Resolução recomendada  682 x 387'
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
<script>
    ClassicEditor
        .create(document.querySelector('#editor_2')).then(editor => {
    }).catch(error => {
    });
</script>

<?php $this->end(); ?>
