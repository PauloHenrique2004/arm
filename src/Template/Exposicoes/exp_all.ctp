
<div class="header-height"></div>
<div class="breadcrumb-area mt-37 hm-4-padding">
    <div class="container-fluid">
        <div class="breadcrumb-content text-center border-top-2">
            <h2>Exposições</h2>
            <ul>
                <li>
                    <a href="/">Início</a>
                </li>
                <li> Exposições </li>
            </ul>
        </div>
    </div>
</div>

<div class="banner-area hm1-banner pt-130 pb-107">
    <div class="container">
        <div class="row">
            <?php foreach ($exp as $exposicao): ?>
             <?php if(empty($exposicao->desativar)): ?>
                <div class="col-md-12 col-lg-4">
                    <div class="banner-wrapper banner-border ml-10 mb-30">
                        <div class="banner-img">
                            <a href="/exposicao-online/<?= $exposicao->id ?>"><img class="img-exp" src="<?= "/files/Exposicoes/capa/" . $exposicao->capa ?>" alt="image"></a>
                        </div>
                        <div class="blog-hm-content">
                            <h3><a href="/exposicao-online/<?= $exposicao->id ?>"><li><?= $exposicao->nome ?></li></a></h3>

                            <span><?= $exposicao->profissional ?></span>

                            <div class="blog-meta">
                                <ul>
                                    <li><?= $exposicao->data ?></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            <?php endif; ?>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="pagination-style text-center mt-30">
        <ul class="">
            <?php echo $this->Paginator->first('<< ' . __('Primeira')); ?>
            <?php echo $this->Paginator->prev('< ' . __('Anterior')); ?>
            <?php echo $this->Paginator->numbers(); ?>
            <?php echo $this->Paginator->next(__('Próximo') . ' >'); ?>
            <?php echo $this->Paginator->last(__('Última') . ' >>'); ?>
        </ul>
    </div>
</div>


<style>
    .pb-107 {

    }


    @media (max-width:767px ) {
        .pb-107 {
            margin-top: 200px;
        }
    }


        .img-exp{
            object-fit: cover;
            width: 367px;
            height: 367px;
        }

</style>
