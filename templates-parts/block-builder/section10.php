

<?php
// Layout ACF : link_container
// Répéteur : liens > lien (lien)
?>

<section class="section-links">

    <?php
    $count = 1;
    if (have_rows('liens')) {
        while (have_rows('liens')) {
            the_row();
            $lien = get_sub_field('lien');
    ?>
            <a href="<?php echo $lien['url']; ?>" class="links-item">
                <span class="links-numero"><?php echo str_pad($count, 2, '0', STR_PAD_LEFT); ?></span>
                <span class="links-label"><?php echo $lien['title']; ?></span>
            </a>
    <?php
            $count++;
        }
    }
    ?>

</section>