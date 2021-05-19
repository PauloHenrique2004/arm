<!-- ==================== Start Footer ==================== -->

<footer class="footer-half sub-bg section-padding pb-0">
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <div class="cont">
                    <div class="logo">
                        <a href="#0">
                            <img style="width: auto" src="/images/logo.png" alt="">
                        </a>
                    </div>
                    <div class="con-info custom-font">
                        <ul>
                            <li><span>Email : </span> investidorarm@gmail.com</li>
                            <li><span>Endereço : </span> A32 , Ave 15th Street, Door 211, San Franciso, USA 32490.</li>
                            <li><span>Telefone : </span> (82)&nbsp 9 8158-0111</li>
                        </ul>
                    </div>
                    <div class="social-icon">
                        <h6 class="custom-font stit simple-btn">Siga-nos</h6>
                        <div class="social">
                            <a href="#0" class="icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#0" class="icon">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 offset-lg-2">
                <div class="subscribe mb-50">
                    <h6 class="custom-font stit simple-btn">Páginas</h6>

                    <ul>
                        <li><a style="" href="/">Início</a></li>
                        <li><a style="" href="#">Quem somos</a></li>
                        <li><a style="" href="#">Serviços</a></li>
                        <li><a style="" href="#">Depoimentos</a></li>
                        <li><a style="" href="#">Blog</a></li>
                        <li><a style="" href="#">Contato</a></li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="copyrights text-center">
            <p>© <?= date('Y') ?> ARM Consultoria. Todos os Direitos Reservados. <i class="fa fa-heart text-danger heart"></i> <a href="#0">Feito Por WETECH</a>.</p>
        </div>
    </div>
</footer>

<!-- ==================== End Footer ==================== -->

<style>
    @import url('https://fonts.googleapis.com/css?family=Arima+Madurai&display=swap');
    .heart{

        animation: beat 2s ease-out infinite !important;
    }
</style>




<!-- jQuery -->
<script src="/js/site/jquery-3.0.0.min.js"></script>
<script src="/js/site/jquery-migrate-3.0.0.min.js"></script>

<!-- plugins -->
<script src="/js/site//plugins.js"></script>

<!-- custom scripts -->
<script src="/js/site//scripts.js"></script>
<?= $this->fetch('scriptBottom') ?>


</body>

</html>
