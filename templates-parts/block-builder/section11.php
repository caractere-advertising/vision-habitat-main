<?php
// Layout ACF : block_video
// Champs : text_ev (wysiwyg), paragraph (text), , video (video)

$text_ev = get_sub_field("text_ev");
$paragraph = get_sub_field("paragraph");
$video = get_seb_field("video");

?>

<section>
    <div class="container">
        <div><?php echo $text_ev ?></div>
        <div><?php echo $paragraph ?></div>
        </div>

        <div class="video_container">
             <?php echo wp_oembed_get($video); ?>

        </div>
</section>