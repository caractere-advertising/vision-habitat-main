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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e007f86 (Correction css + animation + section)
            <div class="block-txt">
                <?php if ($title): ?>
                    <div class="projects-title from-left"><?= $title; ?></div>
                <?php endif; ?>
<<<<<<< HEAD

                <?php if ($paragraph): ?>
                    <div class="projects-paragraph from-left"><?= $paragraph; ?></div>
                <?php endif; ?>
            </div>

            <?php if ($link) : ?>
                <a href="<?= $link['url']; ?>" class="btn-cta from-left">
=======
            <?php if ($title): ?>
                <div class="projects-title from-left"><?= $title; ?></div>
            <?php endif; ?>
=======
>>>>>>> e007f86 (Correction css + animation + section)

                <?php if ($paragraph): ?>
                    <div class="projects-paragraph from-left"><?= $paragraph; ?></div>
                <?php endif; ?>
            </div>

            <?php if ($link) : ?>
<<<<<<< HEAD
                <a href="<?= $link['url']; ?>" class="btn-cta">
>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
=======
                <a href="<?= $link['url']; ?>" class="btn-cta from-left">
>>>>>>> c4fe539 (Ajout animation apparition sur chaque section + animate.js)
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
<<<<<<< HEAD
<<<<<<< HEAD
                            <div class="slide-info from-bottom">
=======
                            <div class="slide-info">
<<<<<<< HEAD
>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
                                <span class="slide-location"><?= $location; ?></span>
                                <span class="slide-price"><?= $price; ?></span>
=======
                                <span class="slide-location from-bottom"><?= $location; ?></span>
                                <span class="slide-price from-bottom"><?= $price; ?></span>
>>>>>>> c4fe539 (Ajout animation apparition sur chaque section + animate.js)
=======
                            <div class="slide-info from-bottom">
                                <span class="slide-location"><?= $location; ?></span>
                                <span class="slide-price"><?= $price; ?></span>
>>>>>>> e007f86 (Correction css + animation + section)
                            </div>
                        </div>
                    <?php endforeach;?>
                </div>
            </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
=======
>>>>>>> e007f86 (Correction css + animation + section)
    </div>

    <div class="projects-controls container">
        <div class="projects-nav">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e007f86 (Correction css + animation + section)
            <button class="projects-prev">
                <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"></path>
                    </g>
                </svg>
            </button>
            <button class="projects-next">
                <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
                    </g>
                </svg>
            </button>
<<<<<<< HEAD
=======
            <button class="projects-prev">&#8249;</button>
            <button class="projects-next">&#8250;</button>
>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
=======
>>>>>>> e007f86 (Correction css + animation + section)
        </div>
        <div class="swiper-scrollbar-projects">
        </div>
        <span class="projects-number">01</span>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
</section>
=======

</section>

>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
=======
</section>
>>>>>>> e007f86 (Correction css + animation + section)
