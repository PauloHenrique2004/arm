<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Media $media
 */
?>
<!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
        Fotos e Videos Exposições
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
          <?php echo $this->Form->create($media, ['type' => 'file']); ?>
            <div class="box-body">
              <?php
              echo $this->Form->control('nome',['label' => 'Nome da imagem']);
              echo $this->Form->control('imagem', ['type' => 'file','label' => 'Imagem da exposição']);?>
                <img src="<?= "/files/Media/imagem/" . $media->imagem ?>" style="max-width: 70px">
              <?php
              echo '<span style="color: red">Dimensões recomendadas 800 x 800px</span>';
              echo $this->Form->control('descricao' ,['id' => 'editor','label' => 'Descrição da imagem']);
              echo $this->Form->control('video',['label' => 'Video da exposição']);
              echo $this->Form->control('exposicoe_id', ['options' => $exposicoes,'label'=>'Seliecione a Exposição']);
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
        var editor = CKEDITOR.replace( 'descricao' );;

    </script>

<?php  $this->end();
