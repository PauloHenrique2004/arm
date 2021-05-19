<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Exposico $exposico
 */
?>
<!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Exposição
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
          <?php echo $this->Form->create($exposico, ['type' => 'file']); ?>
            <div class="box-body">
              <?php
                echo $this->Form->control('nome',['label' => 'Nome do exposição']);
                echo $this->Form->control('descricao',['id' => 'editor','label' => 'Descrição do exposição']);
                echo $this->Form->control('data', ['label' => 'Data Inícial','type' => 'string', 'class' => 'form-control string-date', 'value' => $exposico->data->i18nFormat('yyyy-MM-dd')]);
                echo $this->Form->control('data_final', ['type' => 'string', 'class' => 'form-control string-date', 'value' => $exposico->data_final->i18nFormat('yyyy-MM-dd')]);
                echo $this->Form->control('capa', ['type' => 'file']);?>
                <img src="<?= "/files/Exposicoes/capa/" . $exposico->capa ?>" style="max-width: 70px">
                <?php
                echo '<span style="color: red">Dimensões recomendadas 800 x 800px</span>';
                echo $this->Form->control('profissional',['label' => 'Nome do artísta']);
                echo $this->Form->control('foto', ['type' => 'file','label' => 'Foto do artísta'])
                ;?>
                <img src="<?= "/files/Exposicoes/foto/" . $exposico->foto ?>" style="max-width: 70px">
                <?php
                echo '<span style="color: red">Dimensões recomendadas 135 x 135px</span>';
              echo $this->Form->control('desativar',['type' => 'checkbox']);
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
<!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/3.1.3/css/bootstrap-datetimepicker.min.css"/>-->
<!--<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/3.1.3/js/bootstrap-datetimepicker.min.js"></script>-->


<?php $this->start('scriptBottom'); ?>
<?php echo $this->Html->script([
    'ckeditor/ckeditor',
]); ?>
<script>
    var editor = CKEDITOR.replace( 'descricao' );;

</script>

<script>
    $('.string-date').attr('type', 'date');
    var bindDatePicker = function() {
        $("#datetimepicker1").datetimepicker({
            weekStart: 1,
            autoclose: true,
            language: "pt-BR",
            daysOfWeekHighlighted: 0,
            pickTime: false,
            format:'DD-MM-YYYY',
            icons: {
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            },

        }).on('dp.change', function (selected) {
            var date = parseDate($(this).val());
            if (! isValidDate(date)) {
                //create date based on momentjs (we have that)
                date = moment().format('YYYY-MM-DD');
            }

            $(this).val(date);
        });

        $("#datetimepicker2").datetimepicker({
            weekStart: 1,
            autoclose: true,
            language: "pt-BR",
            daysOfWeekHighlighted: 0,
            pickTime: false,
            format:'DD-MM-YYYY',
            icons: {
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            },

        }).on('dp.change', function (selected) {
            var date = parseDate($(this).val());
            if (! isValidDate(date)) {
                //create date based on momentjs (we have that)
                date = moment().format('YYYY-MM-DD');
            }

            $(this).val(date);
        });

    }
    var isValidDate = function(value, format) {
        format = format || false;
        // lets parse the date to the best of our knowledge
        if (format) {
            value = parseDate(value);
        }

        var timestamp = Date.parse(value);

        return isNaN(timestamp) == false;
    }

    var parseDate = function(value) {
        var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
        if (m)
            value = m[5] + '.' + ("00" + m[3]).slice(-2) + '.' + ("00" + m[1]).slice(-2);

        return value;
    }


    bindDatePicker();


</script>
<?php  $this->end(); ?>
