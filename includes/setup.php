<?php 

function vh_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('menus');
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ]);

    register_nav_menus([
        'primary' => __('Menu principal', 'vision-habitat'),
        'footer'  => __('Menu footer', 'vision-habitat'),
    ]);
}
add_action('after_setup_theme', 'vh_theme_setup');