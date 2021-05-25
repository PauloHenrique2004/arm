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
                                    <div class="thin">ARM SOLUÇÕES</div> Soluções
                                </h1>
                                <p>Assessoria na elaboração de Projetos de Lei, Decretos, Resoluções Portarias e Editais, Assessoria a Regionalização da Saúde...</p>
                                <a href="/servico" class="btn-curve btn-color btn-radius mt-30">
                                    <span>Serviços</span>
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
                                    <div class="thin">ARM SOLUÇÕES</div> Serviços
                                </h1>
                                <p>Assessoria na elaboração de Projetos de Lei, Decretos, Resoluções Portarias e Editais, Assessoria a Regionalização da Saúde...</p>
                                <a href="/servico" class="btn-curve btn-color btn-radius mt-30">
                                    <span>Serviços</span>
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
                                    <div class="thin">ARM SOLUÇÕES</div> Saúde
                                </h1>
                                <p>Assessoria na elaboração de Projetos de Lei, Decretos, Resoluções Portarias e Editais, Assessoria a Regionalização da Saúde...</p>
                                <a href="/servico" class="btn-curve btn-color btn-radius mt-30">
                                    <span>Serviços</span>
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


                    <a href="/sobre-nos/5" class="simple-btn custom-font mt-30 wow" data-splitting><span>Ver mais</span></a>
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
                                <span>Projetos</span>
                                <h6>Atendimento personalizado</h6>
                            </div>
                        </div>
                        <div class="item">
                            <div class="skill" data-value="1.00">
                                <span class="custom-font">100%</span>
                            </div>
                            <div class="cont">
                                <span>ARM</span>
                                <h6>Administração de processos</h6>
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
            <h3>Serviços</h3>
            <span class="tbg">Serviços</span>
        </div>
        <div class="row">
            <?php foreach ($servicos as $key => $servico): ?>

            <?php $link = Cake\Utility\Text::slug($servico->nome) ?>

            <?php if ($key == 0):?>

            <div class="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <a href="/servico/<?= $link ?>/<?= $servico->id?>">
                <div class="step-item xtop">
                    <span><img src="/icono-logo2.png" style="width: 40%; margin-bottom: 30px;"></span>
                    <h6><?= $servico->nome ?></h6>
                   <p> <?= strlen($servico->descricao) > 70 ? substr($servico->descricao,0, 70)."..." : $servico->descricao ?></p>
                </div>
                </a>
            </div>

            <?php elseif ($key == 1): ?>
                <div class="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
                    <a href="/servico/<?= $link ?>/<?= $servico->id?>">
                    <div class="step-item xcolor">
                        <span><img src="/icono-logo3.png" style="width: 40%; margin-bottom: 30px;"></span>
                        <h6><?= $servico->nome ?></h6>
                        <p> <?= strlen($servico->descricao) > 70 ? substr($servico->descricao,0, 70)."..." : $servico->descricao ?></p>
                    </div>
                    </a>
                </div>
             <?php else: ?>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
                <a href="/servico/<?= $link ?>/<?= $servico->id?>">
                <div class="step-item xbottom">
                    <span><img src="/icono-logo2.png" style="width: 40%; margin-bottom: 30px;"></span>
                    <h6><?= $servico->nome ?></h6>
                    <p> <?= strlen($servico->descricao) > 70 ? substr($servico->descricao,0, 70)."..." : $servico->descricao ?></p>
                </div>
                </a>
            </div>
             <?php endif; ?>
            <?php endforeach; ?>

        </div>
        <div class="smore custom-font">
            <a href="/servico">Ver mais</a>
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
                            <h3 class="custom-font">+<span class="count">300</span></h3>
                            <p class="wow txt" data-splitting>Clientes Atendidos</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="item">
                            <span class="icon pe-7s-portfolio"></span>
                            <h3 class="custom-font">+<span class="count">640</span></h3>
                            <p class="wow txt" data-splitting>Projetos Finalizados</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="item">
                            <span class="icon pe-7s-users"></span>
                            <h3 class="custom-font">+<span class="count">254</span></h3>
                            <p class="wow txt" data-splitting>Colaboradores</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="item">
                            <span class="icon pe-7s-date"></span>
                            <h3 class="custom-font">+<span class="count">15</span></h3>
                            <p class="wow txt" data-splitting>Anos de atuação</p>
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

<section class="testimonials section-padding" id="depoimentos">
    <div class="container position-re">
        <div class="sec-head custom-font text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">O que as pessoas dizem?</h6>
            <h3 class="wow" data-splitting>Depoimentos</h3>
            <span class="tbg">Depoimentos</span>
        </div>
        <div class="row justify-content-center wow fadeInUp" data-wow-delay=".5s">
            <div class="col-lg-8">
                <div class="slic-item">
                    <?php foreach ($depoimentos as $depoimento): ?>
                    <div class="item">
                        <p><?= strip_tags($depoimento->descricao) ?></p>
                        <div class="info">
                            <div class="cont">
                                <div class="author">
                                    <div class="img">
                                        <img src="/files/Depoimentos/photo/<?= $depoimento->photo ?>" alt="">
                                    </div>
                                    <h6 class="author-name custom-font">Alex Regelman</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endforeach; ?>
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



<!-- ==================== Start oque fazemos ==================== -->

<section class="next-prog section-padding" style="background: #11141b">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="box">
                    <div class="bg-img valign" data-background="/images/portfolio/project1/arm3.png" data-overlay-dark="4">
                        <div class="caption ontop valign">
                            <div class="o-hidden full-width">
                                <h1>
                                    <a href="/oque-fazemos/1">
                                        <div class="stroke">O que fazemos</div>
                                    </a>
                                </h1>
                            </div>
                        </div>
                        <div class="copy-cap valign">
                            <div class="cap full-width">
                                <h1>
                                    <a href="/">
                                        <span>Oque fazemos</span>
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

<!-- ==================== End o que fazemos ==================== -->






<!-- ==================== Start Blog ==================== -->

<section class="blog-grid section-padding sub-bg" style="background: #0c0f16">
    <div class="container">
        <div class="sec-head custom-font text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Últimas notícias</h6>
            <h3 class="wow" data-splitting>Blog</h3>
            <span class="tbg">Blog</span>
        </div>
        <div class="row">
            <?php foreach ($blog as $value): ?>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <?php $link = Cake\Utility\Text::slug($value->title ) ?>
                <div class="item active bg-img" data-background="/files/Blog/photo/<?= $value->photo ?>">
                    <div class="cont">
                        <a href="/postagem/<?= $link ?>/<?= $value->id  ?>" class="date custom-font">
                            <span><?= $value->date ?></span>
                        </a>
                        <div class="info custom-font">
                            <a href="/postagem/<?= $link ?>/<?= $value->id  ?>" class="author">
                                <span><?= $value->title ?></span>
                            </a>
                        </div>
                        <h6>
                            <?php strip_tags($desc = $value->description)  ?>
                            <a href="/postagem/<?= $link ?>/<?= $value->id  ?>"><?= strip_tags(strlen($desc) > 50 ? substr($desc,0,50)."..." : $desc)  ?></a>
                        </h6>
                        <div class="btn-more custom-font">
                            <a href="/postagem/<?= $link ?>/<?= $value->id  ?>" class="simple-btn">Ver mais</a>
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
        .step-item
        {
            width: 370px;
            height: 371px;
        }
    }


    @media (max-width: 321px) {
        .ontop{
            margin-top: 30px !important;
        }

    }
</style>
