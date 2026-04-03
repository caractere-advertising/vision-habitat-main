
<?php
// Layout ACF : block_citation
// Champs : name (texte), citation (wysiwyg), title (wysiwyg), link (lien)

$name     = get_sub_field('name');
$citation = get_sub_field('citation');
$title    = get_sub_field('title');
$link     = get_sub_field('link');
$blueActif = get_sub_field('blue_activated');

?>

<section class="section-citation">
<<<<<<< HEAD

    <div class="citation-block container">
        <div class="citation-inner">
            <?php if ($name) : ?>
            <span class="citation-name"><?= $name; ?></span>
            <?php endif; ?>

            <?php if($citation): ?>
                <div class="citation-text"><?= $citation; ?></div>
            <?php endif; ?>
        </div>
=======
    <?php if($name):?>
        <div class="citation-block container">
            <div class="citation-inner container">
                <?php if ($name) : ?><span class="citation-name from-left"><?= $name; ?></span><?php endif; ?>
                <?php if($citation): ?><div class="citation-text from-right"><?= $citation; ?></div><?php endif; ?>
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
>>>>>>> c4fe539 (Ajout animation apparition sur chaque section + animate.js)
            </div>
    <?php if($blueActif):?>

    <div class="citation-blue">
        <div class="citation-blue-inner container">
            <?php if ($title) : ?>
                <div class="citation-blue-title">
                    <?= $title; ?>
                </div>

    <?php endif;?>
    <?php if($link): ?>
        <a href="<?php echo ($link['url']) ?>" class="btn-cta">
            <?php echo ($link['title']) ?>
    </a>
        <?php endif;?>
            <?php if($citation):?><div class="citation-deco"></div><?php endif;?>
        </div>
    <?php endif;?>
</section>