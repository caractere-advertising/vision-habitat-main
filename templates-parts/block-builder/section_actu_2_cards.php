<?php
// layout ACF
// champs répéteur - image(image)/ titre (wysiwyg)/paragraph (wysiwyg)/lien (lien)

$section_actu_2_cards = get_field('section_actu_2_cards');
?>
<?php
wp_nav_menu(['theme_location' =>'menu-actu',
'container'=>'nav',
'container_class' =>'actu-nav',
'menu_class'=>'actu-nav-list',])
?>
<section class="section_actu_2_cards">

    <!-- <?php if ($section_title) : ?>
        <div class="actu-title"><?php echo $section_title; ?></div>
    <?php endif; ?> -->

    <div class="actu-grid">

        <?php if (have_rows('articles')) : ?>
            <?php while (have_rows('articles')) : the_row(); ?>

                <?php
                $title     = get_sub_field('title');
                $image     = get_sub_field('image');
                $paragraph = get_sub_field('paragraph');
                $link      = get_sub_field('link');
                ?>

                <article class="actu-card">

                    <div class="actu-card-img">
                        <?php if ($image) : ?>
                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                        <?php endif; ?>

                        <?php if ($link) : ?>
                            <a href="<?php echo $link['url']; ?>" class="actu-card-plus">+</a>
                        <?php endif; ?>
                    </div>

                    <?php if ($title) : ?>
                        <div class="actu-card-title"><?php echo $title; ?></div>
                    <?php endif; ?>

                    <?php if ($paragraph) : ?>
                        <div class="actu-card-paragraph"><?php echo $paragraph; ?></div>
                    <?php endif; ?>

                </article>

            <?php endwhile; ?>
        <?php endif; ?>

    </div>

</section>