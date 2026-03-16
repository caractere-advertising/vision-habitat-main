<?php
// Layout ACF : block_video
<<<<<<< HEAD
// Champs : text_ev (wysiwyg), paragraph (texte), video (url)
=======
// Champs : text_ev (wysiwyg), paragraph (text), , video (video)

$text_ev = get_sub_field("text_ev");
$paragraph = get_sub_field("paragraph");
$video = get_seb_field("video");
>>>>>>> 640e6ee (fixes style 16-03)

$text_ev   = get_sub_field("text_ev");
$paragraph = get_sub_field("paragraph");
$video     = get_sub_field("video");
?>

<section class="section-video">

    <div class="video-top">

        <div class="video-top-left">
            <?php if ($text_ev) { ?>
            <div class="video-text"><?php echo $text_ev; ?></div>
            <hr class="video-line">
            <?php } ?>
        </div>

        <div class="video-top-right">
            <?php if ($paragraph) { ?>
            <p class="video-paragraph"><?php echo $paragraph; ?></p>
            <?php } ?>
        </div>

    </div>

    <?php if ($video) { ?>
    <div class="video-wrapper">
        <?php echo wp_oembed_get($video); ?>
    </div>
    <?php } ?>

</section>
