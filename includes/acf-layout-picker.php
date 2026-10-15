<?php

if ( ! defined( 'ABSPATH' ) ) exit;

/* Sélecteur de sections du builder en grille (miniature + nom)      */
/* Les miniatures sont reprises du champ "Rendu visuel" (message)     */
/* de chaque layout : une seule source à maintenir dans builder-fields */

const VH_BUILDER_FIELD_KEY = 'field_69a7f86f5a302';

function vh_get_layout_thumbnails() {
    $field = acf_get_field( VH_BUILDER_FIELD_KEY );

    if ( empty( $field['layouts'] ) ) {
        return array();
    }

    // Layouts sans champ "Rendu visuel"
    $fallbacks = array(
        'section-image-paralax' => 'image_parallax.png',
        'section_blue'          => 'section_blue.png',
    );

    $thumbs = array();

    foreach ( $field['layouts'] as $layout ) {
        $src = '';

        foreach ( $layout['sub_fields'] as $sub ) {
            if ( $sub['type'] === 'message' && preg_match( '/src="([^"]+)"/', $sub['message'], $m ) ) {
                $src = $m[1];
                break;
            }
        }

        if ( ! $src && isset( $fallbacks[ $layout['name'] ] ) ) {
            $src = get_template_directory_uri() . '/assets/images/references/' . $fallbacks[ $layout['name'] ];
        }

        if ( $src ) {
            $thumbs[ $layout['name'] ] = esc_url_raw( $src );
        }
    }

    return $thumbs;
}

add_action( 'acf/input/admin_enqueue_scripts', function () {
    $dir = get_template_directory() . '/assets/admin/';
    $uri = get_template_directory_uri() . '/assets/admin/';

    wp_enqueue_style(
        'vh-layout-picker',
        $uri . 'layout-picker.css',
        array( 'acf-input' ),
        filemtime( $dir . 'layout-picker.css' )
    );

    wp_enqueue_script(
        'vh-layout-picker',
        $uri . 'layout-picker.js',
        array( 'acf-input' ),
        filemtime( $dir . 'layout-picker.js' ),
        true
    );

    wp_localize_script( 'vh-layout-picker', 'vhLayoutPicker', array(
        'fieldKey' => VH_BUILDER_FIELD_KEY,
        'thumbs'   => vh_get_layout_thumbnails(),
        'i18n'     => array(
            'title'       => 'Ajouter une section',
            'search'      => 'Rechercher une section…',
            'close'       => 'Fermer',
            'noResults'   => 'Aucune section trouvée',
        ),
    ) );
} );
