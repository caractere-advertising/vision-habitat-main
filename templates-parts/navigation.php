<?php
$logo = is_front_page() ? get_field('logo', 'options') : get_field('logo-negatif', 'options');

//Permet de verifier si on est sur la page d'accueil
// -> pour mettre le header en position absolute ≠ autres pages;

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
            <button class="burger-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>

<div class="mobile-menu" id="mobile-menu">
    <nav>
        <?php
            wp_nav_menu([
                'theme_location' => 'burger',
                'container'      => false,
                'menu_class'     => 'mobile-navbar',
            ]);
        ?>
    </nav>
</div>
