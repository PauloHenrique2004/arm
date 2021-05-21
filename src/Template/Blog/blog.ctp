<!-- ==================== Start header ==================== -->

<header class="works-header fixed-slider hfixd valign">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9 col-md-11 static">
                <div class="capt text-center mt-50">
<!--                    <h4 class="parlx">Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before.</h4>-->

                    <div class="bactxt custom-font valign">
                        <span class="full-width">Blog</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- ==================== End header ==================== -->
<div class="main-content">
<!-- ==================== Start Blog ==================== -->

<section class="blog-grid section-padding sub-bg">
    <div class="container">
        <div class="sec-head custom-font text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Blog</h6>
            <h3 class="wow" data-splitting>Blog</h3>
            <span class="tbg">Blog</span>
        </div>
        <div class="row">
            <?php foreach ($blog as $value): ?>
                <div class="col-lg-4 wow fadeInUp" data-wow-delay=".3s" id="post-b">
                    <div class="item active bg-img" data-background="/files/Blog/photo/<?= $value->photo ?>">
                        <div class="cont">
                            <a href="#0" class="date custom-font">
                                <span><?= $value->date ?></span>
                            </a>
                            <div class="info custom-font">
                                <a href="#0" class="author">
                                    <span><?= $value->title ?></span>
                                </a>
                            </div>
                            <h6>
                                <?php strip_tags($desc = $value->description)  ?>
                                <a href="#0"><?= strip_tags(strlen($desc) > 50 ? substr($desc,0,50)."..." : $desc)  ?></a>
                            </h6>
                            <div class="btn-more custom-font">
                                <a href="#0" class="simple-btn">Ver mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ==================== End Blog ==================== -->

    <style>
        @media(min-width: 991px){
            #post-b{
                margin-bottom: 40px;
            }
        }
    </style>
