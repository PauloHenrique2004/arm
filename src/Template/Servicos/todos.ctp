


<!-- ==================== Start header ==================== -->

<header class="works-header fixed-slider hfixd valign">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9 col-md-11 static">
                <div class="capt text-center mt-50">
<!--                    <h4 class="parlx">Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before.</h4>-->

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
                        <?php $link = Cake\Utility\Text::slug($servico->nome) ?>
                        <div class="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
                            <a style="min-width: 100%" href="/servico/<?= $link ?>/<?= $servico->id?>">
                            <div class="step-item xcolor">
                                <span><img src="/icono-logo3.png" style="width: 40%; margin-bottom: 30px;"></span>
                                <h6><?= $servico->nome ?></h6>
                                <p> <?= strlen($servico->descricao) > 70 ? substr($servico->descricao,0, 70)."..." : $servico->descricao ?></p>
                            </div>
                            </a>
                        </div>
                <?php endforeach; ?>
                 </a>
            </div>


            <div class="paginator">
                <ul class="pagination">
                    <?php echo $this->Paginator->prev('< ' . __('Anterior')); ?>
                    <?php echo $this->Paginator->numbers(); ?>
                    <?php echo $this->Paginator->next(__('Próximo') . ' >'); ?>
                </ul>
            </div>




        </div>
    </section>
</div>
    <!-- ==================== End works ==================== -->

<style>
    @media(min-width: 991px){
        .step-item
        {
            width: 370px;
            height: 371px;
        }
    }


    .active a{

             color: #11141b  !important;
          background-color: #eb8b2d  !important;

         }

   .pagination li a{

        position: relative !important;
        display: block  !important;
        padding: .5rem .75rem  !important;
        margin-left: -1px  !important;
        line-height: 1.25  !important;
        color: #fff ;
        background-color: #11141b;
        border: 1px solid #dee2e6  !important;

    }



    pagination li a {
        position: relative !important;
        display: block !important;
        padding: .5rem .75rem !important;
        margin-left: -1px !important;
        line-height: 1.25 !important;
        color: #007bff !important;
        background-color: #fff !important;
        border: 1px solid #dee2e6 !important;
    }
</style>
