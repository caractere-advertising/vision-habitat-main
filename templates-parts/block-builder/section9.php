<?php
<<<<<<< HEAD
// Layout ACF : block_discover
// Champs : image (image), title (wysiwyg), paragraph (paragraph), link (lien)
$image     = get_sub_field("image");
$title     = get_sub_field("title");
=======

// Layout ACF : block_discover
// Champs : image (image), title (wysiwyg), , paragraph (paragraph),link (lien)
$image = get_sub_field("image");
$title = get_sub_field("title");
>>>>>>> 640e6ee (fixes style 16-03)
$paragraph = get_sub_field("paragraph");
$link      = get_sub_field("link");
?>

<section class="section-discover">

    <div class="discover-left" <?php if ($image) { echo 'style="background-image: url(' . $image['url'] . ')"'; } ?>>
    </div>

    <div class="discover-right">

        <?php if ($title) { ?>
        <div class="discover-title"><?php echo $title; ?></div>
        <?php } ?>

        <?php if ($paragraph) { ?>
        <p class="discover-paragraph"><?php echo $paragraph; ?></p>
        <?php } ?>

        <?php if ($link) { ?>
        <a href="<?php echo $link['url']; ?>" class="discover-btn">
            <?php echo $link['title']; ?> <span>›</span>
        </a>
        <?php } ?>

    </div>

</section>
