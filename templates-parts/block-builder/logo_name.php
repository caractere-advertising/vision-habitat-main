
<?php
$logo_name = get_field( 'logo_name' );

if ( $logo_name ) {
    // wp_kses_post : le champ peut contenir du HTML de mise en forme (strong, em, etc.)
    echo wp_kses_post( $logo_name );
}
?>