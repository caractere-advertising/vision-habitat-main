<?php
$title     = get_sub_field('title');
$paragraph = get_sub_field('paragraph');
$link      = get_sub_field('link');
// $img       = get_sub_field('image');
// $location  = get_sub_field('location');
// $price     = get_sub_field('price');

/* Boucle projets */

$projets   = get_sub_field('projets'); 

?>

<section class="section-projects">
    <div class="projects-inner">

        <div class="projects-left">
            <?php if ($title): ?>
                <div class="projects-title from-left"><?= $title; ?></div>
            <?php endif; ?>

            <?php if ($paragraph): ?>
                <div class="projects-paragraph from-left"><?= $paragraph; ?></div>
            <?php endif; ?>

            <?php if ($link) : ?>
                <a href="<?= $link['url']; ?>" class="btn-cta from-left">
                    <?= $link['title']; ?>
                </a>
            <?php endif; ?>
        </div>

        <div class="projects-right">
            <div class="swiper swiper-projects">
                <div class="swiper-wrapper">
                    <?php foreach($projets as $pr):
                        $img       = $pr['image'];
                        $location  = $pr['location'] ?? '';
                        $price     = $pr['price'] ?? '';
                        
                        ?>
                        <div class="swiper-slide">
                            <img src="<?= $img['url']; ?>" alt="<?= $img['alt']; ?>">
                            <div class="slide-info">
                                <span class="slide-location from-bottom"><?= $location; ?></span>
                                <span class="slide-price from-bottom"><?= $price; ?></span>
                            </div>
                        </div>
                    <?php endforeach;?>
                </div>
            </div>
        </div>

    </div>

    <div class="projects-controls container">
        <div class="projects-nav">
            <button class="projects-prev">&#8249;</button>
            <button class="projects-next">&#8250;</button>
        </div>
        <div class="swiper-scrollbar-projects">
        </div>
        <span class="projects-number">01</span>
    </div>

</section>

