
    <!-- ==================== Start Intro ==================== -->

    <section class="intro-section section-padding" style="margin-top: 100px">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12" style="text-align: center; margin-bottom: 50px">
                    <div class="htit">
                        <h4><span></span> <?= $single->nome ?></h4>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12  col-md-12">
                    <div class="text js-scroll__content" style="text-align: justify">
                        <p class=""><?= strip_tags($single->descricao) ?></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== End Intro ==================== -->




    <!-- ==================== Start Imagens Serviços ==================== -->

    <section class="work-carousel section-padding caroul sub-bg position-re">
        <div class="container-fluid mt-100">
            <div class="sec-head custom-font text-center">
                <h6 class="wow fadeIn" data-wow-delay=".5s">Serviços</h6>
                <h3 class="wow" data-splitting>Serviços.</h3>
                <span class="tbg">Serviços</span>
            </div>
            <div class="row">
                <div class="col-lg-12 no-padding">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <?php foreach ($imagens as $imagem): ?>
                            <div class="swiper-slide">
                                <div class="content wow fadeInUp" data-wow-delay=".3s">
                                    <div class="item-img bg-img wow imago" data-background="/files/ServicoImagens/imagem/<?= $imagem->imagem ?>">
                                    </div>
                                </div>
                            </div>
                            <?php endforeach; ?>
                        </div>

                        <!-- slider setting -->
                        <div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
                            <i class="ion-ios-arrow-right"></i>
                        </div>
                        <div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
                            <i class="ion-ios-arrow-left"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ==================== End Imagens Serviços ==================== -->



    <!-- ==================== Start Video-wrapper ==================== -->

    <section>
        <div class="container-fluid">
            <div class="video-wrapper section-padding bg-img parallaxie valign" data-background="/images/portfolio/project2/bg.jpg" data-overlay-dark="4">
                <div class="full-width text-center">
                    <a class="vid" href="<?= $single->video ?>">
                        <div class="vid-butn">
                                <span class="icon">
                                    <i class="fas fa-play"></i>
                                </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== End Video-wrapper ==================== -->



    <!-- ==================== Start next-prog ==================== -->

    <section class="next-prog section-padding">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="box">
                        <div class="bg-img valign" data-background="/images/portfolio/project1/bg-whats.jpeg" data-overlay-dark="4">
                            <div class="caption ontop valign">
                                <div class="o-hidden full-width">
                                    <h1>
                                        <a href="project-details.html">
                                            <div class="stroke">Solicitar Proposta</div>
                                        </a>
                                    </h1>
                                </div>
                            </div>
                            <div class="copy-cap valign">
                                <div class="cap full-width">
                                    <h1>
                                        <a href="project-details.html">
                                            <span>Solicitar Proposta</span>
                                        </a>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== End next-prog ==================== -->


<style>
    @media (min-width: 992px)
        .offset-lg-1 {
             margin-left:0px ;
        }
</style>
