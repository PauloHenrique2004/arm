<footer class="main-footer">
  <?php if (isset($layout) && $layout == 'top'): ?>
  <div class="container">
  <?php endif; ?>
    <div class="pull-right hidden-xs">
      <b>Version</b> 2.4.5
    </div>
    <strong>&copy; ARM Consultoria <?= date('Y') ?>. </strong> Todos os direitos reservados.
  <?php if (isset($layout) && $layout == 'top'): ?>
  </div>
  <?php endif; ?>
</footer>
