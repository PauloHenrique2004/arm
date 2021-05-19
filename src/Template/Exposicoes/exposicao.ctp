
<div class="header-height"></div>
<div class="breadcrumb-area mt-37 hm-4-padding">
    <div class="container-fluid">
        <div class="breadcrumb-content text-center border-top-2">
            <!--            <h2>Exposição Online</h2>-->
        </div>
    </div>
</div>
<!-- blog-area start -->
<div class="blog-area pt-130 pb-125 hm-3-padding">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8 col-xl-9">
                <div class="blog-details-wrapper">
                    <div class="single-blog-wrapper">


                        <div class="blog-content">
                            <h2><?= $exposicao->nome ?></h2>
                            <div class="blog-date-categori">
                                <ul>
                                    <li>De <?= $exposicao->data ?> a <?= $exposicao->data_final ?> </li>
                                </ul>
                            </div>
                        </div>
                        <?= $exposicao->descricao ?>

                        <!--                       start video-->
                        <?php foreach ($media  as $md): ?>
                            <?php if (!empty($md->video) && $md->exposicoe_id === $exposicao->id): ?>
                                <div  style="margin-top: 30px" class="vimeo-video embed-responsive embed-responsive-16by9 mb-30">
                                    <?php $conv = convertYoutube($md->video); ?>
                                    <?= $conv ?>
                                </div>
                            <?php endif; ?>
                        <?php endforeach; ?>
                        <!--                        end video-->

                        <!--                       start foto-->



                                    <div class="grid-list-product-wrapper">
                                        <div class="product-list product-view">
                                            <div class="row">
                                                <?php foreach ($media  as $md): ?>
                                                <?php if (!empty($md->imagem) && $md->exposicoe_id === $exposicao->id): ?>
                                                    <div class="product-width col-md-12 col-xl-3 col-lg-4">
                                                        <div class="product-wrapper mb-35">
                                                            <div class="product-img">

                                                                    <img class="img-prod" src="<?= "/files/Media/imagem/" . $md->imagem?>" alt="">

                                                                <div class="product-action-3">
                                                                    <a class="action-plus-2" title="Quick View" data-toggle="modal" data-target="#<?=$md->id ?>" href="#">
                                                                        <i class="ti-plus"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="product-list-details">
                                                                <h2><?= $md->nome ?></h2>
                                                                <?php echo ($md->descricao)?>
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                <?php endif; ?>
                                                <?php endforeach; ?>

                                            </div>
                                        </div>
                                    </div>


                        <!--                       end foto-->




                        <div class="blog-dec-tags-social">
                            <div class="blog-dec-social">
                                <span>Compartilhe :</span>
                                <ul>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=http://<?= $_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"] ?>" target="_blank"><i class="ion-social-facebook"></i></a></li>

                                    <li><a href="" id="whatsapp-share-btt" rel="nofollow" target="_blank"
                                           class="whatsapp-share-button"
                                           title="Compartilhar"><i class="ion-social-whatsapp"></i></a></li>
                                </ul>
                            </div>
                        </div>


<!--                        <a href="" id="whatsapp-share-btt" rel="nofollow" target="_blank"-->
<!--                           class="whatsapp-share-button"-->
<!--                           title="Compartilhar"></a>-->

                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-xl-3">
                <div class="blog-sidebar-wrapper sidebar-mrg pl-20">
                    <div class="blog-widget mb-60">
                        <div class="blog-author">
                            <?php if (!empty($exposicao->foto)): ?>
                           <img style="border-radius: 90px; width: 172px; height: 172px; object-fit: cover" src="<?= "/files/Exposicoes/foto/" . $exposicao->foto ?>" alt=""><br>
                            <?php endif; ?>
                            <span>Artista</span>
                            <h4><?= $exposicao->profissional ?></h4>

                        </div>
                    </div>
                    <div class="blog-widget mb-65">
                        <h4 class="blog-widget-title mb-35">Recentes</h4>
                        <div class="blog-recent-post">
                            <?php foreach ($recentes as $recente): ?>
                                <?php $link = "/exposicao-online/".$recente->id ?>
                                <?php if ($link != $_SERVER["REQUEST_URI"]): ?>
                                    <div class="recent-post-wrapper mb-25">
                                        <div class="recent-post-img">
                                            <a href="#"><img style=" width: 94px;  height: 94px; object-fit: cover;" src="<?= "/files/Exposicoes/capa/" . $recente->capa ?>" alt=""></a>
                                        </div>
                                        <div class="recent-post-content">
                                            <h4><a href="#"><?= $recente->nome ?></a></h4>
                                            <span>De <?= $exposicao->data ?> a <?= $exposicao->data_final ?> </span>
                                        </div>
                                    </div>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Modal -->
<?php foreach ($media  as $md): ?>
<?php if (!empty($md->imagem) && $md->exposicoe_id === $exposicao->id): ?>
<div class="modal fade" id="<?= $md->id ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle"><?= $md->nome ?></h5>
                <button style="color: #DCAC01" type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <img  style="width: 100%" src="<?= "/files/Media/imagem/" . $md->imagem?>">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" style="background: #DCAC01">Fechar</button>
            </div>
        </div>
    </div>
</div>
    <?php endif; ?>
<?php endforeach; ?>


</div>


<?php function convertYoutube($string)
{
    return preg_replace(
        "/\s*[a-zA-Z\/\/:\.]*youtu(be.com\/watch\?v=|.be\/)([a-zA-Z0-9\-_]+)([a-zA-Z0-9\/\*\-\_\?\&\;\%\=\.]*)/i",
        "<iframe class='ytb' style='display: block; margin: 0 auto' width='100%' height='300' src=\"//www.youtube.com/embed/$2\" allowfullscreen></iframe>",
        $string
    );
} ?>

<style>

    @media (max-width: 440px){
        .mt-37 {
            margin-top: 37px
        }

    }

</style>


<?php $this->start('scriptBottom'); ?>
<script>
    if(screen.width <= 500) {
        for (i = 0; i < document.getElementsByClassName('ytb').length; i++) {
            document.getElementsByClassName('ytb')[i].style.width = "fit-content";
        }
    }
</script>
<?php  $this->end(); ?>


<?php $this->start('script-head'); ?>
<meta property="og:image" content="https://<?= $_SERVER['HTTP_HOST'] . "/files/Exposicoes/capa/thumb-" . $exposicao->capa ?>"/>
<meta property="og:title" content="<?= $exposicao->nome ?>"/>
<meta property="og:description" content="<?= strip_tags( substr($exposicao->descricao, 0, 100)) ?>"/>
<?php $this->end(); ?>
