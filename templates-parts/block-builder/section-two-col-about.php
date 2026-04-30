<?php
// champs titre wisywyg, intro wysiwyf,cta lien

$titre = get_sub_field('titre');
$intro = get_sub_field('intro');
$cta = get_sub_field('cta');
?>

<section class="section-two-col">
    <div class="two-col-inner container flex">
        <div class="two-col-left col-50">
            <div class="two-col-title "><?= $titre ?></div>
        </div>
        <div class="two-col-right col-50">
            <div class="two-col-paragraph"><?= $intro ?></div>
            <a href="<?= $cta['url']; ?>" class="btn-cta"><?= $cta['title']; ?></a>
        </div>
        

    </div>
</section>