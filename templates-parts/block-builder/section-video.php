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
                <div class="video-text from-top"><?= $text_ev; ?></div>
                <hr class="video-line">
            <?php } ?>
        </div>

        <div class="video-top-right">
            <?php if ($paragraph): ?><p class="video-paragraph from-top"><?= $paragraph; ?></p><?php endif;?>
        </div>

    </div>

    <?php if ($video) { ?>
    <div class="video-wrapper container from-bottom">
        <?= wp_oembed_get($video); ?>
    </div>
    <?php } ?>
</section>