<?php

$repo = 'templates-parts/block-builder';
$context_id = get_builder_context_id();

$builder_layouts = array(
    
    'text_evidence'                 => 'section-text-evidence',
    'text_overlay'                  => 'text_overlay',
    'card_solutions'                => 'section-card-solutions',
    'images_overlay'                => 'section-image-overlay',
    'link_container'                => 'section-link-container',
    'block_video'                   => 'section-video',
    'block_actu'                    => 'section-actualites',
    'block_citation'                => 'section-citation',
    'block_discover'                => 'section-discover',
    'block_real_proj'               => 'section-real-projet',
    'slider-vertical'               => 'section-galerie-vertical',
    'slider-vertical-reverse'       => 'section-galerie-vertical-reverse',
    'slider-fullwidth'              => 'slider-fullwidth',
    'big_title'                     => 'big_title_about',
    'section-part-sur-mesure'       => 'section-partenaire-sur-mesure',
    'section-grille-references'     => 'section-grille-references',
    'section_actu_2_cards'          => 'section_actu_2_cards',
    'section-formulaire-contact'    => 'section-formulaire-contact',
    'section_accordeon'             => 'section_accordeon',
    'section-step-const'            => 'section-etapes',
    'section-image-paralax'         => 'section-parallax',
    'section-gallery-bl-gr'         => 'section-gallery-bl-gr',
    'section_actualites_articles'   => 'section_actualites_articles',
    'section_actu_citation'         => 'section_actu_citation',
    'section_img_ev'                => 'section-image-env',
    'section-texte-simple'          => 'section-texte-simple',
    'section-header-service'        => 'section-header-service',
    'section-approche-globale'      => 'section-approche-globale',
    'section-two-col-simple'        => 'section-txt-g-img-d',
    'section-two-col-full'          => 'section-txt-g-img-d-full',
    'gallerie-partenaire'           => 'gallerie-partenaire-cont',
    'gallery_slider'                => 'section-galerie-slider',
    'galerie_references'            => 'section-galerie-references'
    
);

if (have_rows('builder', $context_id)) :
    while (have_rows('builder', $context_id)) : the_row();

        $layout = get_row_layout();

        if (isset($builder_layouts[$layout])) {
            get_template_part($repo . '/' . $builder_layouts[$layout]);
        }

    endwhile;
endif;