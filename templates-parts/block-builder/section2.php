<?php
// Layout ACF : text_evidence
// Champs : categorie (texte), details (wysiwyg), paragraph (wysiwyg), link (lien)

$categorie = get_sub_field('categorie');
$details   = get_sub_field('details');
$paragraph = get_sub_field('paragraph');
$link      = get_sub_field('link');
?>

<?php if ($details) : ?>
<section class="section-text-evidence">
    <div class="section-inner">

        <?php if ($categorie) : ?>
        <div class="section-label">
            <span><?php echo $categorie; ?></span>
        </div>
        <?php endif; ?>

        <div class="section-content">
            <?php echo $details; ?>
        </div>

        <?php if ($paragraph) : ?>
        <div class="section-paragraph">
            <?php echo $paragraph; ?>
        </div>
        <?php endif; ?>

        <?php if ($link) : ?>
        <a href="<?php echo $link['url']; ?>" class="btn-cta">
            <?php echo $link['title']; ?>
        </a>
        <?php endif; ?>

    </div>
</section>
<?php endif; ?>
