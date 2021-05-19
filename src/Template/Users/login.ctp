<?php $this->layout = 'AdminLTE.login'; ?>

<!-- /.box-body -->
<div class="llll" style="display: flex; justify-content: center">
 <img src="/images/logo/logo.png" style="max-width: 230px; ">
</div>

    <?php echo $this->Form->create(); ?>
    <div class="box-body">
        <?php
        echo $this->Form->control('username');
        echo $this->Form->control('password');
        ?>
        <div style="margin: 0 auto;display: block; text-align: center">
        <?php echo $this->Form->button(__('Submit')); ?>
        </div>
        <?php echo $this->Form->end(); ?>

    </div>

<style>
    .login-box-body, .register-box-body {
        border: 0.1px solid #658d1c;
    }
</style>
