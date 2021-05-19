<!-- .page-content start -->
<div class="page-content custom-img-background dark page-title page-title-1 mb-20">
    <div class="container">
        <!-- .row start -->
        <div class="row">
            <!-- .col-md-6 start -->
            <div class="col-md-6">
                <div class="custom-heading style-1 triggerAnimation animated" data-animate='fadeInUp'>
                    <h1><P style="color: #f7f7f7;
    text-shadow: 2px 2px #000;">Serviço</P></h1>
                </div><!-- .custom-heading.style-1 end -->
            </div><!-- .col-md-6 end -->
            <!-- .col-md-6 start -->
            <!-- .col-md-6 end -->
        </div><!-- .row end -->
    </div><!-- .container end -->
</div><!-- .page-content end -->

<div class="page-content">
    <div class="container">
        <div class="row text-single">
            <!-- .col-md-6 end -->
            <div class="col-md-8 col-sm-12">
                <div class="custom-heading style-1">
                    <h2><?php echo $portifolioSingle->title ?></h2>
                </div>
                <?php echo $portifolioSingle->description ?>
                <img onclick="vollar()" src="/images/back.png" style="max-width: 30px; cursor:pointer;">

            </div><!-- .col-md-6 end -->

        </div><!-- .row end -->
    </div><!-- .container end -->
</div><!-- .page-content end -->


<script>

    function vollar() {
        window.history.back();
    }


</script>
