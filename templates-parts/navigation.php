<?php 

$logo = get_field('logo', 'options');

?>


<header>
    <?php if($logo):?>
        <div class="block-img">
            <img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
        </div>
    <?php endif;?>

    <div class="block-nav">
        <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'navbar',
            ]);
        ?>
    </div>
</header>

<!--
<div class="megamenu"><

/div>
-->