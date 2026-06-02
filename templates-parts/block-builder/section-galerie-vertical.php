<?php $slides = get_sub_field('slides-vertical'); ?>


<section class="section-galerie-vertical">
    <div class="swiper swiper-vertical">
        <div class="swiper-wrapper">
            <?php if($slides): foreach($slides as $s):
                $image = $s['image'];
                $titre = $s['titre'];
                $texte = $s['texte'];
                $cta   = $s['cta'];?>

                <div class="swiper-slide flex">
                    <div class="colg col-50">
                        <div class="block-img">
                            <?php if ( $image ) : ?>
                                <img src="<?= esc_url( $image['url'] ); ?>" loading="lazy" alt="<?= esc_attr( $image['title'] ?? '' ); ?>"/>
                            <?php endif; ?>
                        </div>
                   </div>

                   <div class="cold col-50">
                        <div class="content from-right">
                            <?= wp_kses_post( $titre ); ?>
                            <?= wp_kses_post( $texte ); ?>
                            <?php if ( $cta ) : ?>
                                <a href="<?= esc_url( $cta['url'] ); ?>" class="btn-cta"><?= esc_html( $cta['title'] ); ?></a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; endif;?>
        </div>
        <div class="swiper-pagination swiper-pagination-vertical"></div>
    </div>
</section>
