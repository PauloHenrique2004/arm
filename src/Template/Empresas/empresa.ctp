
<!-- main wrapper start -->
<main>
    <!-- breadcrumb area start -->
    <div class="breadcrumb-area">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12" style="padding-right: 0px; padding-left: 0px">
                    <div class="breadcrumb-wrap text-center">
                        <nav aria-label="breadcrumb">
                            <h1><?= $empresa->nome_empresa ?></h1>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb area end -->

    <!-- page main wrapper start -->
    <div class="shop-main-wrapper pt-100 pt-sm-50 pb-62 pb-md-96 pb-sm-48">
        <div class="container custom-container">
            <div class="row">
                 <!-- product details wrapper start -->
                <div class="col-lg-12 order-1 order-lg-2">
                    <!-- product details inner end -->
                    <div class="product-details-inner">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="product-large-slider mb-20">
                                    <?php foreach ($imagens as $imagem): ?>
                                        <div class="pro-large-img img-zoom" style="max-height: 600px">
                                            <img src="<?= "/files/ServicoImagens/imagem/" . $imagem->imagem ?>" alt="">
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                                <?php if(count($imagens->toArray()) > 1): ?>
                                    <div class="pro-nav slick-row-10">
                                        <?php foreach ($imagens as $key => $imagem): ?>
                                                <div class="pro-nav-thumb">
                                                    <img src="/files/ServicoImagens/imagem/<?=$imagem->imagem?>" alt="" />
                                                </div>
                                        <?php endforeach; ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                            <div class="col-lg-7">
                                <div class="product-details-des mt-md-34 mt-sm-34">
                                    <h3><a href="#"><?= $empresa->nome_servico ?></a></h3>
                                    <?= $empresa->descricao_servico ?>

                                    <div class="quantity-cart-box d-flex align-items-center" style="margin-top: 30px">
                                        <div class="action_link" style="margin-right: 20px">
                                            <span class="buy-btn"><i class="ion-bag"></i>Detalhes da Empresa </span>
                                        </div>
                                    </div>

                                    <div id="conteudo">
                                        <div class="like-icon mt-20 ">
                                            <?php if (!empty($empresa->tel_contato)): ?>
                                                <a class="google" href="#"><i class="fa fa-phone"></i><?= $empresa->tel_contato ?></a>
                                            <?php endif; ?>

                                            <?php if (!empty($empresa->facebook)): ?>
                                                <a class="facebook" href="<?= $empresa->facebook ?>" target="_blank"><i class="fa fa-facebook"></i>Facebook</a>
                                            <?php endif; ?>

                                            <?php if (!empty($empresa->instagram)): ?>
                                                <a class="pinterest" href="<?= $empresa->instagram ?>" target="_blank"><i class="fa fa-instagram"></i>Instagram</a>
                                            <?php endif; ?>

                                            <?php if (!empty($empresa->tel_whats)): ?>
                                                <a style="background-color: #28a745" class="pinterest" href="https://api.whatsapp.com/send?phone=55<?= $empresa->tel_whats ?>" target="_blank"><i class="fa fa-whatsapp" ></i>WhatsApp</a>
                                            <?php endif; ?>

                                            <?php if (!empty($empresa->email)): ?>
                                                <i class="ion-android-mail"> <?= $empresa->email ?></i>
                                            <?php endif; ?>

                                            <?php if (!empty($empresa->site)): ?>
                                                <a class="google" href="<?= $empresa->site ?>" target="_blank"><i class="fa fa-link"></i>site</a>
                                            <?php endif; ?>
                                    </div>


                                    <div class="product-review-info" style="margin-top: 30px">
                                        <ul class="nav review-tab">
                                            <li>
                                                <a class="icon ion-ios-home-outline"> Endereço</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content reviews-tab">
                                            <div class="tab-pane fade active show" id="tab_one">
                                                <div class="tab-one">
                                                    <p><?= $empresa->endereco ?></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                        <div class="share-icon mt-18">
                                            <h5>Compartilhe:</h5>
<!--                                            <a href="#"><i class="fa fa-facebook"></i></a>-->
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=http://<?= $_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"] ?>" target="_blank"><i class="fa fa-facebook"></i></a>

                                            <a href="" id="whatsapp-share-btt" rel="nofollow" target="_blank"
                                                   class="whatsapp-share-button"
                                                   title="Compartilhar"><i class="ion-social-whatsapp"></i></a>

                                        </div>


                                        <?php foreach ($videos as $video): ?>
                                        <div class="bs-example">
                                            <div class="embed-responsive embed-responsive-21by9">
<!--                                                <iframe class="embed-responsive-item" src=""></iframe>-->
                                                <?php $conv = convertYoutube($video->link); ?>
                                                <?= $conv ?>
                                            </div>
                                        </div>
                                        <?php endforeach; ?>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- product details wrapper end -->
            </div>
        </div>
        <?php function convertYoutube($string)
        {
            return preg_replace(
                "/\s*[a-zA-Z\/\/:\.]*youtu(be.com\/watch\?v=|.be\/)([a-zA-Z0-9\-_]+)([a-zA-Z0-9\/\*\-\_\?\&\;\%\=\.]*)/i",
                "<iframe class='ytb' style='display: block; margin: 0 auto' width='100%' height='300' src=\"//www.youtube.com/embed/$2\" allowfullscreen></iframe>",
                $string
            );
        } ?>
    </div>
    <!-- page main wrapper end -->
</main>

<style>
    .ion-android-mail{
        color: #fff;
        text-align: center;
        display: inline-block;
        font-size: 12px;
        line-height: 22px;
        padding: 0 8px;
        margin-right: 6px;
        border-radius: 3px;
        text-transform: capitalize;
        background-color: #ffc107
    }


     .bs-example{
         margin: 20px;
     }
</style>

<?php $this->start('script-head'); ?>
<meta property="og:image" content="https://<?= $_SERVER['HTTP_HOST'] . "/files/ServicoImagens/imagem/thumb-" . $imagem->imagem ?>"/>
<meta property="og:title" content="<?= $empresa->nome_empresa ?>"/>
<meta property="og:description" content="<?= strip_tags( substr($empresa->descricao_servico, 0, 150)) ?>"/>
<?php $this->end(); ?>
