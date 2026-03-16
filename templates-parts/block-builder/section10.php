<<<<<<< HEAD
=======
<?php
$lien1 = get_sub_field("lien1");
$lien2 = get_sub_field("lien2");
$lien3 = get_sub_field("lien3");
$lien4 = get_sub_field("lien4");
// partir sur un répeteur
>>>>>>> 640e6ee (fixes style 16-03)


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

<<<<<<< HEAD
=======
         <a href="#" class="">
        <span class="link_numero">03</span>
        <span class="link_list"><?php echo $lien3 ?></span>
        </a>

         <a href="#" class="">
        <span class="link_numero">04</span>
        <span class="link_list"><?php echo $lien4 ?></span>
        </a>
    
    </div>
>>>>>>> 640e6ee (fixes style 16-03)
</section>