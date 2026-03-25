<?php 

class CPT_References {
    public static function register() {
        $labels = array(
            'name' => _x('Références', 'Post Type General Name', 'custom_post_type'),
            'singular_name' => _x('Référence', 'Post Type Singular Name', 'custom_post_type'),
            'menu_name' => __('Références', 'custom_post_type'),
            'name_admin_bar' => __('Référence', 'custom_post_type'),
            'add_new' => __('Ajouter une référence', 'custom_post_type'),
            'add_new_item' => __('Ajouter référence', 'custom_post_type'),
            'new_item' => __('Nouveau', 'custom_post_type'),
            'edit_item' => __('Modifier', 'custom_post_type'),
            'view_item' => __('Voir', 'custom_post_type'),
            'all_items' => __('Toutes les références', 'custom_post_type'),
            'search_items' => __('Recherche', 'custom_post_type'),
            'not_found' => __('Non trouvé', 'custom_post_type'),
        );

        $args = array(
            'label' => __('Référence', 'custom_post_type'),
            'labels' => $labels,
            'public' => true,
            'has_archive' => true,
            'menu_position' => 5,
            'menu_icon' => 'dashicons-editor-help',
            'supports' => array('title','thumbnail'),
        );

        register_post_type('reference', $args);

        // Déclaration de la Taxonomie
        $labels = array(
            'name' => 'Catégories',
            'new_item_name' => 'Nom de la nouvelle catégorie',
            'parent_item' => 'Catégorie parent',
        );

        $args = array(
            'labels' => $labels,
            'public' => true,
            'show_in_rest' => true,
            'hierarchical' => true, 
        );

        register_taxonomy( 'reference_category', 'reference', $args ); // ✅ nom technique changé
    }
}

// Ajouter colonne "Catégorie" dans admin
add_filter('manage_faq_posts_columns', function($columns) {
    $columns['reference_category'] = __('Catégorie', 'custom_post_type');
    return $columns;
});

add_action('manage_faq_posts_custom_column', function($column, $post_id) {
    if ($column === 'reference_category') {
        $terms = get_the_terms($post_id, 'reference_category');
        if (!empty($terms) && !is_wp_error($terms)) {
            $categories = wp_list_pluck($terms, 'name');
            echo implode(', ', $categories);
        } else {
            echo '<em>Aucune</em>';
        }
    }
}, 10, 2);

add_action('init', ['CPT_References', 'register']);

?>
