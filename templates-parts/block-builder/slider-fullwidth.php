<section class="slider-fullwidth">
    <div class="swiper swiper-fullwidth">
        <div class="swiper-wrapper">
            <?php

                $slide  = get_sub_field('slide'); // Récupère les données du slide depuis le builder
                $start  = 01; 
                $length = $slide ? count($slide) : 0; // Vérifie si le slide existe et compte le nombre d'éléments

                foreach($slide as $s) {
                    $img = $s['image'];?>

                        <div class="swiper-slide">
                            <div class="background block-img">
                                <img src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>"> 
                            </div>
                            <div class="content">
                                <?php echo $s['titre']; ?>
                                <a href="<?php echo $s['cta']['url']; ?>" class="btn btn-primary" target="<?php echo $s['cta']['target']; ?>">
                                    <?php echo $s['cta']['title']; ?>
                                </a>
                            </div>
                        </div>
                    <?php
                }
            ?>
        </div>
        <div class="block-pagination">
            <div class="block-scrollbar">
                <p  class="number-slide"><?php echo $start;?></p>
                <div class="swiper-scrollbar"></div>    
                <p class="number-slide"><?php echo $length < 10 ? '0' . $length : $length; ?></p>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</section>