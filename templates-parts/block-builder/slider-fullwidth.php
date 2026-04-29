<?php
// Layout ACF : slider-fullwidth
// Champs : slide (répéteur)
//   └── image (image), titre (wysiwyg), cta (lien)

$slide  = get_sub_field('slide');
$length = $slide ? count($slide) : 0;
?>

<section class="slider-fullwidth js-slider-skeleton is-loading">

    <div class="slider-skeleton" aria-hidden="true">
        <div class="slider-skeleton__background"></div>

        <div class="slider-skeleton__content">
            <div class="skeleton-line skeleton-title-large"></div>
            <div class="skeleton-line skeleton-title-medium"></div>
            <div class="skeleton-line skeleton-cta"></div>
        </div>

        <div class="slider-skeleton__pagination">
            <div class="skeleton-number"></div>
            <div class="skeleton-scrollbar"></div>
            <div class="skeleton-number"></div>
            <div class="skeleton-bullets">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>

    <div class="swiper swiper-fullwidth">
        <div class="swiper-wrapper">
            <?php if ($slide) : ?>
                <?php foreach ($slide as $s) :
                    $img = $s['image'] ?? null;
                    $cta = $s['cta'] ?? null;
                ?>
                    <div class="swiper-slide">
                        <div class="background">
                            <?php if ($img) : ?>
                                <img src="<?= esc_url($img['url']); ?>" alt="<?= esc_attr($img['alt']); ?>">
                            <?php endif; ?>
                        </div>

                        <div class="content">
                            <?php if (!empty($s['titre'])) : ?>
                                <div class="content-titre" data-swiper-parallax="-200">
                                    <?= wp_kses_post($s['titre']); ?>
                                </div>
                            <?php endif; ?>

                            <?php if ($cta) : ?>
                                <a href="<?= esc_url($cta['url']); ?>" class="btn-cta" data-swiper-parallax="-500">
                                    <?= esc_html($cta['title']); ?>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>

        <div class="block-pagination container flex">
            <div class="block-scrollbar col-50">
                <span class="number-slide number-current">01</span>
                <div class="swiper-scrollbar"></div>
                <span class="number-slide number-total">
                    <?= $length < 10 ? '0' . $length : $length; ?>
                </span>
            </div>
            <div class="col-50">
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</section>