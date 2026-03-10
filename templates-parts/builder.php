<?php

$repo = 'templates-parts/block-builder';

if(have_rows('builder')): 
    while(have_rows('builder')): the_row('builder');
        if(get_row_layout() == 'logo'):
            get_template_part( $repo . '/logo');
        elseif(get_row_layout() == 'logo_name'):
            get_template_part( $repo . '/logo_name');
       elseif(get_row_layout() == 'slogan'):
            get_template_part( $repo . '/slogan');
        elseif(get_row_layout() == 'actualites'):
            get_template_part( $repo . '/actualites');
        elseif(get_row_layout() == 'slider-fullwidth'):
            get_template_part( $repo . '/slider-fullwidth');
        elseif(get_row_layout() == 'text_evidence'):// on reprend le champ de afc 
            get_template_part( $repo . '/section2'); // on reprend le nom du fichier vscode correspondant
        elseif(get_row_layout() == 'card_solutions'):
            get_template_part( $repo . '/section2'); 
        endif;
    endwhile;
endif;




?>