<?php 

$surtitre = get_sub_field('surtitre') ?? '';
$titre    = get_sub_field('titre') ?? '';

$grilleCards = get_sub_field('grille_card');
$cards       = $grilleCards['cards'];

$colDepart = $grilleCards['colonne-depart'] ?? 0;
$colDepart != 0 ? $rowStart = 'style="grid-column-start:'.$colDepart.'"' : $rowStart = 'style="grid-column-start:0;"';

$borderLeft = get_sub_field('border-left');
$ctaSection = get_sub_field('cta-section');

$borderLeft ? $class = "card -left" : $class="card";

?>

<section class="section-approche-globale">
    <div class="container">
        <span class="surtitre"><?= $surtitre;?></span>
        <?= $titre;?>
    </div>

    <div class="container grid">
        <?php if($cards):
            $i = 0;
            foreach($cards as $c):
                $icon  = $c['icone'];
                $label = $c['label'];
                $lien  = $c['lien'];?>

                <div class="<?= $class;?>" <? echo $i == 0 ? $rowStart : '';?>>
                    <div class="content-card">
                        <div class="block-img">
                            <img src="<?= $icon['url'];?>" alt="<?= $icon['title'];?>"/>
                        </div>
                        <h3><?= $label;?></h3>
                        <?php if($lien):?>
                            <a href="<?= $lien['url'];?>" alt="<?= $lien['title'];?>" class="btn-cta"></a>
                        <?php endif;?>
                    </div>
                </div>
            <?php $i++; endforeach;
        endif;?>
    </div>
    <div class="container">
        <?php if($ctaSection):?>
        <a href="<?= $ctaSection['url'];?>" class="btn-cta section"><?= $ctaSection['title'];?></a>
        <?php endif;?>
    </div>
</section>