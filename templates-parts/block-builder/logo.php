<?php

$logo = get_field('logo', 'options');

if ($logo) :

    if (is_array($logo)) : ?>
        <img src="<?= esc_url($logo['url']); ?>" alt="<?= esc_attr($logo['alt']); ?>">
    
   
    elseif (is_string($logo)) : ?>
        <img src="<?= esc_url($logo); ?>" alt="Logo">
    
    <?php
    
    elseif (is_numeric($logo)) :
        echo wp_get_attachment_image($logo, 'full');
    endif;

else :
    echo '<p>Pas de logo défini pour cette page.</p>';
endif;

var_dump($logo);
?>