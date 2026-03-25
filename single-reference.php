<?php 
/* Template pour les pages "type" REFERENCES */

get_header();

$date = get_field('date') ?? '2026';
$localite = get_field('localisation') ?? '';
$archi = get_field('architecte') ?? '';

$galerie = get_field('galerie');

for($i = 0; $i < count($galerie); $i ++):
    $img_url[$i] = $galerie[$i]['url'];
    $img_title[$i] = $galerie[$i]['title'];
endfor;

?>

<!-- Bloc référence -->

<section class="galerie-reference">
    <div class="swiper swiper-reference">
        <div class="swiper-wrapper">
            <?php foreach($galerie as $g):?>
                <div class="swiper-slide">
                    <img src="<?= $g['url'];?>" alt="<?= $g['title'];?>"/>
                </div>
            <?php endforeach;?>
        </div>
    </div>
</section>

<section class="bloc-reference">
    <div class="container flex -full">
        <div class="col-40 col-g">
            <div class="block-img"><img src="<?= $img_url[0];?>" alt="<?= $img_title[0];?>"></div>
        </div>

        <div class="cold col-60">
            <div class="section-informations">
                <span class="date"><?= $date;?></span>
                <p><strong>Localité</strong> <br>   <?= $localite;?></p>
                <p><strong>Architecte</strong> <br> <?= $archi; ?></p>
            </div>
            <div class="block-img">
                <img src="<?= $img_url[1];?>" alt="<?= $img_title[1];?>"/>
            </div>
        </div>
    </div>
</section>
<?php

get_template_part('templates-parts/builder');
get_footer();

?>