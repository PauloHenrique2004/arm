<!-- .page-content start -->
<div class="page-content custom-img-background dark page-title page-title-1 mb-70">
    <div class="container">
        <!-- .row start -->
        <div class="row">
            <!-- .col-md-6 start -->
            <div class="col-md-6">
                <div class="custom-heading style-1 triggerAnimation animated" data-animate='fadeInUp'>
                    <h1 style="color: #333">Soluções<span></span></h1>
                </div><!-- .custom-heading.style-1 end -->
            </div><!-- .col-md-6 end -->
            <!-- .col-md-6 start -->
        </div><!-- .row end -->
    </div><!-- .container end -->
</div><!-- .page-content end -->


<div class="page-content">
    <div class="container">
            <div class="row" data-container="container">
                <?php foreach ($solucoes as $solucao): ?>
                    <div
                        class="moto-widget moto-widget-row__column moto-cell col-sm-4 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        style="" data-widget="row.column" data-container="container"
                        data-spacing="aaaa" data-bg-position="left top">


                        <div data-widget-id="wid_1520863172_qfmov3wmi"
                             class="moto-widget moto-widget-image moto-preset-default moto-align-center moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                             data-widget="image">
                        <span class="moto-widget-image-link">
                <img style="max-width: 345px; width: 100%;height: 217px; object-fit: cover"
                     src="<?= "/files/Projects/photo/" . $solucao->photo ?>"
                     class="moto-widget-image-picture lazyloaded" data-id="" title="" alt=""
                     src="/mt-demo/66300/66389/mt-content/uploads/2018/02/mt-1353-home-img02.jpg">
            </span>
                        </div>

                        <div
                            class="moto-widget moto-widget-row moto-bg-color5_3 moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
                            data-grid-type="sm" data-widget="row" data-spacing="mama" style=""
                            data-bg-position="left top">


                            <div class="container-fluid">
                                <div class="row" data-container="container">


                                    <div
                                        class="moto-widget moto-widget-row__column moto-cell col-sm-12 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                        style="" data-widget="row.column" data-container="container" data-spacing="aaaa"
                                        data-bg-position="left top">


                                        <div
                                            class="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-small moto-spacing-bottom-small moto-spacing-left-small"
                                            data-widget="text" data-preset="default" data-spacing="asss"
                                            data-animation="">
                                            <div class="moto-widget-text-content moto-widget-text-editable"><h3
                                                    class="moto-text_system_8"><a data-action="page" data-id="17"
                                                                                  class="moto-link"
                                                                                  href="solucao/<?= $solucao->id?>"><?= $solucao->name ?></a></h3>
                                                <p class="moto-text_normal">&nbsp;</p>
                                                <p class="moto-text_normal"><?= strlen($solucao->description) >  100 ? substr($solucao->description, 0, 40) . "..." : $solucao->description ?></p></div>
                                        </div>


                                        <div data-widget-id="wid_1520863172_3f9ynuv6p"
                                             class="moto-widget moto-widget-button moto-preset-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-small  "
                                             data-widget="button">
                                            <a href="solucao/<?= $solucao->id ?>" data-action="page"
                                               class="moto-widget-button-link moto-size-medium moto-link"><span
                                                    class="fa moto-widget-theme-icon"></span> <span
                                                    class="moto-widget-button-label">Ver Mais</span></a>
                                        </div>


                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>
                <?php endforeach; ?>
            </div>
       <!-- .row end -->
        <div class="paginator">
            <ul class="pagination">
                <?php echo $this->Paginator->first('<< ' . __('Primeira')); ?>
                <?php echo $this->Paginator->prev('< ' . __('Anterior')); ?>
                <?php echo $this->Paginator->numbers(); ?>
                <?php echo $this->Paginator->next(__('Próximo') . ' >'); ?>
                <?php echo $this->Paginator->last(__('Última') . ' >>'); ?>
            </ul>
        </div>
    </div><!-- .container-fluid end -->
</div><!-- .page-content end -->

<!--                paginação-->

