<?php 
$slides = get_sub_field('slides-sur-mesure');
$titre  = get_sub_field('titre');
$texte  = get_sub_field('texte');

?>

<section class="section-partenaire-sur-mesure">
    <div class="container -large flex">
        <div class="colg col-50">
            <div class="swiper swiper-partenaire-sur-mesure">
                <div class="swiper-wrapper">
                    <?php if ( $slides ) :
                        foreach ( $slides as $s ) : ?>
                            <div class="swiper-slide block-img">
                                <img src="<?= esc_url( $s['image']['url'] ); ?>" loading="lazy" alt="<?= esc_attr( $s['image']['title'] ?? '' ); ?>"/>
                            </div>
                        <?php endforeach;
                    endif; ?>
                </div>
                <div class="swiper-pagination-sur-mesure"></div>
            </div>
        </div>

        <div class="cold col-50">
            <span class="block-title from-right"><?= wp_kses_post( $titre ?: '' ); ?></span>
            <span class="block-texte from-right"><?= wp_kses_post( $texte ?: '' ); ?></span>
        </div>
    </div>
</section>