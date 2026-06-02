<?php
// champs titre wisywyg, intro wysiwyf,cta lien

$titre = get_sub_field('titre');
$intro = get_sub_field('intro');
$cta = get_sub_field('cta');
?>

<section class="section-two-col">
    <div class="two-col-inner container flex">
        <div class="two-col-left col-50">
            <div class="two-col-title"><?= wp_kses_post( $titre ); ?></div>
        </div>
        <div class="two-col-right col-50">
            <div class="two-col-paragraph"><?= wp_kses_post( $intro ); ?></div>
            <?php if ( ! empty( $cta['url'] ) ) : ?>
                <a href="<?= esc_url( $cta['url'] ); ?>" class="btn-cta"><?= esc_html( $cta['title'] ); ?></a>
            <?php endif; ?>
        </div>
    </div>
</section>