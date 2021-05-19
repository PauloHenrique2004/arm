<!-- .page-content start -->
<div class="page-content custom-img-background dark page-title page-title-1 mb-70">
    <div class="container">
        <!-- .row start -->
        <div class="row">
            <!-- .col-md-6 start -->
            <div class="col-md-6">
                <div class="custom-heading style-1 triggerAnimation animated" data-animate='fadeInUp'>
                    <h1>Construção Civil</h1>
                </div><!-- .custom-heading.style-1 end -->
            </div><!-- .col-md-6 end -->
            <!-- .col-md-6 start -->
            <!-- .col-md-6 end -->
        </div><!-- .row end -->
    </div><!-- .container end -->
</div><!-- .page-content end -->

<div class="page-content">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-6">
                <div class="simple-gallery" style="float: left;">
                    <div class="container-fluid" style="">

                        <!-- Carousel container -->
                        <div id="my-pics" class="carousel slide" data-ride="carousel"
                             style="width:100%;">

                            <!-- Indicators -->
                            <ol class="carousel-indicators">
                                <?php foreach ($civicImages as $key => $civicImage): ?>
                                    <li data-target="#my-pics" data-slide-to="<?= $key ?>"
                                        class="<?= $key == 0 ? 'active' : '' ?>"></li>
                                <?php endforeach; ?>
                            </ol>

                            <!-- Content -->
                            <div class="carousel-inner" role="listbox">
                                <?php foreach ($civicImages as $key => $civicImage): ?>
                                    <div class="item <?= $key == 0 ? 'active' : '' ?>">
                                        <img style="width: 600px; height: auto !important;"
                                             src="<?= "/files/CivicImages/photo/" . $civicImage->photo ?>"
                                             alt="Sunset over beach">
                                    </div>
                                <?php endforeach; ?>
                            </div>

                            <!-- Previous/Next controls -->
                            <a class="left carousel-control" href="#my-pics" role="button" data-slide="prev">
                                <span class="icon-prev" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#my-pics" role="button" data-slide="next">
                                <span class="icon-next" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>

                        </div>

                    </div>

                </div>
            </div><!-- .col-md-6 end -->


            <div id="text" style="margin-left: 29px; margin-right: 29px">
                <h2><?php echo $constraction->title ?></h2>

            <p style="margin-top: -17px ;margin-right: 14px !important; padding-left: 30px !important;"><?php echo $constraction->description ?>  </p>
            </div>
        </div><!-- .col-md-6 end -->

    </div><!-- .container end -->
</div><!-- .page-content end -->


<!-- .page-content start -->
<div class="page-content quote style-1 custom-background bkg-black dark">
    <!-- .container start -->
    <div class="container">
        <!-- .row start -->
        <div class="row mb-0">
            <!-- .col-md-9 start -->
            <div class="col-md-9 col-sm-9 col-xs-12 mb-0">
                <div class="quote-content">
                    <div class="text">
                        <h3>Entre em contato</h3>
                    </div>
                </div>
            </div><!-- .col-md-9 end -->
            <!-- .col-md-3 start -->
            <div class="col-md-3 col-sm-3 col-xs-12 mb-50">
                <div class="quote-btn">
                    <a href='/contato' class="btn btn-primary float-right">
                        Contato
                    </a>
                </div>
            </div><!-- .col-md-3 end -->
        </div><!-- .row end -->
    </div><!-- .container end -->
</div><!-- .page-content.custom-background end -->
