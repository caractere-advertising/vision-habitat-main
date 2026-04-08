<?php
// Layout ACF : block_video
// Champs : text_ev (wysiwyg), paragraph (texte), video (url)

$text_ev   = get_sub_field("text_ev");
$paragraph = get_sub_field("paragraph");
$video     = get_sub_field("video");
?>

<section class="section-video">
    <div class="video-top container">
        <div class="video-top-left">
            <?php if ($text_ev) { ?>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <div class="video-text from-top"><?= $text_ev; ?></div>
                <hr class="video-line">
=======
            <div class="video-text"><?= $text_ev; ?></div>
=======
            <div class="video-text from-top"><?= $text_ev; ?></div>
>>>>>>> c4fe539 (Ajout animation apparition sur chaque section + animate.js)
            <hr class="video-line">
>>>>>>> 3b8360c (Renomage des fichiers.php + fichiers .scss pour une meilleure lisibilité)
=======
                <div class="video-text from-top"><?= $text_ev; ?></div>
                <hr class="video-line">
>>>>>>> 8dc1db5 (corretion section)
            <?php } ?>
        </div>

        <div class="video-top-right">
<<<<<<< HEAD
<<<<<<< HEAD
            <?php if ($paragraph): ?><p class="video-paragraph from-top"><?= $paragraph; ?></p><?php endif;?>
=======
            <?php if ($paragraph) { ?>
            <p class="video-paragraph from-top"><?= $paragraph; ?></p>
            <?php } ?>
>>>>>>> 3b8360c (Renomage des fichiers.php + fichiers .scss pour une meilleure lisibilité)
=======
            <?php if ($paragraph): ?><p class="video-paragraph from-top"><?= $paragraph; ?></p><?php endif;?>
>>>>>>> 8dc1db5 (corretion section)
        </div>

    </div>

    <?php if ($video) { ?>
<<<<<<< HEAD
<<<<<<< HEAD
    <div class="video-wrapper container from-bottom">
=======
    <div class="video-wrapper container">
>>>>>>> 3b8360c (Renomage des fichiers.php + fichiers .scss pour une meilleure lisibilité)
=======
    <div class="video-wrapper container from-bottom">
>>>>>>> c4fe539 (Ajout animation apparition sur chaque section + animate.js)
        <?= wp_oembed_get($video); ?>
    </div>
    <?php } ?>
</section>