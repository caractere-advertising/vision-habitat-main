
<?php
// Layout ACF : link_container
// Répéteur : link_container > lien (lien), image(image)
$count = 1;
?>
<section class="section-links container">
    <?php if (have_rows('link_container')) :
        while (have_rows('link_container')) : the_row();
            $lien = get_sub_field('lien');
            $image = get_sub_field('image');
            
            if($lien){ ?>
                <a href="<?= $lien['url']; ?>" class="links-item from-bottom"
                 data-image="<?= $image ? $image['url'] : ''; ?>">
                   
                    <span class="links-numero"><?= str_pad($count++, 2, '0', STR_PAD_LEFT); ?></span>
                    <span class="links-label"><?= $lien['title']; ?></span>
                </a>
            <?php }
        endwhile; ?>
        
        <div class="links-hover-img">
            <img src="" alt="" id="hover-img">
        </div>
    <?php endif; ?>
</section>