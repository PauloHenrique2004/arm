<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<!--<main>-->

    <!-- contact area start -->
    <div class="contact-area pt-96 pt-sm-48 pb-100 pb-md-82 pb-sm-14">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="contact-message">
                        <h5>ENTRE EM CONTATO</h5>
                        <?php echo $this->Form->create()?>
                            <div class="row" style="margin-top: 20px">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <input name="name" placeholder="Nome *" type="text" required>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <input name="tel" placeholder="Telefone *" type="text" required  id="phone">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <input name="email" placeholder="Email *" type="text" required>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <input name="subject" placeholder="Assunto *" type="text">
                                </div>
                                <div class="col-12">
                                    <div class="contact2-textarea text-center">
                                        <textarea placeholder="Mensagem *" name="message" class="form-control2" required=""></textarea>
                                    </div>
                                    <div class="contact-btn">
                                        <button class="btn btn__bg" type="submit" onclick="enviar()">Enviar</button>
                                    </div>
                                </div>
                            </div>
                        <?php echo $this->Form->end(); ?>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contact-info mt-md-94 mt-sm-48">
                        <h5>INFORMAÇÕES PARA CONTATO</h5>
                        <ul style="margin-top: 20px">
                            <li><i class="fa fa-envelope-o"></i> neto13br@gmail.com</li>
                            <li><i class="fa fa-phone"></i><a style="color: #666666" href="tel://">(79) 99841-5635</a></li>
                            <li><i class="fa fa-map-marker"></i>Av. Pedro Paes Azevedo - 194 Sala 02 / Aracaju - Sergipe</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- contact area end -->
</main>

<?php $this->start('script-footer'); ?>
<script>
    $('#phone').mask('(00) 00000-0000')

</script>

<script>

    function enviar() {
        swal({
            title: "Sucesso!",
            text: "Mensagem enviada com sucesso!",
            icon: "success",
            button: "OK"
        });
    }
</script>

<?php  $this->end(); ?>


