<?php
    $img = get_sub_field('image');

    $height = get_sub_field('hauteur');
    !empty($height) ? $style = 'style="height:'.$height.'vh;"' : $style = 'style="height:80vh;"';
?>

<section class="section-image-parallax" <?= $style;?>>
    <img src="<?= $img['url'];?>" alt="<?= $img['title'];?>"/>
</section>  