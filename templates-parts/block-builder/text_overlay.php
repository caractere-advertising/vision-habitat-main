<?php
$title = get_sub_field('title');
$image = get_sub_field('image');
$paragraph = get_sub_field('paragraph');
$link = get_sub_field('link');

?>

<section class="section-text-overlay">
    <div class="container flex">
        <div class="title"><?= wp_kses_post( $title ); ?></div>

        <div class="container_overlay">
            <?php if ( $image ) : ?>
                <img src="<?= esc_url( $image['url'] ); ?>" loading="lazy" alt="<?= esc_attr( $image['alt'] ?? '' ); ?>">
            <?php endif; ?>
        </div>
    </div>

    <div class="container content_overlay">
        <div class="paragraph"><?= wp_kses_post( $paragraph ); ?></div>

        <?php if ( $link ) : ?>
            <a class="btn-cta" href="<?= esc_url( $link['url'] ); ?>">
                <?= esc_html( $link['title'] ); ?>
            </a>
        <?php endif; ?>
    </div>
</section>