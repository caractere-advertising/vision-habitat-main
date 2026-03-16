<<<<<<< HEAD
<?php 
// Layout ACF : text_evidence
// Champs : categorie (texte), details (wysiwyg), paragraph (wysiwyg), link (lien)

=======

<?php 


// Layout ACF : text_evidence
// Champs : categorie (texte), details (wysiwyg), paragraph (wysiwyg), link (lien)
>>>>>>> 640e6ee (fixes style 16-03)
$categorie = get_sub_field('categorie');
$details   = get_sub_field('details');
$link      = get_sub_field('link');
$paragraph = get_sub_field('paragraph');
<<<<<<< HEAD

=======
>>>>>>> 640e6ee (fixes style 16-03)
?>


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
<<<<<<< HEAD
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
=======

>>>>>>> a438e91 (fixes style 16-03)
>>>>>>> 640e6ee (fixes style 16-03)
