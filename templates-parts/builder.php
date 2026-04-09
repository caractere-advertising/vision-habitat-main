<?php

/**
 * Hello Claudia 👋
 *
 * Petit refacto du builder ici :
 *
 * Avant, on avait une grande suite de if / elseif.
 * Ça fonctionnait, mais ça commençait à devenir un peu lourd à lire
 * et surtout moins pratique à maintenir si on continue d’ajouter des sections.
 *
 * Du coup, j’ai remplacé ça par un tableau de correspondance :
 * "nom du layout ACF" => "fichier template à charger"
 *
 * En gros, au lieu de vérifier chaque layout un par un,
 * on va juste regarder s’il existe dans le tableau, puis charger le bon fichier.
 *
 * Avantages :
 * - c’est plus propre et plus lisible
 * - c’est plus simple à maintenir
 * - il y a moins de risques d’oublier un elseif quelque part
 *
 * Si tu ajoutes un nouveau layout ACF plus tard,
 * il suffit simplement d’ajouter une ligne dans le tableau $builder_layouts.
 *
 * Exemple :
 * 'mon_nouveau_layout' => 'mon-fichier-template'
 *
 * ---
 *
 * Petit point important aussi pour la page blog :
 *
 * Quand on est sur la "page des articles" de WordPress,
 * ce n’est pas une page classique comme les autres.
 * Du coup, ACF ne va pas toujours récupérer les champs automatiquement
 * sur le post courant comme on pourrait l’attendre.
 *
 * Donc ici, si on est sur la page blog, on récupère son ID avec :
 * get_option('page_for_posts')
 *
 * Ça permet d’indiquer à ACF :
 * "les champs du builder à lire sont ceux de la page définie dans Réglages > Lecture > Page des articles"
 *
 * Sinon, sur les autres pages, on garde simplement l’ID de la page courante.
 */

$repo = 'templates-parts/block-builder';
$context_id = get_builder_context_id();

$builder_layouts = array(
    'actualites'                 => 'actualites',
    'slider-fullwidth'           => 'slider-fullwidth',
    'text_evidence'              => 'section-text-evidence',
    'card_solutions'             => 'section-card-solutions',
    'header_hero'                => 'section-header-hero',
    'block_real_proj'            => 'section-real-projet',
    'gallery_slider'             => 'section-galerie-slider',
    'images_overlay'             => 'section-image-overlay',
    'section_img_ev'             => 'section-image-env',
    'block_citation'             => 'section-citation',
    'block_discover'             => 'section-discover',
    'link_container'             => 'section-link-container',
    'block_video'                => 'section-video',
    'block_actu'                 => 'section-actualites',
    'section-header-service'     => 'section-header-service',
    'section-approche-globale'   => 'section-approche-globale',
    'section-two-col-simple'     => 'section-txt-g-img-d',
    'section-two-col-full'       => 'section-txt-g-img-d-full',
    'slider-vertical'            => 'section-galerie-vertical',
    'slider-vertical-reverse'    => 'section-galerie-vertical-reverse',
    'section-step-const'         => 'section-etapes',
    'section-image-paralax'      => 'section-parallax',
    'section-formulaire-contact' => 'section-formulaire-contact',
<<<<<<< HEAD
<<<<<<< HEAD
    'big_title'=>'big_title_about',
    'section_accordeon'=>'section_accordeon',
    'text_overlay'=>'text_overlay'

=======
    'section-part-sur-mesure' => 'section-partenaire-sur-mesure',
>>>>>>> 5c5732b (QuickFix : Correction nom des sections dossier builder)
=======
    'section-part-sur-mesure'    => 'section-partenaire-sur-mesure',
    'section-grille-references'   => 'section-grille-references',
>>>>>>> 6ead0fd (Features :)
);

if (have_rows('builder', $context_id)) :
    while (have_rows('builder', $context_id)) : the_row();

        $layout = get_row_layout();

        if (isset($builder_layouts[$layout])) {
            get_template_part($repo . '/' . $builder_layouts[$layout]);
        }

    endwhile;
endif;