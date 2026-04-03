<?php 

// Layout ACF : text_evidence
// Champs : categorie (texte), details (wysiwyg), paragraph (wysiwyg), link (lien)
$categorie = get_sub_field('categorie');
$details   = get_sub_field('details');
$link      = get_sub_field('link');
$paragraph = get_sub_field('paragraph');

?>

<section class="section-text-evidence">
    <div class="section-inner container">
        <?php if ($categorie) : ?>
            <div class="section-label from-bottom"><span><?= $categorie; ?></span></div>
        <?php endif; ?>

        <div class="section-content from-left"><?= $details; ?></div>

        <?php if ($paragraph) : ?>
<<<<<<< HEAD
            <div class="section-paragraph from-left"><?= $paragraph; ?></div>
        <?php endif;
        
        if ($link) : ?>
            <a href="<?= $link['url']; ?>" class="btn-cta from-bottom">
=======
            <div class="section-paragraph"><?= $paragraph; ?></div>
        <?php endif;
        
        if ($link) : ?>
            <a href="<?= $link['url']; ?>" class="btn-cta">
>>>>>>> 3b8360c (Renomage des fichiers.php + fichiers .scss pour une meilleure lisibilité)
                <?= $link['title']; ?>
            </a>
        <?php endif; ?>
    </div>
</section>

