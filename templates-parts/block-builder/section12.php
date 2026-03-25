<?php
// Layout ACF : block_actu
// Champs : title (wysiwyg), link (lien)
// Répéteur : articles -> image (image), category (texte), paragraph (texte), lien (lien)



/****** TIPS POUR CLAUDIA ****/ 
/* Pour les actualités, utilise wp_query(), afin de retrouver les articles qu'on encodera dans articles.
Ainsi, on récuperera automatiquement le/ les derniers encodés. Elle s'utilise ainsi : */

// Facultatif : Je stocke mes arguments dans une variable
$args = [
    'post_type' => 'post',
    'post_per_page' => 3,
    'post_status' => 'publish'
];

// On execute la query pour récupérer les données demandées - Le resultat est un ARRAY
$query = new WP_Query($args); 

// Ensuite tu peux boucler dedans pour récupérer les infos ( à placer dans ta div "actus-grid")
if($query->have_posts()):
    while($query->have_posts()): $query->the_post();
        // A parti d'ici, toutes les data qu'on récupère sont lié à un post (article);
        // get_field / get_sub_field ira voir dans le template des articles;

        echo get_the_title();

        // TU peux recopier ton design de card actus :)

    endwhile;
endif;

// A la finde la boucle, on restore les Post Data (lié à la page et non plus à la query)
wp_reset_postdata();

/***** FIN TIPS POUR CLAUDIA ******/

$title = get_sub_field('title');
$link  = get_sub_field('link');
?>
<section class="section-actu">
    <?php if ($title) { ?>
        <div class="actu-title"><?php echo $title; ?></div>
    <?php } ?>

    <div class="actu-grid">
        <?php if (have_rows('articles')) :
            while (have_rows('articles')) : the_row();
                $image     = get_sub_field('image');
                $category  = get_sub_field('category');
                $paragraph = get_sub_field('paragraph');
                $lien      = get_sub_field('lien');
                ?>

                <article class="actu-card">
                    <div class="actu-card-img">
                        <?php if ($image) { ?>
                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                        <?php }
                        if ($lien) { ?>
                            <a href="<?php echo $lien['url']; ?>" class="actu-card-plus">+</a>
                        <?php } ?>
                    </div>
                    <?php if ($category) { ?>
                        <span class="actu-card-cat"><?php echo $category; ?></span>
                    <?php }
                    if ($paragraph) { ?>
                        <p class="actu-card-text"><?php echo $paragraph; ?></p>
                    <?php } ?>
                </article>
            <?php endwhile;
        endif; ?>
    </div>

    <?php if ($link) { ?>
        <div class="actu-btn-wrap">
            <a href="<?php echo $link['url']; ?>" class="actu-btn"><?php echo $link['title']; ?></a>
        </div>
    <?php } ?>
</section>