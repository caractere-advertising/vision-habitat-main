<?php
// layout ACF
// champs répéteur - image(image)/ titre (wysiwyg)/paragraph (wysiwyg)/lien (lien)

$section_actu_2_cards = get_field('section_actu_2_cards');

wp_nav_menu(['theme_location' =>'menu-actu',
'container'=>'nav',
'container_class' =>'actu-nav',
'menu_class'=>'actu-nav-list',])
?>

<section class="section_actu_2_cards">
    <div class="actu-grid">
        <?php if(have_rows('articles')):
            while(have_rows('articles')) : the_row();

                $title     = get_sub_field('title');
                $image     = get_sub_field('image');
                $paragraph = get_sub_field('paragraph');
                $link      = get_sub_field('link');
                ?>

                <article class="actu-card">
                    <div class="actu-card-img">
                        <?php if ( $image ) : ?>
                            <img src="<?php echo esc_url( $image['url'] ); ?>" loading="lazy" alt="<?php echo esc_attr( $image['alt'] ); ?>">
                        <?php endif;
                        
                        if ( $link ) : ?>
                            <a href="<?php echo esc_url( $link['url'] ); ?>" class="actu-card-plus">+</a>
                        <?php endif; ?>
                    </div>

                    <?php if ( $title ) : ?>
                        <div class="actu-card-title"><?= wp_kses_post( $title ); ?></div>
                    <?php endif;
                    
                    if ( $paragraph ) : ?>
                        <div class="actu-card-paragraph"><?= wp_kses_post( $paragraph ); ?></div>
                    <?php endif; ?>
                </article>
            <?php endwhile;
        endif; ?>
    </div>
</section>