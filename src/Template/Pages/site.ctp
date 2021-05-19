<!-- ==================== Start Slider ==================== -->
<header class="slider-bus position-re valign">
    <div class="container ontop">
        <div class="swiper-container swiper-content">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 offset-lg-1 offset-md-1">
                            <div class="caption">
                                <h1 data-splitting>
                                    <div class="thin">Unique brand</div> Stories
                                </h1>
                                <p>If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.</p>
                                <a href="#0" class="btn-curve btn-color btn-radius mt-30">
                                    <span>Discover Work</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 offset-lg-1 offset-md-1">
                            <div class="caption">
                                <h1 data-splitting>
                                    <div class="thin">Digital Design</div>Awards
                                </h1>
                                <p>If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.</p>
                                <a href="#0" class="btn-curve btn-color btn-radius mt-30">
                                    <span>Discover Work</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 offset-lg-1 offset-md-1">
                            <div class="caption">
                                <h1 data-splitting>
                                    <div class="thin">Original</div> Solutions
                                </h1>
                                <p>If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.</p>
                                <a href="#0" class="btn-curve btn-color btn-radius mt-30">
                                    <span>Discover Work</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="swiper-container swiper-img">
        <div class="swiper-wrapper">
            <div class="swiper-slide bg-img" data-background="/images/slid/1.jpg" data-overlay-dark="6"></div>
            <div class="swiper-slide bg-img" data-background="/images/slid/2.jpg" data-overlay-dark="6"></div>
            <div class="swiper-slide bg-img" data-background="/images/slid/3.jpg" data-overlay-dark="6"></div>
        </div>
    </div>
    <div class="curve-bg bg-img" data-background="/images/business-bg.png"></div>

    <!-- slider setting -->
    <div class="setone">
        <div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            <i class="fas fa-chevron-left"></i>
        </div>
    </div>
    <div class="swiper-pagination custom-font"></div>
</header>

<!-- ==================== End Slider ==================== -->



<!-- ==================== Start que somos ==================== -->

<section class="about section-padding">
    <div class="container">
        <?php foreach ($sobre as $value): ?>
        <div class="row">
            <div class="col-lg-6 valign">
                <div class="content">
                    <div class="sub-title">
                        <h6>Quem somos</h6>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h3 class="co-tit custom-font wow" data-splitting><?= $value->titulo_sobre ?></h3>
                    <p class="wow fadeInUp" data-wow-delay=".4s"><?= strlen($value->descricao ) > 300 ? substr($value->descricao,0,300). "...": $value->descricao ?></p>


                    <a href="#0" class="simple-btn custom-font mt-30 wow" data-splitting><span>Ver mais</span></a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="blc-img">
                    <div class="bimg wow imago">
                        <img src="/files/Abouts/capa/<?= $value->capa ?>" alt="">
                    </div>
                    <div class="skills-circle wow fadeInUp" data-wow-delay=".8">
                        <div class="item">
                            <div class="skill" data-value="0.9">
                                <span class="custom-font">90%</span>
                            </div>
                            <div class="cont">
                                <span>Project</span>
                                <h6>Consulting</h6>
                            </div>
                        </div>
                        <div class="item">
                            <div class="skill" data-value="0.75">
                                <span class="custom-font">75%</span>
                            </div>
                            <div class="cont">
                                <span>App</span>
                                <h6>Development</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- ==================== End quem somo ==================== -->


<!-- ==================== Start Services ==================== -->

<section class="services section-padding sub-bg">
    <div class="container">
        <div class="sec-head custom-font tr-head">
            <h6>ARM CONSULTORIA</h6>
            <h3>Serviços.</h3>
            <span class="tbg">Serviços</span>
        </div>
        <div class="row">
            <?php foreach ($servicos as $key => $servico): ?>

            <?php if ($key == 0):?>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <div class="step-item xtop">
                    <span class="icon pe-7s-gleam"></span>
                    <h6><?= $servico->nome ?></h6>
                   <p> <?= strlen($servico->descricao) > 70 ? substr($servico->descricao,0, 70)."..." : $servico->descricao ?></p>
                </div>
            </div>
            <?php elseif ($key == 1): ?>
                <div class="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
                    <div class="step-item xcolor">
                        <span class="icon pe-7s-phone"></span>
                        <h6><?= $servico->nome ?></h6>
                        <p> <?= strlen($servico->descricao) > 70 ? substr($servico->descricao,0, 70)."..." : $servico->descricao ?></p>
                    </div>
                </div>
             <?php else: ?>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
                <div class="step-item xbottom">
                    <span class="icon pe-7s-magic-wand"></span>
                    <h6><?= $servico->nome ?></h6>
                    <p> <?= strlen($servico->descricao) > 70 ? substr($servico->descricao,0, 70)."..." : $servico->descricao ?></p>
                </div>
            </div>
             <?php endif; ?>
            <?php endforeach; ?>

        </div>
        <div class="smore custom-font">
            <a href="#0">Ver mais</a>
            <i class="fas fa-long-arrow-alt-right"></i>
        </div>
    </div>
</section>

<!-- ==================== End Services ==================== -->



<!-- ==================== Start block-sec ==================== -->

<section class="block-sec">
    <div class="background bg-img section-padding pb-0" data-background="/images/pattern.png">
        <div class="container">
            <div class="number-sec">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="item no-bord">
                            <span class="icon pe-7s-smile"></span>
                            <h3 class="custom-font"><span class="count">2400</span></h3>
                            <p class="wow txt" data-splitting>Happy Clients</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="item">
                            <span class="icon pe-7s-portfolio"></span>
                            <h3 class="custom-font"><span class="count">133</span></h3>
                            <p class="wow txt" data-splitting>Compleate Projects</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="item">
                            <span class="icon pe-7s-cloud-download"></span>
                            <h3 class="custom-font"><span class="count">254</span> k</h3>
                            <p class="wow txt" data-splitting>Files Downloaded</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="item">
                            <span class="icon pe-7s-medal"></span>
                            <h3 class="custom-font"><span class="count">46</span></h3>
                            <p class="wow txt" data-splitting>Award Win</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="showreel">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="video-box">
                            <div class="tit-text">
                                <h3 class="wow" data-splitting>Video</h3>
                            </div>
                            <div class="wow imago">
                                <div class="img">
                                    <img src="/images/vid.jpg" alt="">
                                </div>
                                <?php foreach ($videos as $video): ?>
                                <div class="vid-icon">
                                    <a class="vid" href="<?= $video->link ?>">
                                        <div class="vid-butn">
                                                <span class="icon">
                                                    <i class="fas fa-play"></i>
                                                </span>
                                        </div>
                                    </a>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ==================== End block-sec ==================== -->



<!-- ==================== Start Works ==================== -->

<section class="work-carousel section-padding caroul sub-bg position-re">

</section>

<!-- ==================== End Works ==================== -->



<!-- ==================== Start testimonials ==================== -->

<section class="testimonials section-padding">
    <div class="container position-re">
        <div class="sec-head custom-font text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">What Peapole Says?</h6>
            <h3 class="wow" data-splitting>Testimonials.</h3>
            <span class="tbg">Testimonials</span>
        </div>
        <div class="row justify-content-center wow fadeInUp" data-wow-delay=".5s">
            <div class="col-lg-8">
                <div class="slic-item">
                    <div class="item">
                        <p>Working with Avo digital agency to support our organic and paid social media activity has extended the marketing activities we are able to achieve platform has made collaboration easy.
                        </p>
                        <div class="info">
                            <div class="cont">
                                <div class="author">
                                    <div class="img">
                                        <img src="/images/clients/1.jpg" alt="">
                                    </div>
                                    <h6 class="author-name custom-font">Alex Regelman</h6>
                                    <span class="author-details">Co-founder, Colabrio</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <p>Avo started out managing our SEO efforts, but their scientific approach to digital marketing and the results they have achieved made it an easy decision for us to handover the management.</p>
                        <div class="info">
                            <div class="cont">
                                <div class="author">
                                    <div class="img">
                                        <img src="/images/clients/1.jpg" alt="">
                                    </div>
                                    <h6 class="author-name custom-font">Alex Regelman</h6>
                                    <span class="author-details">Co-founder, Colabrio</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <p>I would highly recommend Avo Digital. I worked with the team on an animation for our ‘Click & Collect’ service. This team is different from any other agency I have worked with in the past.</p>
                        <div class="info">
                            <div class="cont">
                                <div class="author">
                                    <div class="img">
                                        <img src="/images/clients/1.jpg" alt="">
                                    </div>
                                    <h6 class="author-name custom-font">Alex Regelman</h6>
                                    <span class="author-details">Co-founder, Colabrio</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="arrows">
            <div class="next cursor-pointer">
                <span class="pe-7s-angle-right"></span>
            </div>
            <div class="prev cursor-pointer">
                <span class="pe-7s-angle-left"></span>
            </div>
        </div>
    </div>
</section>

<!-- ==================== End testimonials ==================== -->



<!-- ==================== Start Blog ==================== -->

<section class="blog-grid section-padding sub-bg">
    <div class="container">
        <div class="sec-head custom-font text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Latest News</h6>
            <h3 class="wow" data-splitting>Our Blogs.</h3>
            <span class="tbg">Blogs</span>
        </div>
        <div class="row">
            <div class="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <div class="item bg-img" data-background="/images/blog/1.jpg">
                    <div class="cont">
                        <a href="#0" class="date custom-font">
                            <span><i>06</i> Aug 2019</span>
                        </a>
                        <div class="info custom-font">
                            <a href="#0" class="author">
                                <span>by / Admin</span>
                            </a>
                            <a href="#0" class="tag">
                                <span>WordPress</span>
                            </a>
                        </div>
                        <h6>
                            <a href="#0">The Start-Up Ultimate Guide to Make Your WordPress
                                Journal.</a>
                        </h6>
                        <div class="btn-more custom-font">
                            <a href="#0" class="simple-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
                <div class="item active bg-img" data-background="/images/blog/2.jpg">
                    <div class="cont">
                        <a href="#0" class="date custom-font">
                            <span><i>06</i> Aug 2019</span>
                        </a>
                        <div class="info custom-font">
                            <a href="#0" class="author">
                                <span>by / Admin</span>
                            </a>
                            <a href="#0" class="tag">
                                <span>WordPress</span>
                            </a>
                        </div>
                        <h6>
                            <a href="#0">The Start-Up Ultimate Guide to Make Your WordPress
                                Journal.</a>
                        </h6>
                        <div class="btn-more custom-font">
                            <a href="#0" class="simple-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
                <div class="item bg-img" data-background="/images/blog/3.jpg">
                    <div class="cont">
                        <a href="#0" class="date custom-font">
                            <span><i>06</i> Aug 2019</span>
                        </a>
                        <div class="info custom-font">
                            <a href="#0" class="author">
                                <span>by / Admin</span>
                            </a>
                            <a href="#0" class="tag">
                                <span>WordPress</span>
                            </a>
                        </div>
                        <h6>
                            <a href="#0">The Start-Up Ultimate Guide to Make Your WordPress
                                Journal.</a>
                        </h6>
                        <div class="btn-more custom-font">
                            <a href="#0" class="simple-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ==================== End Blog ==================== -->


