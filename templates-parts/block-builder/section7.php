<?php

// Layout ACF : section_img_ev
// Champs : title (wysiwyg), paragraph (texte), link (lien),
//          image (image), location (texte), price (texte)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ATTENTION : Ici il s'agit d'un slider, du coup on doit pouvoir encoder plusieurs image / prix / location. //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
                <div class="projects-title"><?= $title; ?></div>
            <?php endif; ?>

            <?php if ($paragraph): ?>
                <div class="projects-paragraph"><?= $paragraph; ?></div>
            <?php endif; ?>

            <?php if ($link) : ?>
                <a href="<?= $link['url']; ?>" class="btn-cta">
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
                                <span class="slide-location"><?= $location; ?></span>
                                <span class="slide-price"><?= $price; ?></span>
                            </div>
                        </div>
                    <?php endforeach;?>
                </div>
            </div>
        </div>

    </div>

    <div class="projects-controls container">
        <div class="projects-nav">
            <button class="projects-prev">
                <svg width="30px" height="30px" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -6679.000000)" fill="#e2e2e2">
                                <g id="icons" transform="translate(56.000000, 160.000000)"> 
                                    <path d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" id="arrow_left-[#e2e2e2334]"></path> 
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>    
            </button>
            <button class="projects-next">
                <svg width="30px" height="30px" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="e2e2e2" stroke="e2e2e2">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="#e2e2e2">
                                <g id="icons" transform="translate(56.000000, 160.000000)"> 
                                    <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#333]"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
        <div class="swiper-scrollbar-projects"></div>
        <span class="projects-number">01</span>
    </div>

</section>

