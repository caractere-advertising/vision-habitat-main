<?php 

$surtitre = get_sub_field('surtitre') ?? '';
$titre    = get_sub_field('titre') ?? '';

$grilleCards = get_sub_field('grille_card');
$cards       = $grilleCards['cards'];

$colDepart = $grilleCards['colonne-depart'] ?? 0;
$colDepart != 0 ? $rowStart = 'style="grid-column-start:'.$colDepart.'"' : $rowStart = 'style="grid-column-start:0;"';

$ctaSection = get_sub_field('cta-section');

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

                <div class="card from-bottom" <? echo $i == 0 ? $rowStart : '';?>>
                    <div class="content-card">
                        <div class="block-img">
                            <img src="<?= $icon['url'];?>" alt="<?= $icon['title'];?>"/>
                        </div>
                        <h3><?= $label;?></h3>
                        <a href="<?= $lien['url'];?>" alt="<?= $lien['title'];?>" class="btn-cta"></a>
                    </div>
                </div>
            <?php $i++; endforeach;
        endif;?>
    </div>
    <div class="container">
        <a href="<?= $ctaSection['url'];?>" class="btn-cta section"><?= $ctaSection['title'];?></a>
    </div>
</section>