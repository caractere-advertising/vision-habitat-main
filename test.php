<?php 

/* Template Name: Test */

<?php
// Test PHP minimal
echo "PHP fonctionne !<br>";

// Test si ACF est actif
if ( function_exists('get_field') ) {
    echo "ACF est actif !<br>";
} else {
    echo "ACF n'est pas actif !<br>";
}

// Test champ image_hero
$image = get_field('image_hero');
echo "<pre>";
var_dump($image);
echo "</pre>";