<?php
$title = get_sub_field('title');
$image = get_sub_field('image');
$paragraph = get_sub_field('paragraph');
$link = get_sub_field('link');

?>

<section class="section-text-overlay">
    <div class="container flex">
        <div class="title"><?= $title ?></div>
    
        <div class="container_overlay">
            <img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>">
        </div>
    </div>
            
    <div class="container content_overlay">
        <div class="paragraph"><?= $paragraph ?></div>

        <?php if($link):?>
            <a class="btn-cta" href="<?= $link['url'];?>">
                <?= $link['title'];?>
            </a>     
        <?php endif;?>    
    </div>
</section>