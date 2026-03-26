
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

    <div class="citation-block container">
        <div class="citation-inner container">
            <?php if ($name) : ?>
            <span class="citation-name"><?php echo $name; ?></span>
            <?php endif; ?>

            <?php if($citation): ?>
                <div class="citation-text"><?= $citation; ?></div>
            <?php endif; ?>
        </div>
    </div>
    

    <div class="citation-blue">
        <div class="citation-blue-inner container">
            <?php if ($title) : ?>
            <div class="citation-blue-title">
                <?php echo $title; ?>
            </div>

            <div class="citation-deco"></div>
        </div>
    <?php endif;?>
</section>