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


/* Récupération de tous les posts Ou réferences */

function getPosts($type){
    $args = array(
        'post_type' => $type,
        'posts_per_page' => is_front_page(  ) ? 3 : -1,
        'post_status' => 'publish'
    );

    $query = new WP_Query($args);

    return $query;
}