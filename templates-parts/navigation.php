<?php
$logo = is_front_page() ? get_field('logo', 'options') : get_field('logo-negatif', 'options');

     
$class = is_front_page() ? 'site-header -frontpage' : 'site-header';

?>

<header class="<?= $class;?>">
    <div class="header-inner">
        <a href="<?php echo home_url('/'); ?>" class="header-logo">
            <?php if ($logo): ?>
                <img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
            <?php endif; ?>
        </a>

        <nav class="header-nav">
            <?php
                wp_nav_menu([
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'navbar',
                ]);
            ?>
        </nav>

        <div class="header-actions">
            <span class="header-separator"></span>
            <button class="hamburger hamburger--emphatic" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </div>
</header>

<div class="mobile-menu" id="megamenu">
     <?php get_template_part('templates-parts/bg-menu/bg-menu'); ?>
</div>
