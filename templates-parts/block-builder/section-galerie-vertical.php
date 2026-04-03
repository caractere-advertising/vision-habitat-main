<?php $slides = get_sub_field('slides-vertical'); ?>


<section class="section-galerie-vertical">
    <div class="swiper swiper-vertical">
        <div class="swiper-wrapper">
            <?php foreach($slides as $s):
                $image = $s['image'];
                $titre = $s['titre'];
                $texte = $s['texte'];
                $cta   = $s['cta'];?>

                <div class="swiper-slide flex">
                    <div class="colg col-50">
                        <div class="block-img">
                            <img src="<?= $image['url'];?>" alt="<?= $image['title'];?>"/>
                        </div>
                   </div>

                   <div class="cold col-50">
<<<<<<< HEAD
<<<<<<< HEAD
                        <div class="content">
                            <div class="titre h2"><?= $titre;?></div>
                            <div class="texte"><?= $texte;?>
                            <?php if($cta):?></div>
<<<<<<< HEAD
=======
=======
>>>>>>> c4fe539 (Ajout animation apparition sur chaque section + animate.js)
                        <div class="content from-right">
                            <?= $titre;?>
                            <?= $texte;?>
                            <?php if($cta):?>
>>>>>>> c4fe539 (Ajout animation apparition sur chaque section + animate.js)
=======
>>>>>>> 28f81d8 (fin 3-04)
                                <a href="<?= $cta['url'];?>" class="btn-cta"><?= $cta['title'];?></a>
                            <?php endif;?>
                        </div>
                    </div>
                </div>
            <?php endforeach;?>
        </div>
        <div class="swiper-pagination swiper-pagination-vertical"></div>
    </div>
</section>
