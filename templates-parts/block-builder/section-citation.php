
<?php
// Layout ACF : block_citation
// Champs : name (texte), citation (wysiwyg), title (wysiwyg), link (lien)

$name     = get_sub_field('name');
$citation = get_sub_field('citation');
$title    = get_sub_field('title');
$link     = get_sub_field('link');

$signTop  = get_sub_field('signature_top');
$blueActif = get_sub_field('blue_activated');

echo $signTop;

?>

<section class="section-citation">
    <?php if($name):?>
        <div class="citation-block container">
            <div class="citation-inner">
                <?php if ($name && $signTop == 1) : ?><span class="citation-name from-left"><?= $name; ?></span><?php endif; ?>
                <?php if ($citation) : ?><div class="citation-text from-right"><?= $citation; ?></div><?php endif; ?>
                <?php if ($name && $signTop == 0) : ?><span class="citation-name bottom from-left"><?= $name; ?></span><?php endif; ?>

            </div>
        </div>
    <?php endif;?>
    <?php if($blueActif):?>
        <div class="citation-blue">
            <div class="citation-blue-inner container">
                <?php if ($title) : ?>
                    <div class="citation-blue-title from-left"><?= $title; ?></div>
                <?php endif;
                if($link): ?>
                    <a href="<?= $link['url'];?>" class="btn-cta from-top"><?= $link['title'];?></a>
                <?php endif;?>

                <?php if($citation):?><div class="citation-deco"></div><?php endif;?>
            </div>
        </div>
    <?php endif;?>
</section>