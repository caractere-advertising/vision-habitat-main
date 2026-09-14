<?php
// Layout ACF 

$type = get_sub_field('quel_type');

$slides = [];

if($type = 'references'){
    $slides = get_sub_field('references');
} else {
    $slides = get_sub_field('projects');
} ?>

<section class="section-gallery-reference from-bottom">
    <div class="swiper swiper-gallery-reference">
        <div class="swiper-wrapper">
            <?php foreach($slides as $s):
                $image       = get_field('galerie', $s->ID)[0];
                $titre       = $s->post_title;
                $description = $s->post_content;
                $link        = get_permalink($s->ID);
            ?>

            <div class="swiper-slide">
                <div class="gallery-slide-inner">
                    <?php if($link): echo '<a href="'.$link.'">'; endif;?>
                        <div class="gallery-image">
                            <?php if ( $image ) : ?>
                                <img src="<?= esc_url( $image['url'] ); ?>" loading="lazy" alt="<?= esc_attr( $image['alt'] ); ?>">
                            <?php endif; ?>
                        </div>
                        <div class="gallery-info">
                            <?php if ( $titre ) : ?><p class="gallery-titre"><?= esc_html( $titre ); ?></p><?php endif;
                            if ( $description ) : ?><p class="gallery-description"><?= esc_html( $description ); ?></p><?php endif; ?>
                        </div>
                    <?php if($link): '</a>'; endif;?>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <div class="gallery-pagination">
            <div class="swiper-pagination-reference-gallery"></div>
        </div>
    </div>
    <div class="gallery-nav">
        <button class="gallery-reference-next">
            <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
                </g>
            </svg>
        </button>
        
        <button class="gallery-reference-prev">
            <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"></path>
                </g>
            </svg>
        </button>
    </div>
    <div class="container content-scrollbar">
        <div class="swiper-scrollbar-reference-galerie-slider"></div>
    </div>
</section>