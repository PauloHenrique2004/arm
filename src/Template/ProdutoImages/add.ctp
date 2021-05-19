<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\ProdutoImage $produtoImage
 */
?>
<!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
        Imagens Produtos
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
          <?php echo $this->Form->create($produtoImage, ['type' => 'file']); ?>
            <div class="box-body">
              <?php
                echo $this->Form->control('imagem', ['type' => 'file']);
                echo $this->Form->control('product_id', ['options' => $products]);
                echo '<span style="color: red">Dimensões recomendadas 800 x 800px</span>';
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
