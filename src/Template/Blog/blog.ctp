

<div class="wrapper">
    <!-- header start -->
    <div class="header-height"></div>
    <div class="breadcrumb-area mt-37 hm-4-padding">
        <div class="container-fluid">
            <div class="breadcrumb-content text-center border-top-2">
                <h2>Blog</h2>
                <ul>
                    <li>
                        <a href="/">Início</a>
                    </li>
                    <li> Blog </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- blog-area start -->
    <div class="blog-area pt-125 pb-85 blog-padding hm-blog bbg">
        <div class="container-fluid">
            <div class="row">
                <?php foreach ($blog as $post): ?>
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-hm-wrapper mb-40">
                            <div class="blog-img">
                                <a href="/post/<?= $post->id ?>"><img class="img-post" src="<?= "/files/Blog/photo/" . $post->photo ?>" alt="image"></a>
                            </div>
                            <div class="blog-hm-content">
                                <h3><a href="/post/<?= $post->id ?>"><li><?= $post->title ?></li></a></h3>
                                <div class="blog-meta">
                                    <ul>
                                        <li><?= $post->date ?></li>
                                    </ul>
                                </div>
                                <?php echo strlen($post->description) > 150 ? substr($post->description, 0, 100) . "..." : $post->description ?>
                            </div>
                        </div>
                    </div>
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

</div>





<style>
    .bbg {
         padding-top: 0px !important;
    }
</style>
