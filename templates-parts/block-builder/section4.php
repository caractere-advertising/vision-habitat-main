
<?php
// Champs : categorie (texte), text_evidence (wysiwyg), details (wysiwyg), paragraph (wysiwyg), link (lien)
// j'ai enlevé détails


$cat           = get_sub_field('category');
$text_evidence = get_sub_field('text_evidence');
$details       = get_sub_field('details');
$paragraph     = get_sub_field('paragraph');
$link          = get_sub_field('link');
?>


<section class="section-two-col">
    <div class="two-col-inner container flex">

        <div class="two-col-left col-50">
            <?php if ($cat) : ?>
            <div class="section-label">
                <span><?= $cat; ?></span>
            </div>
            <?php endif; ?>

            <?php if ($text_evidence) : ?>
            <div class="two-col-title big_title">
                <?php echo $text_evidence; ?>
            </div>
            <?php endif; ?>
        </div>

        <div class="two-col-right col-50">
            <?php if ($details) : ?>
            <div class="two-col-details"><?= $details; ?></div>
            <?php endif; ?>

            <?php if ($paragraph) : ?>
            <div class="two-col-paragraph">
                <?= $paragraph; ?>
            </div>
            <?php endif; ?>

            <?php if ($link) : ?>
            <a href="<?= $link['url']; ?>" class="btn-cta">
                <?= $link['title']; ?>
            </a>
            <?php endif; ?>
        </div>
    </div>
</section>
