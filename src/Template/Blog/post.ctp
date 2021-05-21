<section class="intro-section section-padding" style="margin-top: 100px">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-md-10" style="text-align: center;">


                <div class="blog-img mb-30">
                    <img class="post-blog" src="<?= "/files/Blog/photo/" . $post->photo ?>" alt="">
                </div>

                <div class="blog-details-wrapper" style="text-align: left">
                    <div class="single-blog-wrapper">
                        <div class="blog-content">
                            <h2><?= $post->title ?></h2>
                        </div>

                    </div>
                </div>

                <div class="text js-scroll__content" style="text-align: justify;">
                    <p class=""><?= $post->description ?> </p>
                </div>


                <div class="blog-dec-tags-social">
                    <div class="blog-dec-social" style="text-align: left">

                        <ul>
                            <li style="margin-right: 5px"><span>Compartilhe :</span></li>
                            <li style="margin-right: 10px"><a href="https://www.facebook.com/sharer/sharer.php?u=http://<?= $_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"] ?>" target="_blank"><i class="ion-social-facebook"></i></a></li>

                            <li><a href="" id="whatsapp-share-btt" rel="nofollow" target="_blank"
                                   class="whatsapp-share-button"
                                   title="Compartilhar"><i class="ion-social-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

                <div class="col-lg-2  col-md-2" style="">
                    <div class="blog-widget mb-65">
                        <h5 class="blog-widget-title mb-35">Recentes</h5>
                        <div class="blog-recent-post">

                            <?php foreach ($recentes as $recente): ?>
                                <div class="recent-post-wrapper mb-25">
                                    <div class="recent-post-img">
                                        <a href="/post/<?= $recente->id?>"><img  style="width: 94px; height: 94px; object-fit: cover" src="<?= "/files/Blog/photo/" . $recente->photo ?>" alt=""></a>
                                    </div>
                                    <div class="recent-post-content">

                                        <a href="#0" class="author">
                                            <span><a href="/post/<?= $recente->id?>"><?= $recente->title ?></a></span></br>
                                        </a>

                                        <a href="#0" class="date custom-font">
                                            <span><?= $recente->date ?></span>
                                        </a>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="blog-widget mb-55">
                        <h5 class="blog-widget-title mb-10">SIGA-NOS</h5>
                        <div class="blog-sidebar-social">
                            <ul>
                                <li style="margin-right: 10px"><a href="https://www.instagram.com/artedosquatrocantos/" target="_blank"><i class="ion-social-instagram"></i></a></li>
                                <li><a href="https://www.instagram.com/artedosquatrocantos/" target="_blank"><i class="ion-social-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </div>

</section>



<style>
    .blog-dec-tags-social {
        border-bottom: 2px solid #f6f6f6;
        display: flex;
        justify-content: space-between;
        margin-top: 52px;


    }

    .blog-dec-social ul li { display: inline; }

    .blog-sidebar-social ul li { display: inline; }
</style>
