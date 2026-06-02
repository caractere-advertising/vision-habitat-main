
<?php $partenaires = get_field('gallerie-partenaires','option'); ?>

<div class="gallerie-partenaire swiper swiper-partenaire">
  <div class="swiper-wrapper">
    <?php foreach ( $partenaires as $partenaire ) :
      $image = $partenaire['image'];
      $lien  = $partenaire['lien'];
    ?>
      <div class="partenaire swiper-slide">
        <a href="<?php echo esc_url( $lien['url'] ); ?>">
          <?php if ( $image ) : ?>
            <img class="image" src="<?php echo esc_url( $image['url'] ); ?>" loading="lazy" alt="<?php echo esc_attr( $image['alt'] ); ?>">
          <?php endif; ?>
        </a>
      </div>
    <?php endforeach; ?>

    <div class="gallery-prev"></div>
    <div class="gallery-next"> </div>

  </div>
</div>