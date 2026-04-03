
<?php
// Layout ACF : link_container
// Répéteur : link_container > lien (lien), image(image)
$count = 1;
?>
<section class="section-links container">
    <?php if (have_rows('link_container')) : ?>
        <?php while (have_rows('link_container')) : the_row(); ?>
            <?php $lien = get_sub_field('lien'); ?>
            <?php $image = get_sub_field('image'); ?>
            <?php if ($lien) { ?>
                <a href="<?php echo $lien['url']; ?>" class="links-item"
                 data-image="<?php echo $image ? $image['url'] : ''; ?>">
                   
                    <span class="links-numero"><?php echo str_pad($count++, 2, '0', STR_PAD_LEFT); ?></span>
                    <span class="links-label"><?php echo $lien['title']; ?></span>
                </a>
            <?php } ?>
        <?php endwhile; ?>
        <div class="links-hover-img">
            <img src="" alt="" id="hover-img">
        </div>
    <?php endif; ?>
</section>