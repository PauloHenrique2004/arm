

<div class="wrapper">
    <!-- header start -->
    <div class="header-height"></div>
    <div class="breadcrumb-area mt-37 hm-4-padding">
        <div class="container-fluid">
            <div class="breadcrumb-content text-center border-top-2">
                <h2>Cestas de Café da Manhã </h2>
                <ul>
                    <li>
                        <a href="/">Início</a>
                    </li>
                    <li> Cesta de Café da Manhã </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="shop-wrapper hm-3-padding pt-120 pb-100 pro">
        <div class="container-fluid">
            <div class="grid-list-product-wrapper">
                <div class="product-list product-view">
                    <div class="row">
                        <?php foreach ($cestas as $item): ?>
                        <div class="product-width col-md-6 col-xl-3 col-lg-4">
                            <div class="product-wrapper mb-35">
                                <div class="product-img">
                                    <a href="/cesta-de-cafe-manha/<?=$item->id ?>">
                                           <img class="img-prod" src="<?= "/files/Cestas/capa/" . $item->capa ?>" alt="">
                                    </a>
                                    <div class="product-action-3">
                                        <a class="action-plus-2" title="Quick View" data-toggle="modal" data-target="#<?=$item->id ?>" href="#">
                                            <i class="ti-plus"></i></a>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <div class="product-title-wishlist">
                                        <div class="product-title-3">
                                            <h4><a href="/cesta-de-cafe-manha/<?=$item->id ?>"><?= $item->name ?></a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-list-details">
                                    <h2><a href="/cesta-de-cafe-manha/<?=$item->id ?>"><?= $item->name ?></a></h2>
                                    <?php echo strlen($item->description) > 320 ? substr($item->description, 0, 320) . "..." : $item->description ?>
                                    </a>

                                    <div class="product-price" style="margin-bottom: 10px">
                                        <span>R$ <?= $item->preco ?></span>
                                    </div>
                                    <div class="shop-list-cart">
                                        <a href="/cesta-de-cafe-manha/<?=$item->id ?>"><i class=""></i> Ver Mais</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>

                    </div>
                    <div class="pagination-style text-center mt-30">
                        <ul class="">
                            <?php echo $this->Paginator->first('<< ' . __('Primeira')); ?>
                            <?php echo $this->Paginator->prev('< ' . __('Anterior')); ?>
                            <?php echo $this->Paginator->numbers(); ?>
                            <?php echo $this->Paginator->next(__('Próximo') . ' >'); ?>
                            <?php echo $this->Paginator->last(__('Última') . ' >>'); ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- modal -->
    <?php foreach ($cestas as $item): ?>
        <div class="modal fade" id="<?= $item->id ?>" tabindex="-1" role="dialog" aria-hidden="true">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span class="ion-android-close" aria-hidden="true"></span>
            </button>
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="qwick-view-left">
                            <div class="quick-view-learg-img">
                                <div class="quick-view-tab-content tab-content">
                                    <div class="tab-pane active show fade" id="modal1" role="tabpanel">
                                        <img class="img-prod" src="<?= "/files/Cestas/capa/" . $item->capa ?>" alt="">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="qwick-view-right">
                            <div class="qwick-view-content">
                                <h3 style="margin-bottom: 20px"><?= $item->name ?></h3>
                                <?php echo strlen($item->description) > 320 ? substr($item->description, 0, 320) . "..." : $item->description ?>
                                <div class="product-price" style="margin-bottom: 10px">
                                    <span>R$ <?= $item->preco ?></span>
                                </div>

                                <div class="quickview-plus-minus">
                                    <div class="quickview-btn-cart">
                                        <a class="btn-style cr-btn" href="/cesta-de-cafe-manha/<?=$item->id?>"><span>Ver Mais</span></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php endforeach; ?>




</div>

    <style>

        .pro{
            padding-top: 0px;
        }


        @media (min-width:1281px){
            .img-prod{
                object-fit: cover;
                width: 284px;
                height: 343px;
            }
        }
        @media (min-width: 768px) and (max-width: 1280px){
            .img-prod{
                object-fit: cover;
                width: 244px;
                height: 295px;
            }
        }

        .btn-style {
            background-color: #249e72;
        }
    </style>
