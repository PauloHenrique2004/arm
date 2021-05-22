
<!-- ==================== Start Intro ==================== -->

<section class="intro-section section-padding pb-0" style="margin-top: 100px;background-image: url(/images/pattern.png); background-size: cover;background-repeat: no-repeat; ">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-4">
                <div class="htit sm-mb30">
                    <h4>Quem Somos</h4>
                </div>
            </div>
            <div class="col-lg-8 offset-lg-1 col-md-8 fazemos">
                <div class="text">
                    <p class="wow txt" data-splitting><?= $about->descricao ?></p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ==================== End Intro ==================== -->



<!-- ==================== Start Services ==================== -->

<section class="services section-padding">
    <div class="container" style="display: none">
        <div class="row">
            <div class="col-lg-4">
                <div class="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
                    <span class="icon pe-7s-gleam"></span>
                    <h6>Digital Marketing</h6>
                    <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
                    <span class="icon pe-7s-phone"></span>
                    <h6>Web & App Development</h6>
                    <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="item wow fadeInUp" data-wow-delay=".7s">
                    <span class="icon pe-7s-magic-wand"></span>
                    <h6>Graphic Design</h6>
                    <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ==================== End Services ==================== -->



<!-- ==================== Start block-sec ==================== -->

<section class="block-sec">
    <div class="background bg-img section-padding pb-0" data-background="/images/slid/1.jpg" data-overlay-dark="8">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="vid-area">
                        <div class="vid-icon">
                            <a class="vid" href="<?= $about->video ?>">
                                <div class="vid-butn">
                                        <span class="icon">
                                            <i class="fas fa-play"></i>
                                        </span>
                                </div>
                            </a>
                        </div>

                        <div class="cont" style="">
                            <h3 class="wow" data-splitting>Soluções em inteligência e estratégia</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 offset-lg-1">
                    <div class="testim-box">
                        <div class="head-box">
                            <h6 class="wow fadeIn" data-wow-delay=".5s">NOSSOS CLIENTES</h6>
                            <h4 class="wow fadeInLeft" data-wow-delay=".5s">O que o cliente diz?</h4>
                        </div>
                        <div class="slic-item wow fadeInUp" data-wow-delay=".5s">
                            <?php foreach ($depoimentos as $depoimento): ?>
                            <div class="item">
                                <p><?= strip_tags($depoimento->descricao) ?></p>
                                <div class="info">
                                    <div class="img">
                                        <div class="img-box">
                                            <img src="/files/Depoimentos/photo/<?= $depoimento->photo ?>" alt="">
                                        </div>
                                    </div>
                                    <div class="cont">
                                        <div class="author">
                                            <h6 class="author-name custom-font"><?= $depoimento->cliente ?></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ==================== End block-sec ==================== -->



<!-- ==================== Start Skills Circle ==================== -->

<section class="skills-circle sub-bg pt-50 pb-50">
    <div class="container">
        <div class="row">
            <div class="col-lg-7">
                <div class="">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="item wow fadeInLeft" data-wow-delay=".6">
                                <div class="skill" data-value="0.9">
                                    <span class="custom-font">90%</span>
                                </div>
                                <div class="cont">
                                    <span>Projetos</span>
                                    <h6>Atendimento personalizado</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="item wow fadeInLeft" data-wow-delay=".3">
                                <div class="skill" data-value="0.75">
                                    <span class="custom-font">75%</span>
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
        </div>
    </div>
</section>

<!-- ==================== End Skills Circle ==================== -->


<!-- ==================== Start Minimal-Area ==================== -->

<section class="min-area sub-bg">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="img">
                    <img class="thumparallax-down" src="/files/Abouts/capa/<?= $about->capa?>" alt="">
                </div>
            </div>
            <div class="col-lg-6 valign">
                <div class="content">
                    <h4 class="wow custom-font" data-splitting>Sobre nós.</h4>
                    <p class="wow txt" data-splitting>Atuamos com o intuito de adequar os serviços de nossos clientes aos mais altos níveis de exigência do mercado, da legalidade e de suas próprias expectativas.
                    </p>
                    <ul class="feat">
<!--                        missao-->
                        <li class="wow fadeInUp" data-wow-delay=".2s">
                            <a href="#collapseOne" class="text-dark" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                             <h6 style="color: #fff"><span>+</span> <?= $about->titulo_missao ?></h6>
                            </a>

                            <div id="collapseOne" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="accordion-content">
                                    <p class="accordion-text"> <?= $about->descricao_missao ?> </p>
                                </div>
                            </div>
                        </li>
<!--                       end missao     -->

<!--                        visao-->
                        <li class="wow fadeInUp" data-wow-delay=".2s">
                            <a href="#collapseTwo" class="text-dark" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                <h6 style="color: #fff"><span>+</span> <?= $about->titulo_visao ?></h6>
                            </a>

                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="accordion-content">
                                    <p class="accordion-text"> <?= $about->descricao_visao ?> </p>
                                </div>
                            </div>
                        </li>
<!--                        end visao-->

<!--                        valores-->
                        <li class="wow fadeInUp" data-wow-delay=".2s">
                            <a href="#collapseThree" class="text-dark" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                <h6 style="color: #fff"><span>+</span> <?= $about->titulo_valor ?></h6>
                            </a>


                            <div id="collapseThree" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="accordion-content">
                                    <p class="accordion-text"> <?= $about->descricao_valor ?> </p>
                                </div>
                            </div>
                        </li>
<!--                        end valores-->

                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ==================== End Minimal-Area ==================== -->


<!-- ==================== Start call-to-action ==================== -->

<section class="call-action section-padding sub-bg bg-img" data-background="/images/pattern.png">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-lg-9">
                <div class="content sm-mb30">
                    <h6 class="wow" data-splitting>ARM CONSULTORIA</h6>
                    <h2 class="wow custom-font" data-splitting>ALGUMA DUVIDA?</h2>
                </div>
            </div>

            <div class="col-md-4 col-lg-3 valign">
                <a href="contact.html" class="btn-curve btn-lit"><span>Entre em contato</span></a>
            </div>

        </div>
    </div>
</section>

<!-- ==================== End call-to-action ==================== -->


<style>
    .fazemos{
        margin-left: 0px !important;
    }
</style>
