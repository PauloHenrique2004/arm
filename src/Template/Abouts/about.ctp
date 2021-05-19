<main>
    <!-- breadcrumb area start -->
    <!-- breadcrumb area end -->

    <!-- about wrapper start -->
    <div class="about-us-wrapper pt-100 pb-100 pt-sm-50 pb-sm-52">
        <div class="container">
            <div class="row">
                <!-- About Text Start -->
                <div class="col-xl-12 col-lg-12">
                    <div class="about-text-wrap">
                        <h2><span>Ruralize</span><?= $about->title ?></h2>
                        <?= $about->sobre ?>
                    </div>
                </div>
                <!-- About Text End -->
            </div>

            <section class="blog-area pt-34 pb-34 pb-md-34 pt-sm-0 pb-sm-20 pb-xs-14" style="padding-bottom:30px">
                <div class="container">
                    <div class="row">
                        <div class="section-title text-center pb-16 pb-sm-10">
                            <h2>NOSSOS CLIENTES</h2>
                            <p>Empresas que utilizam a nossa plataforma</p>
                        </div>
                    </div>
                    <!-- section title end -->
                    <div class="row">
                        <div class="col-12">
                            <div class="blog-carousel-wrapper gemma-slick-slider-wrap blog-carousel-wrapper__style-3">
                                <div class="gemma-slick-slider slick-row-15" data-slick='{"slidesToShow": 4, "slidesToScroll": 1, "prevArrow": ".prev-blog", "nextArrow": ".next-blog","autoplay": true, "responsive":[{"breakpoint":768, "settings":{"slidesToShow": 2}}, {"breakpoint":576, "settings":{"slidesToShow": 1}}]}'>
                                    <?php foreach ($imagem as $item): ?>
                                    <div class="blog-item">
                                        <div class="blog-thumb">

                                                <img class="imageAb" src="/files/SobreImagens/imagem/<?=$item->imagem?>" alt="">

                                        </div>
                                    </div>
                                    <?php endforeach; ?>
                                </div>
                                <!-- Start Slider Navigation -->
                                <div class="gemma-slick-nav">
                                    <button class="prev-blog"><i class="ion-ios-arrow-left"></i></button>
                                    <button class="next-blog right"><i class="ion-ios-arrow-right"></i></button>
                                </div>
                                <!-- End Slider Navigation -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>

</main>

<style>

    @media (min-width: 576px) {
        .imageAb{
            width: 263px;
            height: 224px;
            object-fit: cover;
        }
    }

    @media only screen and (max-width: 767.98px)
        .pt-sm-50 {
            padding-top: 0px !important;
        }
</style>
