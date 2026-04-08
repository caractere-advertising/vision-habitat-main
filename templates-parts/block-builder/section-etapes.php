<?php 
$surtitre = get_sub_field('surtitre');
$titre    = get_sub_field('titre');
$slides   = get_sub_field('slides-step');
?>

<section class="section-step">
    <div class="container">
        <div class="content-title">
            <?php if ($surtitre): ?>
                <span class="surtitre"><?= esc_html($surtitre); ?></span>
            <?php endif; ?>

            <?php if ($titre): ?>
                <div class="main-title"><?= $titre; ?></div>
            <?php endif; ?>
        </div>

        <div class="slider-layout">
            <div class="swiper swiper-etapes">
                <div class="swiper-wrapper">
                    <?php if ($slides): $i = 01 ; ?>
                        <?php foreach ($slides as $s): ?>
                            <div class="swiper-slide">
                                <div class="slide-inner">
                                    <div class="colg">
                                        <div class="block-img">
                                            <?php if (!empty($s['image'])): ?>
                                                <img src="<?= esc_url($s['image']['url']); ?>" 
                                                     alt="<?= esc_attr($s['image']['alt'] ?: $s['image']['title']); ?>">
                                            <?php endif; ?>
                                        </div>
                                    </div>

                                    <div class="cold">
                                        <?php if (!empty($s['titre'])): ?>
                                            <div class="slide-title from-right"><?= str_pad($i, 2, '0', STR_PAD_LEFT) . '. ' . $s['titre']; ?></div>
                                        <?php endif; ?>
                                        <?php if (!empty($s['texte'])): ?>
                                            <div class="slide-text from-right"><?= $s['texte']; ?></div>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                        <?php $i++; endforeach;
                     endif; ?>
                </div>
            </div>

            <div class="block-navigation">
                <div class="swiper-step-prev">&#8249;</div>
                <div class="swiper-step-next">&#8250;</div>
            </div>
        </div>

        <div class="swiper-step-scrollbar"></div>
    </div>
</section>