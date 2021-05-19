<!-- .page-content start -->
<div class="page-content custom-img-background dark page-title page-title-1 mb-70">
    <div class="container">
        <!-- .row start -->
        <div class="row">
            <!-- .col-md-6 start -->
            <div class="col-md-6">
                <div class="custom-heading style-1 triggerAnimation animated" data-animate='fadeInUp'>
                    <h1 style="color: #333">Serviços</h1>
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
                <div class="simple-gallery">
                    <div class="container-fluid" style="">


                        <img style="max-width: 500px; width: 100%;height: 250px; object-fit: contain"
                             src="<?= "/files/Services/photo/" . $serviceSingle->photo ?>"/>

                    </div>

                </div>
            </div><!-- .col-md-6 end -->

            <div class="col-md-6 col-sm-6">
                <div class="custom-heading style-1">

                    <h2><?php echo $serviceSingle->title ?></h2>

                </div>


                <p><?php echo $serviceSingle->description ?>  </p>

                <img onclick="vollar()" src="/images/back.png" style="max-width: 30px; cursor:pointer;">

            </div><!-- .col-md-6 end -->
        </div><!-- .row end -->
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
                    <a href='/contacts/contato' class="btn btn-primary float-right">
                        Contato
                    </a>
                </div>
            </div><!-- .col-md-3 end -->
        </div><!-- .row end -->
    </div><!-- .container end -->
</div><!-- .page-content.custom-background end -->

<script>
    function vollar() {
        window.history.back();
    }
</script>
