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
                <div class="video-text from-top"><?= $text_ev; ?></div>
                <hr class="video-line">
=======
            <div class="video-text"><?= $text_ev; ?></div>
            <hr class="video-line">
>>>>>>> 3b8360c (Renomage des fichiers.php + fichiers .scss pour une meilleure lisibilité)
            <?php } ?>
        </div>

        <div class="video-top-right">
<<<<<<< HEAD
            <?php if ($paragraph): ?><p class="video-paragraph from-top"><?= $paragraph; ?></p><?php endif;?>
=======
            <?php if ($paragraph) { ?>
            <p class="video-paragraph"><?= $paragraph; ?></p>
            <?php } ?>
>>>>>>> 3b8360c (Renomage des fichiers.php + fichiers .scss pour une meilleure lisibilité)
        </div>

    </div>

    <?php if ($video) { ?>
<<<<<<< HEAD
    <div class="video-wrapper container from-bottom">
=======
    <div class="video-wrapper container">
>>>>>>> 3b8360c (Renomage des fichiers.php + fichiers .scss pour une meilleure lisibilité)
        <?= wp_oembed_get($video); ?>
    </div>
    <?php } ?>
</section>