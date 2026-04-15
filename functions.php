<?php
/**
 * Vision Habitat 2026
 * Functions & Theme Setup
 */

include_once get_template_directory() . '/includes/setup.php';
include_once get_template_directory() . '/includes/acf-fields.php';

require_once get_template_directory() . '/includes/class-cpt-references.php';

function vh_enqueue_assets() {

    $dist_path = get_template_directory() . '/assets/dist/';
    $dist_uri  = get_template_directory_uri() . '/assets/dist/';

    $main_js   = $dist_path . 'main.bundle.js';
    $style_js  = $dist_path . 'style.bundle.js';
    $style_css = $dist_path . 'style.bundle.css';

    // Si le build n'existe pas, on ne charge rien
    if ( ! file_exists($main_js) ) {
        return;
    }

    // CSS extrait (production)
    if ( file_exists($style_css) ) {
        wp_enqueue_style(
            'vh-style',
            $dist_uri . 'style.bundle.css',
            [],
            filemtime($style_css)
        );
    } else {
        // Fallback (dev) : injection via JS
        if ( file_exists($style_js) ) {
            wp_enqueue_script( 
                'vh-style',
                $dist_uri . 'style.bundle.js',
                [],
                filemtime($style_js),
                true
            );
        }
    }

    // JS principal
    wp_enqueue_script(
        'vh-main',
        $dist_uri . 'main.bundle.js',
        [],
        filemtime($main_js),
        true
    );
}

function get_builder_context_id() {
    if (is_home()) {
        return get_option('page_for_posts');
    }

    return get_queried_object_id();
}

add_action('wp_enqueue_scripts', 'vh_enqueue_assets');

//SVG Files
add_filter( 'wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {
    global $wp_version;
    if ( $wp_version !== '4.7.1' ) {
       return $data;
    }
  
    $filetype = wp_check_filetype( $filename, $mimes );
  
    return [
        'ext'             => $filetype['ext'],
        'type'            => $filetype['type'],
        'proper_filename' => $data['proper_filename']
    ];
}, 10, 4 );
  
function cc_mime_types( $mimes ){
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
  
function fix_svg() {
    echo '<style type="text/css">
          .attachment-266x266, .thumbnail img {
               width: 100% !important;
               height: auto !important;
          }
          </style>';
}

add_filter( 'upload_mimes', 'cc_mime_types' );
add_action( 'admin_head', 'fix_svg' );

function register_menus() {
    register_nav_menus([
        'primary' => 'Menu principal',
        'burger-menu'  => 'Menu burger',
        'menu-actu' =>'Menu actu'
    ]);
}

add_action('after_setup_theme', 'register_menus');

function return_post(){
    global $wpdb;   
    $post = $wpdb->get_results("SELECT * FROM wp_posts WHERE post_type = 'post' AND post_status = 'publish' ORDER BY post_date DESC LIMIT 1");

    return $post;
}

function vision_habitat_enqueue() {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap', [], null);
}

add_action('wp_enqueue_scripts', 'vision_habitat_enqueue');