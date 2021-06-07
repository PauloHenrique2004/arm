<!-- ==================== Start Navbar ==================== -->

<nav class="navbar navbar-expand-lg">
    <div class="container">

        <!-- Logo -->
        <a class="logo" href="/">
            <img class="logo-topo" src="/images/logo.png" alt="logo" style="">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"><i class="fas fa-bars"></i></span>
        </button>

        <!-- navbar links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Início</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/sobre-nos/5">Quem somos</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/servico">Serviços</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/#depoimentos">Depoimentos</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/posts">Blog</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/contato">Contato</a>
                </li>
            </ul>
<!--            <div class="search">-->
<!--                <span class="icon pe-7s-search cursor-pointer"></span>-->
<!--                <div class="search-form text-center custom-font">-->
<!--                    <form>-->
<!--                        <input type="text" name="search" placeholder="Search">-->
<!--                    </form>-->
<!--                    <span class="close pe-7s-close cursor-pointer"></span>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
</nav>
<style>

    .logo-topo{
        width: 100px;
        margin-top: 20px;
        margin-bottom: 15px;
    }


    @media screen and (max-width: 321px){
        .logo-topo {
            width: 75px !important;
        }
    }

    .logo-small{
        width: 50px;
    }

</style>


<?php $this->start('scriptBottom'); ?>
<script>
    $(document).on("scroll", function () {
        if($(document).scrollTop() > 100){
            $("nav-scroll").removeClass("logo-topo").addClass("logo-small");
        }else {
            $("logo").removeClass("logo-small").addClass("logo-topo")
        }
    })
</script>
<?php $this->end() ?>

<!-- ==================== End Navbar ==================== -->
