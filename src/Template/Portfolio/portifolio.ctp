<?php $this->assign('title', 'Serviços - '); ?>
<div class="page-content custom-img-background dark page-title page-title-1 mb-70">
    <div class="container">
        <!-- .row start -->
        <div class="row">
            <!-- .col-md-6 start -->
            <div class="col-md-6">
                <div class="custom-heading style-1 triggerAnimation animated" data-animate='fadeInUp'>
                    <h1 style="color: #f7f7f7;
    text-shadow: 2px 2px #000;">Seviços</h1>
                </div><!-- .custom-heading.style-1 end -->
            </div><!-- .col-md-6 end -->
        </div><!-- .row end -->
    </div><!-- .container end -->
</div><!-- .page-content end -->

<div class="page-content">
    <div class="container">
        <div class="row">
            <h3 style=" text-align: center; padding-bottom: 35px;margin-right: 10px; margin-left: 10px;">Conheça Nossos Produtos E Serviços</h3>
            <?php foreach ($portifolio as $port): ?>
            <div class="col-md-4 col-sm-12">
                <div class="feature-box style-2">
                    <div class="feature-body">
                        <div class="custom-heading style-1">
                            <h4><?php echo $port->title ?></h4>
                        </div><!-- .custom-heading end -->

                     <?= strlen($port->description) >  90 ? substr($port->description, 0, 90) . "..." : $port->description ?>

                    </div><!-- .feature-body end -->
                </div><!-- .feature-box-end -->
                <div data-widget-id="wid_1520863172_3f9ynuv6p"
                     class="moto-widget moto-widget-button moto-preset-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-small  "
                     data-widget="button">
                    <a href="servico/<?= $port->id ?>" data-action="page"
                       class="moto-widget-button-link moto-size-medium moto-link"><span
                            class="fa moto-widget-theme-icon"></span> <span
                            class="moto-widget-button-label" style="color: #777777">Ver Mais Detalhes</span></a>
                </div>
            </div><!-- .col-md-6 end -->
            <?php endforeach;?>
    </div><!-- .container end -->

        <div class="paginator">
            <ul class="pagination">
                <?php echo $this->Paginator->first('<< ' . __('Primeira')); ?>
                <?php echo $this->Paginator->prev('< ' . __('Anterior')); ?>
                <?php echo $this->Paginator->numbers(); ?>
                <?php echo $this->Paginator->next(__('Próximo') . ' >'); ?>
                <?php echo $this->Paginator->last(__('Última') . ' >>'); ?>
            </ul>
        </div>
</div><!-- .page-content end -->



