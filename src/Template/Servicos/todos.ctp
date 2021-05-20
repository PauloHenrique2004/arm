


<!-- ==================== Start header ==================== -->

<header class="works-header fixed-slider hfixd valign">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9 col-md-11 static">
                <div class="capt text-center mt-50">
                    <h4 class="parlx">Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before.</h4>

                    <div class="bactxt custom-font valign">
                        <span class="full-width">Serviços</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- ==================== End header ==================== -->



<div class="main-content">

    <!-- ==================== Start works ==================== -->

    <section class="services section-padding sub-bg">
        <div class="container">
            <div class="sec-head custom-font tr-head">
                <h6>ARM CONSULTORIA</h6>
                <h3>Serviços</h3>
                <span class="tbg">Serviços</span>
            </div>
            <div class="row">
                <?php foreach ($servicos as $key => $servico): ?>
                        <div class="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
                            <div class="step-item xcolor">
                                <span><img src="/icono-logo3.png" style="width: 40%; margin-bottom: 30px;"></span>
                                <h6><?= $servico->nome ?></h6>
                                <p> <?= strlen($servico->descricao) > 70 ? substr($servico->descricao,0, 70)."..." : $servico->descricao ?></p>
                            </div>
                        </div>
                <?php endforeach; ?>

            </div>
        </div>
    </section>
</div>
    <!-- ==================== End works ==================== -->
