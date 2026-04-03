<?php 

$slides = get_sub_field('slides-sur-mesure');
$titre  = get_sub_field('titre');
$texte  = get_sub_field('texte');

?>

<section class="section-partenaire-sur-mesure">
    <div class="container -large flex">
        <div class="colg col-50">
            <div class="swiper swiper-partenaire">
                <div class="swiper-wrapper">
                    <?php if($slides):
                        foreach ($slides as $s):?>
                            <div class="swiper-slide block-img">
                                <img src="<?= $s['image']['url'];?>" alt="<?=$s['image']['title'];?>"/>
                            </div>
                        <?php endforeach;
                    endif;?>
                </div>
                <div class="swiper-pagination-sur-mesure"></div>
            </div>
        </div>

        <div class="cold col-50">
<<<<<<< HEAD
            <span class="block-title from-right"><?= $titre ?: '';?></span>
            <span class="block-texte from-right"><?= $texte ?: '';?></span>
=======
            <span class="block-title"><?= $titre ?: '';?></span>
            <span class="block-texte"><?= $texte ?: '';?></span>
>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
        </div>
    </div>
</section>