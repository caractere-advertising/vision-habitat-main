<?php
/* Template pour les pages "type" REFERENCES */

if ( ! defined( 'ABSPATH' ) ) exit;

get_header();

$date     = get_field( 'date' ) ?? '2026';
$localite = get_field( 'localisation' ) ?? '';
$archi    = get_field( 'architecte' ) ?? '';

$galerie  = get_field( 'galerie' );

if ( ! $galerie || ! is_array( $galerie ) ) {
    get_footer();
    return;
}

$img_url   = [];
$img_title = [];

foreach ( $galerie as $i => $g ) {
    $img_url[ $i ]   = $g['url'];
    $img_title[ $i ] = $g['title'];
}

?>

<!-- Bloc référence -->

<section class="galerie-reference">
    <div class="swiper swiper-reference">
        <div class="swiper-wrapper">
            <?php foreach ( $galerie as $g ) : ?>
                <div class="swiper-slide">
                    <img src="<?= esc_url( $g['url'] ); ?>" loading="lazy" alt="<?= esc_attr( $g['title'] ); ?>"/>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="bloc-reference">
    <div class="container flex -full">
        <div class="col-40 col-g">
            <?php if ( ! empty( $img_url[0] ) ) : ?>
                <div class="block-img">
                    <img src="<?= esc_url( $img_url[0] ); ?>" loading="lazy" alt="<?= esc_attr( $img_title[0] ?? '' ); ?>">
                </div>
            <?php endif; ?>
        </div>

        <div class="col-d col-60">
            <div class="section-informations">
                <span class="date"><?= esc_html( $date ); ?></span>
                <p><strong>Localité</strong><br><?= esc_html( $localite ); ?></p>
                <p><strong>Architecte</strong><br><?= esc_html( $archi ); ?></p>
            </div>
            <?php if ( ! empty( $img_url[1] ) ) : ?>
                <div class="block-img">
                    <img src="<?= esc_url( $img_url[1] ); ?>" loading="lazy" alt="<?= esc_attr( $img_title[1] ?? '' ); ?>"/>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>
<?php

get_template_part('templates-parts/builder');
get_footer();

?>