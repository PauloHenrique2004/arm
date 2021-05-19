
<body>
<div class="wrapper">
    <!-- header start -->
    <div class="header-height"></div>
    <!-- menu-style start -->
    <div class="sidebarmenu-wrapper">
        <div class="menu-close">
            <button><i class="ion-android-close"></i></button>
        </div>
    </div>
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
                <h2>post</h2>
                <ul>
                    <li>
                        <a href="/">Início</a>
                    </li>
                    <li> Post </li>
                    <li> / <?= $post->title ?> </li>
                </ul>
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
                            <div class="blog-img mb-30">
                                <img class="post-blog" src="<?= "/files/Blog/photo/" . $post->photo ?>" alt="">
                            </div>
                            <div class="blog-content">
                                <h2><?= $post->title ?></h2>
                                <div class="blog-date-categori">
                                    <ul>
                                        <li><?= $post->date ?> </li>
                                    </ul>
                                </div>
                            </div>
                            <li><?= $post->description ?> </li>

<!--                            <div class="blog-dec-tags-social">-->
<!--                                <div class="blog-dec-social">-->
<!--                                    <span>Compartilhar :</span>-->
<!--                                    <ul>-->
<!--                                        <li><a href="#"><i class="ion-social-instagram"></i></a></li>-->
<!--                                    </ul>-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>
                    </div>
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

                </div>


                <div class="col-lg-4 col-xl-3">
                    <div class="blog-sidebar-wrapper sidebar-mrg pl-20">
                        <div class="blog-widget mb-65">
                            <h4 class="blog-widget-title mb-35">RECENTES POSTAGENS</h4>
                            <div class="blog-recent-post">

                                <?php foreach ($recentes as $recente): ?>
                                <div class="recent-post-wrapper mb-25">
                                    <div class="recent-post-img">
                                        <a href="/post/<?= $recente->id?>"><img  style="width: 94px; height: 94px; object-fit: cover" src="<?= "/files/Blog/photo/" . $recente->photo ?>" alt=""></a>
                                    </div>
                                    <div class="recent-post-content">
                                        <h4><a href="/post/<?= $recente->id?>"><?= $recente->title ?></a></h4>
                                        <span><?= $recente->date ?></span>
                                    </div>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>

                        <div class="blog-widget mb-55">
                            <h4 class="blog-widget-title mb-25">SIGA-NOS</h4>
                            <div class="blog-sidebar-social">
                                <ul>
                                    <li><a href="https://www.instagram.com/artedosquatrocantos/" target="_blank"><i class="ion-social-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<style>
    .mt-37 {

    }


    @media ( min-width: 1440px) {
        .post-blog{
            object-fit: cover !important;
            height: calc(501px - 10px) !important;
        }
    }

    @media ( min-width: 1280px) and (max-width: 1439px){
        .post-blog{
            object-fit: cover !important;
            height: calc(436px - 10px) !important;
        }
    }


    @media ( min-width: 768px) and (max-width: 1279px){
        .post-blog{
            object-fit: cover !important;
            height: calc(370px - 10px) !important;
        }
    }

    @media ( min-width: 414px) and (max-width: 767px){
        .post-blog{
            object-fit: cover !important;
            height: calc(217px - 10px) !important;
        }
    }

    @media ( min-width: 375px) and (max-width: 413px){
        .post-blog{
            object-fit: cover !important;
            height: calc(196px - 10px) !important;
        }
    }

    @media (max-width: 360px){
        .post-blog{
            object-fit: cover !important;
            height: calc(188px - 10px) !important;
        }
    }


</style>

<?php $this->start('script-head'); ?>

<meta property="og:image" content="https://<?= $_SERVER['HTTP_HOST'] . "/files/Blog/photo/thumb-" . $post->photo ?>"/>
<meta property="og:title" content="<?= $post->title ?>"/>
<meta property="og:description" content="<?= strip_tags( substr($post->description, 0, 100)) ?>"/>

<?php $this->end(); ?>
