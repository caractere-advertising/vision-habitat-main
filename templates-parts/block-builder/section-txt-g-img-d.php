<?php 

$titre = get_sub_field('titre');
$intro = get_sub_field('intro');

$cta   = get_sub_field('cta');
$img   = get_sub_field('image');

?>

<section class="section-txt-g-img-d">
    <div class="container container-bg"></div>
    <div class="container flex">
        <div class="colg col-50">
            <?= $titre;?>
            <div class="intro"><?= $intro;?></div>
            <?php if($cta):?>
                <a class="btn-cta" href="<?= $cta['url'];?>">
                    <?= $cta['title'];?>
                </a>
            <?php endif;?>
        </div>
        <div class="cold col-50">
            <?php if($img):?>
                <div class="block-img">
                    <img src="<?= $img['url'];?>" alt="<?= $img['title'];?>"/>
                </div>
            <?php endif;?>
        </div>
    </div>
</section>