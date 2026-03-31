<?php

$repo = 'templates-parts/block-builder';

if (have_rows('builder')):
    while (have_rows('builder')): the_row();
        if (get_row_layout() == 'actualites'):
            get_template_part($repo . '/actualites');
        elseif (get_row_layout() == 'slider-fullwidth'):
            get_template_part($repo . '/slider-fullwidth');
        elseif (get_row_layout() == 'text_evidence'):
            get_template_part($repo . '/section2');
        elseif (get_row_layout() == 'card_solutions'):
          get_template_part($repo . '/section3');
        elseif (get_row_layout() == 'header_hero'):
            get_template_part($repo . '/section1');
        elseif (get_row_layout() == 'block_real_proj'):
            get_template_part($repo . '/section4');
        elseif (get_row_layout() == 'gallery_slider'):
            get_template_part($repo . '/section5');
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
            get_template_part($repo . '/section12');
        elseif (get_row_layout() == 'section-header-service'):
            get_template_part($repo . '/section-header-service');
        elseif (get_row_layout() == 'section-approche-globale'):
            get_template_part($repo . '/section-approche-globale');
        elseif (get_row_layout() == 'section-two-col-simple'):
            get_template_part($repo . '/section-txt-g-img-d');
        elseif (get_row_layout() == 'slider-vertical'):
            get_template_part($repo . '/section-galerie-vertical');
        elseif (get_row_layout() == 'section-step-const'):
            get_template_part($repo . '/section-etapes');
        elseif (get_row_layout() == 'section-image-paralax'):
            get_template_part($repo . '/section-parallax');
        elseif (get_row_layout() == 'section-formulaire-contact'):
            get_template_part($repo . '/section-formulaire-contact');
        endif;
    endwhile;
endif;
