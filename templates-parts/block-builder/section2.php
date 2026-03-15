<<<<<<< HEAD
<?php
// Layout ACF : text_evidence
// Champs : categorie (texte), details (wysiwyg), paragraph (wysiwyg), link (lien)
=======
<?php 
$categorie = get_sub_field('categorie');
$details   = get_sub_field('details');
$link      = get_sub_field('link');
$paragraph = get_sub_field('paragraph');

>>>>>>> b7f71c0a3d19fa39b86f8a027121a014c2283ad6

$categorie = get_sub_field('categorie');
$details   = get_sub_field('details');
$paragraph = get_sub_field('paragraph');
$link      = get_sub_field('link');
?>
<<<<<<< HEAD

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
=======
<?php if( $details ) : ?>
<section>
<div>
<p><?php echo $categorie; ?></p>
<p><?php echo $details; ?></p>
<p><?php echo $paragraph; ?></p>
<?php if( is_array($link) && !empty($link['url']) ) : ?>
    <a href="<?php echo esc_url($link['url']); ?>"><?php echo esc_html($link['title']); ?></a>
<?php endif; ?>
</div>
</section>
<?php endif; ?>
>>>>>>> b7f71c0a3d19fa39b86f8a027121a014c2283ad6
