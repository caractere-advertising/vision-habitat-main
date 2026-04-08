<?php
$title = get_sub_field('title');
$image = get_sub_field('image');
$paragraph = get_sub_field('paragraph');
$link = get_sub_field('link');

?>

<section class="container">
<div class="title">
    <?php echo $title ?>
</div>
<div class="container_overlay">
<div><img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>"></div>
<div class="content_overlay">
    <div class="paragraph"> <?php echo $paragraph ?></div>

    <?php if($link):?>
        <a class="btn-cta" href="<?= $link['url'];?>">
            <?= $link['title'];?>
        </a>     
    <?php endif;?>
</div>
</div>
</section>