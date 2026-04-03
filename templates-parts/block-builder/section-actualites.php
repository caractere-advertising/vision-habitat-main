<?php
// Layout ACF : block_actu
// Champs : title (wysiwyg), link (lien)
// Répéteur : articles -> image (image), category (texte), paragraph (texte), lien (lien)

$title = get_sub_field('title');
$link  = get_sub_field('link');

// La fonction est gérée dans /includes/setup.php
$query = getPosts('post');

?>

<section class="section-actu container">

    <?php if($title): ?>
        <div class="actu-title"><?= $title; ?></div>
    <?php endif; ?>

    <div class="actu-grid">
        <?php if ($query->have_posts()) :
            while ($query->have_posts()) : $query->the_post();
                $image     = get_the_post_thumbnail_url(get_the_ID(), 'full');
                $category  = get_the_category();
                $paragraph = get_the_title();
                $lien      = get_permalink();
                
                ?>

                <article class="actu-card">
                    <div class="actu-card-img">
                        <?php if ($image) : ?>
                            <img src="<?= esc_url($image); ?>" alt="<?= esc_attr($paragraph); ?>">
                        <?php endif;
                        if ($lien) : ?>
                            <a href="<?= esc_url($lien); ?>" class="actu-card-plus">+</a>
                        <?php endif; ?>
                    </div>

                    <?php if ($category) : ?>
                        <span class="actu-card-cat"><?= esc_html($category[0]->name); ?></span>
                    <?php endif;
                    
                    if ($paragraph) : ?>
                        <p class="actu-card-text"><?= esc_html($paragraph); ?></p>
                    <?php endif; ?>
                </article>
            <?php endwhile;
            wp_reset_postdata();
        endif; ?>
    </div>

    <?php if ($link) : ?>
        <div class="actu-btn-wrap">
            <a href="<?= esc_url($link['url']); ?>" class="actu-btn"><?= esc_html($link['title']); ?></a>
        </div>
    <?php endif; ?>

</section>
