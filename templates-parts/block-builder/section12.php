<?php
// Layout ACF : block_actu
// Champs : title (wysiwyg), link (lien)
// Répéteur : articles -> image (image), category (texte), paragraph (texte), lien (lien)
$title = get_sub_field('title');
$link  = get_sub_field('link');


// RECUPERER LES ARTICLES
// wp_query();

//global $wpdb;
//$req = get_results(" SELECT * FROM $wpdb->prefix 'post' WHERE ...");

$args = array(
    'post_type' => 'post',
    'posts_per_page' => 3,
    'post_status' => 'publish'
);

$query = new WP_Query($args);

// if($query->have_posts()):
//     while($query->have_posts()): $query->the_post();
//         // Les data de l'article
//         get_the_taxonomies(); // $category
//         get_the_title(); // $paragraph;
//         //get_the_excerpt(); // 
//     endwhile;
// endif;

// wp_reset_postdata();


?>
<section class="section-actu container">

    <?php if ($title) : ?>
        <div class="actu-title"><?php echo $title; ?></div>
    <?php endif; ?>

    <div class="actu-grid">
        <?php if ($query->have_posts()) : ?>
            <?php while ($query->have_posts()) : $query->the_post(); ?>
                <?php
                $image     = get_the_post_thumbnail_url(get_the_ID(), 'full');
                $category  = get_the_category();
                $paragraph = get_the_title();
                $lien      = get_permalink();
                ?>
                <article class="actu-card">
                    <div class="actu-card-img">
                        <?php if ($image) : ?>
                            <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr($paragraph); ?>">
                        <?php endif; ?>
                        <?php if ($lien) : ?>
                            <a href="<?php echo esc_url($lien); ?>" class="actu-card-plus">+</a>
                        <?php endif; ?>
                    </div>

                    <?php if ($category) : ?>
                        <span class="actu-card-cat"><?php echo esc_html($category[0]->name); ?></span>
                    <?php endif; ?>

                    <?php if ($paragraph) : ?>
                        <p class="actu-card-text"><?php echo esc_html($paragraph); ?></p>
                    <?php endif; ?>
                </article>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
        <?php endif; ?>
    </div>

    <?php if ($link) : ?>
        <div class="actu-btn-wrap">
            <a href="<?php echo esc_url($link['url']); ?>" class="actu-btn"><?php echo esc_html($link['title']); ?></a>
        </div>
    <?php endif; ?>

</section>
