
<?php

// Layout ACF : images_overlay
// Champs : categorie (texte), details (wysiwyg), paragraph (wysiwyg),
//          liste (répéteur) item (texte), link (lien),
//          gd_image (image), pt_image (image)

$categorie = get_sub_field('categorie');
$details   = get_sub_field('details');
$paragraph = get_sub_field('paragraph');
$liste     = get_sub_field('liste');
$link      = get_sub_field('link');
$gd_image  = get_sub_field('gd_image');
$pt_image  = get_sub_field('pt_image');
?>

<section class="section-img-text">
    <div class="section-img-text-inner container">

        <div class="img-col">
<<<<<<< HEAD
            <div class="img-wrapper from-left">
                <?php if ($gd_image) : ?>
                    <img src="<?= $gd_image['url']; ?>" alt="<?= $gd_image['alt']; ?>" class="img-large">
                <?php endif;
                if($pt_image): ?>
                    <img src="<?= $pt_image['url']; ?>" alt="<?= $pt_image['alt']; ?>" class="img-small">
=======
            <div class="img-wrapper">
                <?php if ($gd_image) : ?>
                    <img src="<?php echo $gd_image['url']; ?>" alt="<?php echo $gd_image['alt']; ?>" class="img-large">
                <?php endif; ?>
                <?php if ($pt_image) : ?>
                    <img src="<?php echo $pt_image['url']; ?>" alt="<?php echo $pt_image['alt']; ?>" class="img-small">
>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
                <?php endif; ?>
            </div>
        </div>

        <div class="text-col">
<<<<<<< HEAD
            <?php if($categorie): ?>
                <div class="section-label from-right"><span><?= $categorie; ?></span></div>
            <?php endif;
            if($details): ?>
                <div class="text-col-title from-right"><?= $details; ?></div>
            <?php endif;
            if($paragraph): ?>
                <div class="text-col-paragraph from-right"><?= $paragraph; ?></div>
            <?php endif;
            if($liste): ?>
                <ul class="text-col-list">
                    <?php foreach ($liste as $item) : ?>
                        <li><?= $item['item']; ?></li>
                    <?php endforeach; ?>
                </ul>
            <?php endif;
            if ($link) : ?>
                <a href="<?= $link['url']; ?>" class="btn-cta from-bottom"><?= $link['title']; ?></a>
            <?php endif; ?>
=======

            <?php if ($categorie) : ?>
                <div class="section-label">
                    <span><?php echo $categorie; ?></span>
                </div>
            <?php endif; ?>

            <?php if ($details) : ?>
                <div class="text-col-title">
                    <?php echo $details; ?>
                </div>
            <?php endif; ?>

            <?php if ($paragraph) : ?>
                <div class="text-col-paragraph">
                    <?php echo $paragraph; ?>
                </div>
            <?php endif; ?>

            <?php if ($liste) : ?>
                <ul class="text-col-list">
                    <?php foreach ($liste as $item) : ?>
                        <li><?php echo $item['item']; ?></li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>

            <?php if ($link) : ?>
                <a href="<?php echo $link['url']; ?>" class="btn-cta">
                    <?php echo $link['title']; ?>
                </a>
            <?php endif; ?>

>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
        </div>
    </div>
</section>
