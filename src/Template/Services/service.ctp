<!-- .page-content start -->
<div class="page-content custom-img-background dark page-title page-title-1 mb-70">
    <div class="container">
        <!-- .row start -->
        <div class="row">
            <!-- .col-md-6 start -->
            <div class="col-md-6">
                <div class="custom-heading style-1 triggerAnimation animated" data-animate='fadeInUp'>
                    <h1 style="color: #333">Serviços<span></span></h1>
                </div><!-- .custom-heading.style-1 end -->
            </div><!-- .col-md-6 end -->
            <!-- .col-md-6 start -->
        </div><!-- .row end -->
    </div><!-- .container end -->
</div><!-- .page-content end -->


<div class="page-content">
    <div class="container">
        <div class="row">
            <aside class="col-md-4 col-xs-12 aside">
                <ul class="aside-widgets">
                    <li class="widget widget_nav_menu clearfix">
                        <div class="title">
                            <h3>Nossos Serviços</h3>
                        </div>

                        <ul class="menu">
                            <?php foreach ($services as $service): ?>
                                <li class="menu-item">
                                    <a href="/servico/<?= $service->id ?>"><?= $service->title ?></a>
                                </li>
                            <?php endforeach; ?>
                        </ul><!-- .menu end -->
                    </li><!-- .widget.widget_nav_menu end -->
                </ul><!-- .aside-widgets end -->
            </aside><!-- .aside end -->

            <div class="col-md-8 col-xs-12 ">
                <img style="max-width: 100%" src="/images/pick2.jpg">
            </div><!-- .aside end -->
        </div>
        <div class="paginator">
            <ul class="pagination">
                <?php echo $this->Paginator->first('<< ' . __('Primeira')); ?>
                <?php echo $this->Paginator->prev('< ' . __('Anterior')); ?>
                <?php echo $this->Paginator->numbers(); ?>
                <?php echo $this->Paginator->next(__('Próximo') . ' >'); ?>
                <?php echo $this->Paginator->last(__('Última') . ' >>'); ?>
            </ul>
        </div>
    </div><!-- .row end -->

</div><!-- .container end -->
<!-- .row end -->

</div><!-- .container-fluid end -->
</div><!-- .page-content end -->

<!--                paginação-->

