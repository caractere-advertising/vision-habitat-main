<?php $slides = get_sub_field('slides-vertical'); ?>


<section class="section-galerie-vertical-reverse">
    <div class="swiper swiper-vertical">
        <div class="swiper-wrapper">
            <?php foreach($slides as $s):
                $image = $s['image'];
                $titre = $s['titre'];
                $texte = $s['texte'];
                $cta   = $s['cta'];?>

                <div class="swiper-slide flex">
                   <div class="colg col-50">
                        <div class="content from-left">
                            <span data-swiper-parallax="-200"><?= $titre;?></span>
                            <span data-swiper-parallax="-100"><?= $texte;?></span>
                            <?php if($cta):?>
                                <a href="<?= $cta['url'];?>" class="btn-cta"><?= $cta['title'];?></a>
                            <?php endif;?>
                        </div>
                    </div>
                     <div class="cold col-50">
                        <div class="block-img from-left" data-swiper-parallax="-300">
                            <img src="<?= $image['url'];?>" alt="<?= $image['title'];?>"/>
                        </div>
                   </div>
                </div>
            <?php endforeach;?>
        </div>
        <div class="swiper-pagination swiper-pagination-vertical"></div>
    </div>
</section>
