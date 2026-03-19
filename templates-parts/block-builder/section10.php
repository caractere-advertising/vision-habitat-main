
<?php
// Layout ACF : link_container
// Répéteur : link_container > lien (lien)
$count = 1;
?>
<section class="section-links">
    <?php if (have_rows('link_container')) : ?>
        <?php while (have_rows('link_container')) : the_row(); ?>
            <?php $lien = get_sub_field('lien'); ?>
            <?php if ($lien) { ?>
                <a href="<?php echo $lien['url']; ?>" class="links-item">
                    <span class="links-numero"><?php echo str_pad($count++, 2, '0', STR_PAD_LEFT); ?></span>
                    <span class="links-label"><?php echo $lien['title']; ?></span>
                </a>
            <?php } ?>
        <?php endwhile; ?>
    <?php endif; ?>
</section>