<?php
/**
 * Vision Habitat 2026
 * Functions & Theme Setup
 */

if ( ! defined( 'ABSPATH' ) ) exit;

include_once get_template_directory() . '/includes/setup.php';
include_once get_template_directory() . '/includes/acf-fields.php';
include_once get_template_directory() . '/includes/seo.php';

require_once get_template_directory() . '/includes/class-cpt-references.php';
require_once get_template_directory() . '/includes/class-cpt-projets.php';

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

function vh_fonts() {
    $fonts_uri = get_template_directory_uri() . '/assets/fonts/';
    $css = "
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url('" . esc_url($fonts_uri) . "manrope-latin-ext.woff2') format('woff2');
  unicode-range: U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;
}
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url('" . esc_url($fonts_uri) . "manrope-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}";
    wp_add_inline_style('vh-style', $css);
}
add_action('wp_enqueue_scripts', 'vh_fonts', 20);

function vh_font_preload() {
    $fonts_uri = get_template_directory_uri() . '/assets/fonts/';
    echo '<link rel="preload" href="' . esc_url($fonts_uri) . 'manrope-latin.woff2" as="font" type="font/woff2" crossorigin>' . "\n";
}

//SVG Files — upload réservé aux administrateurs uniquement
add_filter( 'upload_mimes', 'vh_mime_types' );

function vh_mime_types( $mimes ) {
    // N'autoriser SVG que pour les utilisateurs ayant la capacité manage_options (admins)
    if ( current_user_can( 'manage_options' ) ) {
        $mimes['svg'] = 'image/svg+xml';
    }
    return $mimes;
}

// Vérification MIME réelle du SVG (pas seulement l'extension)
add_filter( 'wp_check_filetype_and_ext', 'vh_check_svg_filetype', 10, 4 );

function vh_check_svg_filetype( $data, $file, $filename, $mimes ) {
    if ( ! current_user_can( 'manage_options' ) ) {
        return $data;
    }

    $ext = strtolower( pathinfo( $filename, PATHINFO_EXTENSION ) );

    if ( 'svg' !== $ext ) {
        return $data;
    }

    // Vérifier que le contenu est bien du XML/SVG et non du PHP ou JS injecté
    $content = file_get_contents( $file );
    if ( false === $content ) {
        return $data;
    }

    // Bloquer si le SVG contient des scripts ou des gestionnaires d'événements
    if ( preg_match( '/<script[\s>]/i', $content ) || preg_match( '/\bon\w+\s*=/i', $content ) ) {
        return [ 'ext' => false, 'type' => false, 'proper_filename' => false ];
    }

    return [
        'ext'             => 'svg',
        'type'            => 'image/svg+xml',
        'proper_filename' => $data['proper_filename'],
    ];
}

function vh_fix_svg_display() {
    echo '<style>.attachment-266x266,.thumbnail img{width:100%!important;height:auto!important}</style>';
}
add_action( 'admin_head', 'vh_fix_svg_display' );


add_action('wp_head', 'vh_font_preload', 1);

function return_post() {
    global $wpdb;
    // Utilisation du préfixe dynamique $wpdb->posts au lieu de wp_posts hardcodé
    $post = $wpdb->get_results(
        $wpdb->prepare(
            "SELECT * FROM {$wpdb->posts} WHERE post_type = %s AND post_status = %s ORDER BY post_date DESC LIMIT 1",
            'post',
            'publish'
        )
    );

    return $post;
}


