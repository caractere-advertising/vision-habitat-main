<?php 

if (is_home()) {
    $title = get_the_title(get_option('page_for_posts'));
} else {
    $title = get_the_title() ?? '';
}

$colorImage = get_sub_field('couleur_ou_image');
$colorImage == 'couleur' ? $bg =  get_sub_field('arriere-plan') : $bg = "url('" . get_sub_field('background') . "')";

$height = get_sub_field('hauteur');

$style = "style=\"background:" . $bg . ";";
$style .= "height:". $height . "vh;\"";

$cta   = get_sub_field('cta') ?? array('url'=>'#','title'=>'Lorem');

?>

<div class="section-service-header" <?= $style;?>>
    <div class="container flex">
        <div class="col colg">
            <h1 class="from-left"><?= esc_html($title);?></h1>
        </div>
        <div class="col cold">
            <div class="block-cta from-right">
                <?php if($cta):?>
                    <a href="<?= $cta['url'];?>" class="btn-cta"><?= $cta['title'];?></a>
                <?php endif;?>
            </div>
        </div>
    </div>
</div>