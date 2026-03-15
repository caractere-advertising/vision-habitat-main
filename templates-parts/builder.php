<?php

$repo = 'templates-parts/block-builder';

if (have_rows('builder')):
    while (have_rows('builder')): the_row();
<<<<<<< HEAD
=======
        var_dump(get_row_layout());
>>>>>>> b7f71c0a3d19fa39b86f8a027121a014c2283ad6

        if (get_row_layout() == 'actualites'):
            get_template_part($repo . '/actualites');

        elseif (get_row_layout() == 'slider-fullwidth'):
            get_template_part($repo . '/slider-fullwidth');

        elseif (get_row_layout() == 'text_evidence'):
            get_template_part($repo . '/section2');

        elseif (get_row_layout() == 'card_solutions'):
<<<<<<< HEAD
            get_template_part($repo . '/section3');
=======
          get_template_part($repo . '/section3');
>>>>>>> b7f71c0a3d19fa39b86f8a027121a014c2283ad6

        elseif (get_row_layout() == 'header_hero'):
            get_template_part($repo . '/section1');

<<<<<<< HEAD
        elseif (get_row_layout() == 'images_overlay'):
            get_template_part($repo . '/section6');

        elseif (get_row_layout() == 'section_img_ev'):
            get_template_part($repo . '/section7');

        elseif (get_row_layout() == 'block_citation'):
            get_template_part($repo . '/section8');

        elseif (get_row_layout() == 'block_discover'):
            get_template_part($repo . '/section9');

        elseif (get_row_layout() == 'link_container'):
            get_template_part($repo . '/section10');

        elseif (get_row_layout() == 'block_video'):
            get_template_part($repo . '/section11');

        elseif (get_row_layout() == 'block_actu'):
=======
            //elseif (get_row_layout() == 'text_evidence'):
            //get_template_part($repo . '/section4');

             elseif (get_row_layout() == ''):
            get_template_part($repo . '/section6', null, [
            'text_overlay' => get_sub_field('text_overlay'),
            'text_evidence' => get_sub_field('text_evidence'),
            'image' => get_sub_field('image'),
            'image_overlay' => get_sub_field('image_overlay')
]);
            elseif (get_row_layout() == 'scetion_img_ev'):
            get_template_part($repo . '/section7');

            elseif (get_row_layout() == 'block_citation'):
            get_template_part($repo . '/section8');

            elseif (get_row_layout() == 'block_discover'):
            get_template_part($repo . '/section9');

             elseif (get_row_layout() == 'link_container'):
            get_template_part($repo . '/section10');

              elseif (get_row_layout() == 'block_video'):
            get_template_part($repo . '/section11');

            elseif (get_row_layout() == 'block_actu'):
>>>>>>> b7f71c0a3d19fa39b86f8a027121a014c2283ad6
            get_template_part($repo . '/section12');

        endif;

    endwhile;
endif;
