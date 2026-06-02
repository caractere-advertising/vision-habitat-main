<?php 

if (is_home()) {
    $title = get_the_title(get_option('page_for_posts'));
} else {
    $title = get_the_title() ?? '';
}

$colorImage = get_sub_field('couleur_ou_image');
if ( $colorImage === 'couleur' ) {
    // Valeur CSS couleur : on autorise uniquement des valeurs hex/rgb/named
    $raw_bg = get_sub_field( 'arriere-plan' );
    $bg     = sanitize_hex_color( $raw_bg ) ?: esc_attr( $raw_bg );
} else {
    $raw_url = get_sub_field( 'background' );
    $bg      = "url('" . esc_url( $raw_url ) . "')";
}

if ( $bg === 'rgb(255, 255, 255)' || $bg === '#ffffff' ) {
    $font_style = 'color:#05233c !important;';
} else {
    $font_style = '';
}

// absint garantit que la hauteur est un entier positif
$height = absint( get_sub_field( 'hauteur' ) ) ?: 80;

$style   = 'style="background:' . esc_attr( $bg ) . ';height:' . $height . 'vh;"';
$styleH1 = $font_style ? 'style="' . esc_attr( $font_style ) . '"' : '';

$cta = get_sub_field( 'cta' ) ?? [ 'url' => '#', 'title' => 'Lorem' ];

?>

<div class="section-service-header" <?= $style;?>>
    <div class="container flex">
        <div class="col colg">
            <h1 class="from-left" <?= $styleH1;?>><?= esc_html($title);?></h1>
        </div>
        <div class="col cold">
            <div class="block-cta from-right">
                <?php if ( $cta ) : ?>
                    <a href="<?= esc_url( $cta['url'] ); ?>" class="btn-cta"><?= esc_html( $cta['title'] ); ?></a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>