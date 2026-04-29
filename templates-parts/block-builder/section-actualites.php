<?php
// Layout ACF : block_actu
// Champs : title (wysiwyg), link (lien)
// Répéteur : articles -> image (image), category (texte), paragraph (texte), lien (lien)

$title = get_sub_field('title');
$link  = get_sub_field('link');

$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;

// La fonction est gérée dans /includes/setup.php
$query = getPosts('post', $paged);
$taxonomies   = get_categories();

?>

<section class="section-actu container">

    <?php if($title): ?>
        <div class="actu-title from-bottom"><?= $title; ?></div>
    <?php endif; ?>

    <?php if(!is_front_page()): ?>
        <div class="section-filter">
            <button class="btn-filter active" data-filter="all">TOUS</button>
            <?php foreach($taxonomies as $tax):?>
                <button class="btn-filter filter-<?= esc_html($tax->slug);?>" data-filter="<?= esc_html($tax->slug);?>">
                    <?= $tax->name;?>
                </button>
            <?php endforeach;?>
        </div>
    <?php endif;?>

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

            <?php endwhile;?>
            <!-- Add the pagination functions here. -->

            <div class="nav-previous alignleft"><?php previous_posts_link( 'Older posts' ); ?></div>
            <div class="nav-next alignright"><?php next_posts_link( 'Newer posts' ); ?></div>
            <?php wp_reset_postdata();
        endif; ?>
    </div>

    <?php if ($link) : ?>
        <div class="actu-btn-wrap">
            <a href="<?= esc_url($link['url']); ?>" class="actu-btn"><?= esc_html($link['title']); ?></a>
        </div>
    <?php endif; ?>

</section>
