<<<<<<< HEAD
<?php

// Layout ACF : section_img_ev
// Champs : title (wysiwyg), paragraph (texte), link (lien),
//          image (image), location (texte), price (texte)

$title     = get_sub_field('title');
$paragraph = get_sub_field('paragraph');
$link      = get_sub_field('link');
$img       = get_sub_field('image');
$location  = get_sub_field('location');
$price     = get_sub_field('price');
?>

<section class="section-projects">

    <div class="projects-inner">

        <div class="projects-left">
            <?php if ($title) : ?>
            <div class="projects-title">
                <?php echo $title; ?>
            </div>
            <?php endif; ?>

            <?php if ($paragraph) : ?>
            <p class="projects-paragraph"><?php echo $paragraph; ?></p>
            <?php endif; ?>

            <?php if ($link) : ?>
            <a href="<?php echo $link['url']; ?>" class="btn-cta">
                <?php echo $link['title']; ?>
            </a>
            <?php endif; ?>
        </div>

        <div class="projects-right">
            <div class="swiper swiper-projects">
                <div class="swiper-wrapper">
                    <?php if ($img) : ?>
                    <div class="swiper-slide">
                        <img src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>">
                        <div class="slide-info">
                            <?php if ($location) : ?>
                            <span class="slide-location"><?php echo $location; ?></span>
                            <?php endif; ?>
                            <?php if ($price) : ?>
                            <span class="slide-price"><?php echo $price; ?></span>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>

    </div>

    <div class="projects-controls">
        <div class="projects-nav">
            <button class="projects-prev">&#8249;</button>
            <button class="projects-next">&#8250;</button>
        </div>
        <div class="swiper-scrollbar-projects"></div>
        <span class="projects-number">01</span>
    </div>

</section>