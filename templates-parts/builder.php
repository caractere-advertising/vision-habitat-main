<?php

$repo = 'templates-parts/block-builder';

if (have_rows('builder')): 
    while (have_rows('builder')): the_row();
        //var_dump(get_row_layout());

        if (get_row_layout() == 'actualites'):
            get_template_part($repo . '/actualites');

        elseif (get_row_layout() == 'slider-fullwidth'):
            get_template_part($repo . '/slider-fullwidth');

        elseif (get_row_layout() == 'text_evidence'):
            get_template_part($repo . '/section2');

        elseif (get_row_layout() == 'card_solutions'):
           get_template_part($repo . '/section2');

        elseif (get_row_layout() == 'header_hero'):
            get_template_part($repo . '/section1');

            elseif (get_row_layout() == 'text_evidence'):
            get_template_part($repo . '/section4');
        endif;

    endwhile;
endif;

?>