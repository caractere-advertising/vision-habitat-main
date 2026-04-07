<?php

$link  = get_sub_field('link');

// La fonction est gérée dans /includes/setup.php
$query = getPosts('reference');

?>

<section class="section-references">
    <div class="ref-grid container">
       <?php if ($query->have_posts()) :
            while ($query->have_posts()) : $query->the_post();
                $image     = get_the_post_thumbnail_url(get_the_ID(), 'full');
                $paragraph = get_the_title();
                $lien      = get_permalink();
                $category  = getCategoriesReferences(get_the_ID(),'reference_category');                           

                ?>

                <article class="ref-card from-bottom">
                    <a href="<?= esc_url($lien); ?>" class="ref-card-link">
                        <div class="ref-card-img">
                            <?php if ($image) : ?>
                                <img src="<?= esc_url($image); ?>" alt="<?= esc_attr($paragraph); ?>">
                            <?php endif; ?>

                            <span class="ref-card-plus">
                                <span class="btn-plus-icon">+</span>
                            </span>
                        </div>

                        <?php if ($category) : ?>
                            <span class="ref-card-cat"><?= esc_html($category); ?></span>
                        <?php endif; ?>

                        <?php if ($paragraph) : ?>
                            <p class="ref-card-text"><?= esc_html($paragraph); ?></p>
                        <?php endif; ?>
                    </a>
                </article>
            <?php endwhile;
            wp_reset_postdata();
        endif; ?>
    </div>

    <?php if ($link) : ?>
        <div class="ref-btn-wrap">
            <a href="<?= esc_url($link['url']); ?>" class="ref-btn"><?= esc_html($link['title']); ?></a>
        </div>
    <?php endif; ?>

</section>
