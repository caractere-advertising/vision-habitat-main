
<?php
// Layout ACF : à définir dans builder.php
// Champs : slides (répéteur)
//    image (image), titre (texte), description (texte)

$slides = get_sub_field('slides');
?>

<section class="section-gallery">
    <div class="swiper swiper-gallery">
        <div class="swiper-wrapper">
            <?php foreach ($slides as $s) :
                $image       = $s['image'];
                $titre       = $s['titre'];
                $description = $s['description'];
            ?>
            <div class="swiper-slide">
                <div class="gallery-slide-inner">
                    <div class="gallery-image">
                        <?php if($image) : ?>
                            <img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>">
                        <?php endif; ?>
                    </div>
                    <div class="gallery-info">
                        <?php if($titre): ?><p class="gallery-titre"><?= $titre; ?></p><?php endif;
                        if ($description): ?><p class="gallery-description"><?= $description; ?></p><?php endif; ?>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <div class="gallery-pagination">
            <div class="swiper-pagination-gallery"></div>
        </div>
    </div>
    <div class="gallery-nav">
        <button class="gallery-next">&#8250;</button>
        <button class="gallery-prev">&#8249;</button>
    </div>
    <div class="container content-scrollbar">
        <div class="swiper-scrollbar"></div>
    </div>
</section>