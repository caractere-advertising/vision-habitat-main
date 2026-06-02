<?php 

$titre = get_sub_field('titre');
$intro = get_sub_field('intro');
$small_titre = get_sub_field('Small-titre');
$cta   = get_sub_field('cta');
$img   = get_sub_field('image');

?>

<section class="section-txt-g-img-d">
    <div class="container container-bg"></div>
    <div class="container flex">
        <div class="colg col-50">
            <?= wp_kses_post( $small_titre ); ?>
            <?= wp_kses_post( $titre ); ?>
            <div class="intro"><?= wp_kses_post( $intro ); ?></div>

            <?php if ( $cta ) : ?>
                <a class="btn-cta" href="<?= esc_url( $cta['url'] ); ?>"><?= esc_html( $cta['title'] ); ?></a>
            <?php endif; ?>
        </div>
        <div class="cold col-50">
            <?php if ( $img ) : ?>
                <div class="block-img">
                    <img src="<?= esc_url( $img['url'] ); ?>" loading="lazy" alt="<?= esc_attr( $img['title'] ?? '' ); ?>"/>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>