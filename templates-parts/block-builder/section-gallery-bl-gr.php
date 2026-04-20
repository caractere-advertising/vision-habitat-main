<?php
$card = get_sub_field('card');
if (!$card) return;
$first = $card[0];
// Champs : slides (répéteur)
//    image (image), titre (texte),ss-titre(texte), paragraph (wysiwyg)

//modif car swipper sur la partie photo

?>

<div class="section-gallery-bl-gr">
    <div class="card">

        <div class="gallery-image">
            <div class="swiper swiper-photo">
                <div class="swiper-wrapper">
                    <?php foreach ($card as $c) : ?>
                        <div class="swiper-slide">
                            <img src="<?= esc_url($c['image']['url']); ?>" alt="<?= esc_attr($c['image']['alt']); ?>">
                        </div>
                    <?php endforeach; ?>
                </div>
                
                <div class="swiper-scroll-gallery-photo"></div>
            </div>
        </div>

        <div class="gallery-info">
            <div class="top">
                <p class="gallery-titre"><?= esc_html($first['titre']); ?></p>
                <div class="gallery-ssTitre"><?= $first['ss-titre']; ?></div>
            </div>
            <div class="gallery-paragraph"><?= $first['paragraph']; ?></div>
        </div>

    </div>
</div>