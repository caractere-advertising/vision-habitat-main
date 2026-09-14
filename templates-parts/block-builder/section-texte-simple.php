<?php

$titre = get_sub_field('titre');
$intro = get_sub_field('texte');
$cta = get_sub_field('cta');
?>

<section class="section-texte-simple">
    <div class="container">
        <div class="big_title"><?= wp_kses_post( $titre ); ?></div>
        <div class="paragraph"><?= wp_kses_post( $intro ); ?></div>

        <?php if ( ! empty( $cta['url'] ) ) : ?>
            <a href="<?= esc_url( $cta['url'] ); ?>" class="btn-cta"><?= esc_html( $cta['title'] ); ?></a>
        <?php endif; ?>
    </div>
</section>