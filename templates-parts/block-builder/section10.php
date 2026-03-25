
<?php
// Layout ACF : link_container
// Répéteur : link_container > lien (lien)

$count = 1;
?>
<section class="section-links">
    <?php if (have_rows('link_container')) :
        while (have_rows('link_container')) : the_row();
            $lien = get_sub_field('lien');
            
            if ($lien) { ?>
                <a href="<?= $lien['url']; ?>" class="links-item">
                    <span class="links-numero"><?= str_pad($count++, 2, '0', STR_PAD_LEFT); ?></span>
                    <span class="links-label"><?= $lien['title']; ?></span>
                </a>
            <?php } 
        endwhile;
    endif; ?>
</section>