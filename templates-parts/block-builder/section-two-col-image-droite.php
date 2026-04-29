<?php
$small_titre = get_sub_field('Small-titre');
$titre       = get_sub_field('titre');
$intro       = get_sub_field('intro');
$cta         = get_sub_field('cta');
$image       = get_sub_field('image');


?>
<section class="section-two-col-image-droite">
    <div class="two-col-inner container flex">

        <div class="two-col-left col-50">
            <?php if ($small_titre) : ?>
                <div class="two-col-small-titre"><?php echo $small_titre ?></div>
            <?php endif; ?>
            <div class="two-col-title">
                <?php echo $titre ?>
            </div>
            <div class="two-col-paragraph">
                <?php echo $intro ?>
            </div>
            <?php if ($cta) : ?>
                <a href="<?php echo ($cta['url']) ?>" class="btn-cta"><?php echo ($cta['title']) ?></a>
            <?php endif; ?>
        </div>

        <div class="two-col-img-right col-50">
            <?php if ($image) : ?>
                <img src="<?php echo ($image['url']) ?>" alt="<?php echo($image['alt']) ?>">
            <?php endif; ?>
        </div>

    </div>
</section>