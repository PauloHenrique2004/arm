<!-- ==================== Start Footer ==================== -->

<footer class="footer-half sub-bg section-padding pb-0">
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <div class="cont">
                    <div class="logo">
                        <a href="/">
                            <img style="width: auto; max-height: 140px" src="/images/logo.png" alt="">
                        </a>
                    </div>
                    <div class="con-info custom-font">
                        <ul>
                            <li><span>Email : </span> contato@armconsultorias.com</li>
                            <li><span>Endereço : </span> Rua Eng. Mario de Gusmão no18, Shopping Lions, 1º Andar, Sala 20
                                </br>Ponta Verde Maceió - AL CEP 57035-000</li>
                            <li><span>Telefone : </span> (82)&nbsp 8141-3935</li>
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
                        <li><a style="" href="/sobre-nos/5">Quem somos</a></li>
                        <li><a style="" href="/servico">Serviços</a></li>
                        <li><a style="" href="/#depoimentos">Depoimentos</a></li>
                        <li><a style="" href="/posts">Blog</a></li>
                        <li><a style="" href="/contato">Contato</a></li>
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



<a href="https://api.whatsapp.com/send?phone=558281413935&text="
   target="_blank"
   style="position:fixed;bottom:20px;left:30px; z-index: 9999">
    <svg enable-background="new 0 0 512 512" width="50" height="50" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M256.064,0h-0.128l0,0C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104  l98.4-31.456C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z" fill="#4CAF50"/><path d="m405.02 361.5c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.62-127.46-112.58-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016 0.16 8.576 0.288 7.52 0.32 11.296 0.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744s-7.36 7.68-11.136 12.352c-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z" fill="#FAFAFA"/></svg>
</a>


</body>

</html>
