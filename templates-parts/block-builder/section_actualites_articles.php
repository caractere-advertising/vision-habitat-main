<?php
$paged = get_query_var('paged') ? get_query_var('paged') : 1;
$query = new WP_Query([
    'post_type'      => 'post',
    'posts_per_page' => 5,
    'paged'          => $paged,
    'category_name'           => $cat,  
]);
?>
<section class="section-actu section_actu_2_cards container">
    <?php wp_nav_menu([
        'theme_location'  => 'menu-actu',
        'container'       => 'nav',
        'container_class' => 'actu-nav',
        'menu_class'      => 'actu-nav-list',
    ]); ?>

    <?php var_dump(get_categories());?>

    <!--
    Boucle sur les categories
    -> bouton = http://vision.local/blog-actu/page/2/?&cat=ID_CATEGORY 

    get_query_var('cat') : '';


-->
    <div class="actu-grid">
       <?php if ($query->have_posts()) :
            while ($query->have_posts()) : $query->the_post();
                $image     = get_the_post_thumbnail_url(get_the_ID(), 'full');
                $category  = get_the_category();
                $paragraph = get_the_title();
                $lien      = get_permalink();

                $class = '';

                if ($category) {
                    foreach($category as $cat) {
                        $class .= ' item-' . esc_attr($cat->slug);
                    }
                }
                ?>

                <article class="actu-card<?= $class; ?> from-bottom">
                    <div class="actu-card-img">
                        <?php if ($image) : ?>
                            <img src="<?= esc_url($image); ?>" alt="<?= esc_attr($paragraph); ?>">
                        <?php endif; ?>

                        <?php if ($lien) : ?>
                            <a href="<?= esc_url($lien); ?>" class="actu-card-plus">
                                <span class="btn-plus-icon">+</span>
                            </a>
                        <?php endif; ?>
                    </div>

                    <?php if ($category) : ?>
                        <span class="actu-card-cat"><?= esc_html($category[0]->name); ?></span>
                    <?php endif; ?>

                    <?php if ($paragraph) : ?>
                        <p class="actu-card-text"><?= esc_html($paragraph); ?></p>
                    <?php endif; ?>
                </article>

            <?php endwhile;
            wp_reset_postdata();
        endif; ?>
    </div>
    <div class="actu-pagination">
        <?php echo paginate_links([
            'total'   => $query->max_num_pages,
            'current' => $paged,
        ]); ?>
    </div>
</section>