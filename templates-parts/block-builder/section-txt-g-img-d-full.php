<?php 

$surtitre = get_sub_field('Small-titre');
$titre = get_sub_field('titre');
$intro = get_sub_field('intro');

$cta   = get_sub_field('cta');
$img   = get_sub_field('image');

?>

<section class="section-txt-g-img-d-full">
    <div class="container flex">
        <div class="colg col-40">
            <?= $surtitre;?>
            <?= $titre;?>
            <div class="intro"><?= $intro;?></div>
            <?php if($cta):?>
                <a class="btn-cta" href="<?= $cta['url'];?>"><?= $cta['title'];?></a>
            <?php endif;?>
        </div>
        <div class="cold col-60">
            <?php if($img):?>
                <div class="block-img">
                    <img src="<?= $img['url'];?>" alt="<?= $img['title'];?>"/>
                </div>
            <?php endif;?>
        </div>
    </div>
</section>