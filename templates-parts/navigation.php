<?php
$logo = get_field('logo', 'options');
?>

<header class="site-header">
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
