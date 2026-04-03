<?php

<<<<<<< HEAD
$logo = get_field('logo', 'options');
$class  = is_front_page() ? 'site-header -frontpage' : 'site-header';

$pageBlue = get_field('header-negatif','options');

if($pageBlue):
    foreach($pageBlue as $pB):
        if(get_the_id() == $pB->ID):
            $class .= ' -negatif-header';
            $logo   = get_field('logo-negatif', 'options');
        endif;
    endforeach;
endif;
=======
$logo = is_front_page() ? get_field('logo', 'options') : get_field('logo-negatif', 'options');
$class = is_front_page() ? 'site-header -frontpage' : 'site-header';
>>>>>>> 3b8360c (Renomage des fichiers.php + fichiers .scss pour une meilleure lisibilité)

?>

<header class="<?= $class;?>">
    <div class="header-inner">
        <a href="<?= home_url('/'); ?>" class="header-logo">
            <?php if ($logo): ?>
                <img src="<?= $logo['url']; ?>" alt="<?= $logo['alt']; ?>">
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

<div class="mobile-menu " id="megamenu">
     <?php get_template_part('templates-parts/bg-menu/bg-menu'); ?>
</div>
