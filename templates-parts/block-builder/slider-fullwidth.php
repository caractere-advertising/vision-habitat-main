<?php
// Layout ACF : slider-fullwidth
// Champs : slide (répéteur)
//   └── image (image), titre (wysiwyg), cta (lien)
?>

<section class="slider-fullwidth">
    <div class="swiper swiper-fullwidth">
        <div class="swiper-wrapper">
            <?php

                $slide  = get_sub_field('slide');
                $length = $slide ? count($slide) : 0;

                foreach ($slide as $s) :
                    $img = $s['image'];
            ?>
                <div class="swiper-slide">
                    <div class="background">
                        <img src="<?= $img['url']; ?>" alt="<?= $img['alt']; ?>">
                    </div>
                    <div class="content">
                        <div class="content-titre">
                            <?= $s['titre']; ?>
                        </div>
                        <a href="<?= $s['cta']['url']; ?>" class="btn-cta">
                            <?= $s['cta']['title']; ?>
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="block-pagination">
            <div class="block-scrollbar">
                <span class="number-slide number-current">01</span>
                <div class="swiper-scrollbar"></div>
                <span class="number-slide number-total">
                    <?= $length < 10 ? '0' . $length : $length; ?>
                </span>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</section>
