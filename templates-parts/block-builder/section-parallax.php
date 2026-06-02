<?php
$img    = get_sub_field( 'image' );
$height = absint( get_sub_field( 'hauteur' ) ) ?: 80;
$style  = 'style="height:' . $height . 'vh;"';
?>

<section class="section-image-parallax from-bottom" <?= $style; ?>>
    <?php if ( $img ) : ?>
        <img src="<?= esc_url( $img['url'] ); ?>" loading="lazy" alt="<?= esc_attr( $img['title'] ?? '' ); ?>"/>
    <?php endif; ?>
</section>