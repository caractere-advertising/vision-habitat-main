<?php
// Layout ACF : slider-fullwidth

$slide  = get_sub_field('slide');
$length = $slide ? count($slide) : 0;
?>

<section class="slider-fullwidth">
    <div class="swiper swiper-fullwidth">
        <div class="swiper-wrapper">
            <?php if ($slide):
                foreach ($slide as $i => $s) :
                    $img = $s['image'] ?? null;
                    $cta = $s['cta'] ?? null;
                ?>
                
                    <div class="swiper-slide">
                        <div class="background">
                            <?php if($img): ?>
                                <?php // 1re slide = image LCP : chargée en priorité, les suivantes en lazy ?>
                                <img src="<?= esc_url($img['url']); ?>" alt="<?= esc_attr($img['alt']); ?>"
                                    <?= $i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'; ?> decoding="async">
                            <?php endif; ?>
                        </div>

                        <div class="content">
                            <?php if(!empty($s['titre'])) : ?>
                                <div class="content-titre" data-swiper-parallax="-200">
                                    <?= wp_kses_post($s['titre']); ?>
                                </div>
                            <?php endif;
                            if($cta): ?>
                                <a href="<?= esc_url($cta['url']); ?>" class="btn-cta" data-swiper-parallax="-500">
                                    <?= esc_html($cta['title']); ?>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endforeach;
            endif; ?>
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