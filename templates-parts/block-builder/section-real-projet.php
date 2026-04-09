
<?php
// Champs : categorie (texte), text_evidence (wysiwyg), details (wysiwyg), paragraph (wysiwyg), link (lien)
// j'ai enlevé détails

$cat           = get_sub_field('category');
$text_evidence = get_sub_field('text_evidence');
//$details       = get_sub_field('details');
$paragraph     = get_sub_field('paragraph');
$link          = get_sub_field('link');

// Ajout gestion margin paragraphe
$margin = get_sub_field('margin');

$top    = empty($margin['top']) ? 'auto' : $margin['top'] . 'px';
$bottom = empty($margin['bottom']) ? 'auto' : $margin['bottom'] . 'px';
$left   = empty($margin['left']) ? 'auto' : $margin['left'] . 'px';
$right  = empty($margin['right']) ? 'auto' : $margin['right'] . 'px';

$displayMargin = 'style="margin:' . $top . ' ' . $right . ' ' . $bottom . ' ' . $left . '"';
?>

<section class="section-two-col">
    <div class="two-col-inner container flex">
        <div class="two-col-left col-50">
            <?php if($cat): ?>
                <div class="section-label from-left"><span><?= $cat; ?></span></div>
            <?php endif;
            if ($text_evidence): ?>
                <div class="two-col-title big_title from-left"><?= $text_evidence; ?></div>
            <?php endif; ?>
        </div>

        <div class="two-col-right col-50">
            <?php if($paragraph): ?>
                <div class="two-col-paragraph from-right" <?= $displayMargin;?>><?= $paragraph; ?></div>
            <?php endif;
            
            if($link) : ?>
                <a href="<?= $link['url']; ?>" class="btn-cta"><?= $link['title']; ?></a>
            <?php endif; ?>
        </div>
    </div>
</section>