
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
    <div class="section-img-text-inner">

        <div class="img-col">
            <div class="img-wrapper">
                <?php if ($gd_image) : ?>
                    <img src="<?php echo $gd_image['url']; ?>" alt="<?php echo $gd_image['alt']; ?>" class="img-large">
                <?php endif; ?>
                <?php if ($pt_image) : ?>
                    <img src="<?php echo $pt_image['url']; ?>" alt="<?php echo $pt_image['alt']; ?>" class="img-small">
                <?php endif; ?>
            </div>
        </div>

        <div class="text-col">

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

        </div>
    </div>
</section>
