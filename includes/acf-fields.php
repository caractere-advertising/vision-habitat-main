<?php 

add_action( 'acf/include_fields', function() {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

    require_once get_template_directory() . '/includes/ACF/builder-fields.php';
    require_once get_template_directory() . '/includes/ACF/options-fields.php';
	require_once get_template_directory() . '/includes/ACF/references-fields.php';
});

// Création de la page "Options"
add_action( 'acf/init', function() {
    acf_add_options_page( array(
        'page_title' => 'options',
        'menu_slug' => 'options',
        'position' => '',
        'redirect' => false,
        'menu_icon' => array(
            'type' => 'dashicons',
            'value' => 'dashicons-admin-generic',
        ),
        'icon_url' => 'dashicons-admin-generic',
    ));
});