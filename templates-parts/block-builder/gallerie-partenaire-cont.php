<?php 

$partenaires = get_field('gallerie-partenaires','option');
$titre = get_field('titre','option');

?>

<div class="gallerie-partenaire swiper swiper-partenaire">
    <div><?= wp_kses_post( $titre ); ?></div>

    <div class="swiper-wrapper">
        <?php foreach ( $partenaires as $partenaire ) :
            $image = $partenaire['image'];
            $lien  = $partenaire['lien'];
        ?>
            <div class="partenaire swiper-slide">
                <a href="<?= esc_url( $lien['url'] ); ?>">
                    <?php if ( $image ) : ?>
                        <img class="image" src="<?= esc_url( $image['url'] ); ?>" loading="lazy" alt="<?= esc_attr( $image['alt'] ); ?>">
                    <?php endif; ?>
                </a>
            </div>
        <?php endforeach; ?>

        <div class="gallery-prev"></div>
        <div class="gallery-next"></div>
    </div>
</div>