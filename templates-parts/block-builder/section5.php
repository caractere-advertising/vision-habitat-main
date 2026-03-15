<<<<<<< HEAD
<?php
// Layout ACF : à définir dans builder.php
// Champs : slides (répéteur)
//    image (image), titre (texte), description (texte)

$slides = get_sub_field('slides');
?>

<?php if ($slides) : ?>
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
                                <?php if ($image) : ?>
                                    <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                                <?php endif; ?>
                            </div>

                            <div class="gallery-info">
                                <?php if ($titre) : ?>
                                    <p class="gallery-titre"><?php echo $titre; ?></p>
                                <?php endif; ?>
                                <?php if ($description) : ?>
                                    <p class="gallery-description"><?php echo $description; ?></p>
                                <?php endif; ?>
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

    </section>
<?php endif; ?>
=======
// section slider avec plein de carrés gris

<section>
    <div class="container">
        <div class="img_container"></div>
        <div class="content_container"></div>
    
        <div class="cta_btn">
            <div class="right_btn"></div>
            <div class="right_btn"></div>

        </div>
    </div>
</section>
>>>>>>> b7f71c0a3d19fa39b86f8a027121a014c2283ad6
