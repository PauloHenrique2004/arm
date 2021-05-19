
<!-- main wrapper start -->
<main>
    <!-- breadcrumb area start -->
    <div class="breadcrumb-area">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12" style="padding-right: 0px; padding-left: 0px">
                    <div class="breadcrumb-wrap text-center">
                        <nav aria-label="breadcrumb">

                            <h1>Resultado da Pesquisa</h1>

                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb area end -->

    <!-- page main wrapper start -->
    <div class="shop-main-wrapper pt-100 pb-100 pt-sm-50 pb-sm-50">
        <div class="container">
            <div class="row">
                <!-- shop main wrapper start -->
                <div class="col-lg-12">
                    <div class="shop-product-wrapper">
                             <!-- product item list start -->
                        <div class="shop-product-wrap grid-view row">
                            <?php foreach ($pesquisa as $item): ?>
                            <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div class="product-item mb-30">
                                    <?php foreach ($empresas as $empresa): ?>
                                     <?php $nome =  Cake\Utility\Text::slug($empresa->nome_empresa) ?>
                                       <?php if($empresa->id == $item->empresa_id): ?>
                                          <a href="/empresa/<?=$nome?>/<?= $item->empresa_id ?>">
                                        <?php endif; ?>
                                      <?php endforeach;?>
                                            <div class="product-thumb">
                                                <div class="overlay"></div>
                                                    <img class="pri-img" src="/files/Servicos/capa/<?=$item->capa?>" alt="">

                                            </div>
                                       </a>

                                    <div class="product-content" id="name">
                                        <h4 style="font-size: 13px; color: #658d1c">
                                            <span>Serviço Executado:</span> <span style="font-weight: 100;"><?=$item->nome?></span><br>
                                            <?php foreach ($empresas as $empresa): ?>
                                                <?php if($empresa->id == $item->empresa_id): ?>
                                                    <span>Nome da Empresa:</span> <span style="font-weight: 100;"><?=$empresa->nome_empresa ?></span><br>
                                                <?php endif; ?>
                                            <?php endforeach; ?>


                                                    <span data-toggle="tooltip" data-placement="right" style="margin-top: 10px">
                                                            <img class="mig" style="width: 20px; margin-right: 8px; float: right;" src="/webroot/fonts_site/compartilhar.svg" title="Compartilhar" onclick="copiarUrl()" >
                                                                 <?php $url= "https://$_SERVER[HTTP_HOST]/empresa/".$item->empresa_id; ?>
                                                                 <input style="" type="hidden" id="url" value="<?= $url ?>" />
                                                    </span>

                                            <?php foreach ($empresas as $empresa): ?>
                                            <?php $nome =  Cake\Utility\Text::slug($empresa->nome_empresa) ?>
                                            <?php if($empresa->id == $item->empresa_id): ?>
                                            <a href="/empresa/<?=$nome?>/<?=$item->empresa_id?>">
                                                <?php endif; ?>
                                                <?php endforeach; ?>
                                                <span><img class="mig"  style="width: 25px; margin-right: 8px; float: right; "src="/webroot/fonts_site/visao.svg" title="Ver Mais"></span>
                                            </a>
                                        </h4>
                                    </div>

                                </div>

                                <!-- product grid end -->
                            </div>
                            <?php endforeach; ?>
                            <!-- product single item start -->
                        </div>
                        <!-- product item list end -->
                        <div class="paginatoin-area text-center">
                            <ul class="pagination-box">
                                <li><?php echo $this->Paginator->prev('<'); ?></li>
                                <li><?php echo $this->Paginator->numbers(); ?></li>
                                <li ><?php echo $this->Paginator->next('>'); ?></li>
                            </ul>
                        </div>
                        <!-- end pagination area -->
                    </div>
                </div>
                <!-- shop main wrapper end -->
            </div>
        </div>
    </div>
    <!-- page main wrapper end -->

</main>
<style>
    .overlay:hover {
        background-color: transparent;
    }

    .overlay {
        width: 100%;
        background-color: #000;
        opacity: 0.45;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        cursor: pointer;
    }
</style>

<?php $this->start('script-footer'); ?>
<!-- Script copiar ao clicar-->
<script>
    function copiarUrl(){
        document.getElementById("url").select();
        document.execCommand('copy');
        alert("Link de compartilhamento copiado!")
    }
</script>
<!-- EndScript copiar ao clicar-->
<?php  $this->end();
