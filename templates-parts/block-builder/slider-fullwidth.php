<section class="slider-fullwidth">
    <div class="swiper swiper-fullwidth">
        <div class="swiper-wrapper">
            <?php

                $slide = get_sub_field('slide'); // Récupère les données du slide depuis le builder

                foreach($slide as $s) {
                    $img = $s['image'];?>

                        <div class="swiper-slide">
                            <div class="background">
                                <img src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>"> 
                            </div>
                            <div class="content">
                                <h2><?php echo $s['titre']; ?></h2>
                                <a href="<?php echo $s['cta']['url']; ?>" class="btn btn-primary" target="<?php echo $s['cta']['target']; ?>">
                                    <?php echo $s['cta']['title']; ?>
                                </a>
                            </div>
                        </div>
                    <?php
                }
            ?>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next btn-next-full"></div>
        <div class="swiper-button-prev btn-prev-full"></div>
    </div>
</section>

