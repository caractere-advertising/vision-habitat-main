
<?php
// Layout ACF : à définir dans builder.php
// Champs : slides (répéteur)
//    image (image), titre (texte), description (texte)

$slides = get_sub_field('slides');
?>

<<<<<<< HEAD
<<<<<<< HEAD
<section class="section-gallery from-bottom">
=======
<section class="section-gallery">
>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
=======
<section class="section-gallery from-bottom">
>>>>>>> c4fe539 (Ajout animation apparition sur chaque section + animate.js)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e007f86 (Correction css + animation + section)
        <button class="gallery-next">
            <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
                </g>
            </svg>
        </button>
        
        <button class="gallery-prev">
            <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"></path>
                </g>
            </svg>
        </button>
<<<<<<< HEAD
    </div>
    <div class="container content-scrollbar">
        <div class="swiper-scrollbar-galerie-slider"></div>
=======
        <button class="gallery-next">&#8250;</button>
        <button class="gallery-prev">&#8249;</button>
=======
>>>>>>> e007f86 (Correction css + animation + section)
    </div>
    <div class="container content-scrollbar">
        <div class="swiper-scrollbar"></div>
>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
    </div>
</section>