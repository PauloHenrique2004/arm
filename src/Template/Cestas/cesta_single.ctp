
<div class="header-height"></div>
<!-- menu-style start -->

<div class="main-search-active">
    <div class="sidebar-search-icon">
        <button class="search-close"><span class="ti-close"></span></button>
    </div>
    <div class="sidebar-search-input">
        <form>
            <div class="form-search">
                <input id="search" class="input-text" value="" placeholder="Search Entire Store" type="search">
                <button>
                    <i class="ti-search"></i>
                </button>
            </div>
        </form>
    </div>
</div>
<div class="breadcrumb-area mt-37 hm-4-padding">
    <div class="container-fluid">
        <div class="breadcrumb-content text-center border-top-2">
            <h2>Cesta de Café da Manhã</h2>
            <ul>
                <li>
                    <a href="/">Início</a>
                </li>
                <li> Cesta de Café da Manhã </li>
                <li> / <?= $cestaSingle->name ?> </li>
            </ul>

        </div>
    </div>
</div>

<div class="product-details-area hm-3-padding ptb-130 pro">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <div class="product-details-img-content">
                    <div class="product-details-tab mr-40">
                        <div class="product-details-large tab-content">
                            <?php foreach ($imagens as $key => $imagem): ?>
                                <div class="tab-pane <?= $key == 0 ? 'active' : '' ?>" id="pro-details<?= $key+1 ?>">
                                    <div class="easyzoom easyzoom--overlay">
                                        <a href="<?= "/files/CestaImagens/imagem/" . $imagem->imagem ?>">
                                            <img src="<?= "/files/CestaImagens/imagem/" . $imagem->imagem ?>" alt="">
                                        </a>
                                    </div>
                                </div>
                            <?php endforeach;?>
                        </div>
                        <div class="product-details-small nav mt-12 product-dec-slider owl-carousel">
                            <?php foreach ($imagens as $key => $imagem): ?>
                                <a class="<?= $key == 0 ? 'active' : '' ?>" href="#pro-details<?= $key+1 ?>">
                                    <img src="/files/CestaImagens/imagem/<?= $imagem->imagem ?>" alt="">
                                </a>
                            <?php endforeach;?>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="product-details-content">
                    <div class="product-overview">
                        <h5 class="pd-sub-title"><?= $cestaSingle->name ?></h5>
                        <?= $cestaSingle->description ?>
                    </div>
                    <div class="product-price" style="margin-bottom: 10px">
                        <span>R$  <?= $cestaSingle->preco  ?></span>
                    </div>
                    <div class="quickview-plus-minus">
                        <div class="quickview-btn-cart">
                            <a href="<?= "https://api.whatsapp.com/send?l=pt&phone=5582999261370&text=Quero comprar {$cestaSingle->name}!%0a%0ahttp://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}" ?>"
                               id="whatsapp-share-btt2" rel="nofollow" target="_blank"><div class="btn-style cr-btn"><span>Eu quero</span></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>




<?php $this->start('script-head'); ?>
<meta property="og:image" content="https://<?= $_SERVER['HTTP_HOST'] . "/files/Cestas/capa/thumb-" . $cestaSingle->capa ?>"/>
<meta property="og:title" content="<?= $cestaSingle->title ?>"/>
<?php $this->end(); ?>

<style>


    .pro{
        padding-top: 0px;
    }

    .btn-style {
        background-color: #249e72;
    }

    .btn-style:hover {
        background-color: #DCAC01 !important;
    }

    .quickview-btn-cart > a {
        padding: 0px 0px;
    }

    .quickview-btn-cart {
        margin: 0px;
    }
</style>
