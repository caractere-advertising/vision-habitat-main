<?php
// Layout ACF : block_discover
// Champs : image (image), title (wysiwyg),  paragraph (paragraph),link (lien)
$image     = get_sub_field("image");
$title     = get_sub_field("title");
$paragraph = get_sub_field("paragraph");
$link      = get_sub_field("link");
?>

<section class="section-discover container">
    <div class="discover-left" <?php if ($image){ echo 'style="background-image:url('. $image['url'].')"'; } ?>>
    </div>

    <div class="discover-right big_title">
        <?php if ($title) { ?>
            <div class="discover-title"><?= $title; ?></div>
        <?php } ?>
        <?php if ($paragraph) { ?>
            <div class="discover-paragraph"><?= $paragraph; ?></div>
        <?php } ?>
        <?php if ($link) { ?>
            <a href="<?= $link['url']; ?>" class="discover-btn">
                <?= $link['title']; ?> <span>›</span>
            </a>
        <?php } ?>
    </div>
</section>
