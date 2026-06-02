<?php
// Champs : categorie (texte), text_evidence (wysiwyg), details (wysiwyg), paragraph (wysiwyg), link (lien)
// j'ai enlevé détails

$cat           = get_sub_field('category');
$text_evidence = get_sub_field('text_evidence');
$paragraph     = get_sub_field('paragraph');
$link          = get_sub_field('link');

// Ajout gestion margin paragraphe
$margin = get_sub_field('margin');

// absint() pour garantir que les valeurs de marge sont des entiers positifs et non des valeurs CSS arbitraires
$top    = empty( $margin['top'] )    ? 'auto' : absint( $margin['top'] ) . 'px';
$bottom = empty( $margin['bottom'] ) ? 'auto' : absint( $margin['bottom'] ) . 'px';
$left   = empty( $margin['left'] )   ? 'auto' : absint( $margin['left'] ) . 'px';
$right  = empty( $margin['right'] )  ? 'auto' : absint( $margin['right'] ) . 'px';

$displayMargin = 'style="margin:' . $top . ' ' . $right . ' ' . $bottom . ' ' . $left . '"';
?>

<section class="section-two-col">
    <div class="two-col-inner container flex">
        <div class="two-col-left col-50">
            <?php if ( $cat ) : ?>
                <div class="section-label from-left"><span><?= esc_html( $cat ); ?></span></div>
            <?php endif;
            if ( $text_evidence ) : ?>
                <div class="two-col-title big_title from-left"><?= wp_kses_post( $text_evidence ); ?></div>
            <?php endif; ?>
        </div>

        <div class="two-col-right col-50">
            <?php if ( $paragraph ) : ?>
                <div class="two-col-paragraph from-right" <?= $displayMargin; ?>><?= wp_kses_post( $paragraph ); ?></div>
            <?php endif;

            if ( $link ) : ?>
                <a href="<?= esc_url( $link['url'] ); ?>" class="btn-cta"><?= esc_html( $link['title'] ); ?></a>
            <?php endif; ?>
        </div>
    </div>
</section>