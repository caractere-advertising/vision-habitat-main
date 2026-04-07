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
<<<<<<< HEAD
<<<<<<< HEAD
        'post_status' => 'publish',
        'order' => 'ASC',
=======
        'post_status' => 'publish'
>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
=======
        'post_status' => 'publish',
        'order' => 'ASC',
>>>>>>> 6ead0fd (Features :)
    );

    $query = new WP_Query($args);

    return $query;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ead0fd (Features :)
}

/* Récupérer les catégories du CPT "réference"                   */
/* + Boucle pour retourner une string contenant toutes celles-ci */

function getCategoriesReferences($postId, $type){
    $cats = get_the_terms($postId, $type);

    $allCats = '';

    if($cats){
        $i = 0;

        foreach($cats as $cat) {
            $i > 0 ? $sep = ' • ' : $sep = '';

            $allCats .= $sep . esc_attr($cat->slug);
            $i++;
        }
    }  
   
    return $allCats;
<<<<<<< HEAD
=======
>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
=======
>>>>>>> 6ead0fd (Features :)
}