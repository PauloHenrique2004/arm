<div class="page-content custom-img-background dark page-title page-title-1 mb-20">
    <div class="container">
        <!-- .row start -->
        <div class="row">
            <!-- .col-md-6 start -->
            <div class="col-md-6">
                <div class="custom-heading style-1 triggerAnimation animated" data-animate='fadeInUp'>
                    <h1 style="color: #f7f7f7; text-shadow: 2px 2px #000;">Nosso Blog</h1>
                </div><!-- .custom-heading.style-1 end -->
            </div><!-- .col-md-6 end -->
        </div><!-- .row end -->
    </div><!-- .container end -->
</div><!-- .page-content end -->

<div class="page-content">
    <div class="container">
        <section class="post-content-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-9 col-sm-12">
                        <?php foreach ($category as $post): ?>
                        <div class="col-md-4 col-sm-12">
                            <div class="feature-box style-2">
                                <div class="feature-body" style="background: #fff; color: #333">
                                    <a href="/post/<?= $post->id?>"><div class="t">
                                   <img class="bg-front"  style=" width: 252px; height: 157px;
                                        object-fit: cover !important;" src="<?= "/files/Blog/photo/" . $post->photo ?>">
                                        <!--                            -moz-available firefox-->
                                    </div></a>
                                    <div class="post-name">
                                        <a href="/post/<?= $post->id?>">  <h4><?= $post->title ?></h4></a>
                                    </div>
                                    <div class="post-date" style="margin-bottom: 10px">
                                        <span style="font-style: italic; color: #0084ca"><?= $post->date ?>| <?= $post->signature ?></span>
                                    </div>
                                    <div class="post-body">
                                        <a href="/post/<?= $post->id?>">
                                        <?= strlen($post->description) >  90 ? substr($post->description, 0, 90) . "..." : $post->description ?>
                                        </a>
                                    </div>
                                    <a href="/post/<?= $post->id?>"><small style="color: #333 !important;">Continue Lendo</small></a>
                                    <hr>

                                </div><!-- .feature-body end -->
                            </div><!-- .feature-box-end -->
                        </div><!-- .col-md-6 end -->
                        <?php endforeach; ?>
                    </div>
                    <div class="col-lg-3  col-md-3 col-sm-12">
                        <h4>Categorias</h4><hr>
                        <div class="list-group" style="border-radius: 0px !important;  -webkit-box-shadow:none !important; box-shadow: none !important;">
                            <?php foreach ($cat as $post): ?>
                            <a class="list-group-item" href="/categoria/<?= $post->id ?>" style=" border: none !important;"> <small class="list-group-item-heading"><?= $post->title ?></small> </a>
                            <?php endforeach; ?>
                        </div>
                        <div class="right">
                            <h4>Recentes Postagens</h4><hr>
                            <?php foreach ($recente as $post): ?>
                            <div class="media"> <div class="media-left"> <a href="/post/<?= $post->id?>">
                                        <a href="/post/<?= $post->id?>"> <img src="<?= "/files/Blog/photo/" . $post->photo ?>" class="media-object" alt="64x64" style="width: 64px; height: 64px; object-fit: cover" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTY5MjIxZTM1NSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NjkyMjFlMzU1Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMi41IiB5PSIzNi44Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true"> </a> </div>
                                <div class="media-body"> <h4 class="media-heading"> <a style="color: #333" href="/post/<?= $post->id?>"><?= $post->title ?></a>
                                    </h4>
                                    <a href="/post/<?= $post->id?>"><?= strlen($post->description) >  50 ? substr($post->description, 0, 50) . "..." : $post->description ?></a>
                                </div>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <div class="paginator" style="justify-content: center; display: flex;">
                    <ul class="pagination">
                        <?php echo $this->Paginator->first('<< ' . __('Primeira')); ?>
                        <?php echo $this->Paginator->prev('< ' . __('Anterior')); ?>
                        <?php echo $this->Paginator->numbers(); ?>
                        <?php echo $this->Paginator->next(__('Próximo') . ' >'); ?>
                        <?php echo $this->Paginator->last(__('Última') . ' >>'); ?>
                    </ul>
                </div>


            </div> <!-- /container -->

        </section>
    </div>

</div><!-- .page-content end -->


