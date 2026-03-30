<?php

$image    = get_sub_field('image_hero');
$titre    = get_sub_field('titre_hero');
$cta_text = get_sub_field('cta_text');
$cta_btn  = get_sub_field('cta_btn');

?>

<?php if ($image && isset($image['url'])) : ?>
  <section class="hero">
    <div class="hero-bg" style="background-image: url('<?= esc_url($image['url']); ?>')"></div>
    <div class="hero-content">
      <?= wp_kses_post($titre);
      
      if ($cta_btn) : ?>
        <a href="<?= esc_url($cta_btn['url']); ?>" class="btn">
          <?= esc_html($cta_text); ?>
        </a>
      <?php endif; ?>
    </div>
  </section>
<?php else : ?>
  <p>Image non définie pour le héros</p>
<?php endif; ?>