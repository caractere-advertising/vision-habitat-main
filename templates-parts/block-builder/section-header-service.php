<?php 

if (is_home()) {
    $title = get_the_title(get_option('page_for_posts'));
} else {
    $title = get_the_title() ?? '';
}

$colorImage = get_sub_field('couleur_ou_image');
$colorImage == 'couleur' ? $bg =  get_sub_field('arriere-plan') : $bg = "url('" . get_sub_field('background') . "')";

if($bg == 'rgb(255, 255, 255)'){
$font = 'color:#05233c !important;' ;
} else {
$font ='test';
}

$height = get_sub_field('hauteur');

$style = "style=\"background:" . $bg . ";";
$style .= "height:". $height . "vh;\"";

$styleH1 = "style=\"";
$styleH1 .= $font . "\"";  

$cta   = get_sub_field('cta') ?? array('url'=>'#','title'=>'Lorem');

?>

<div class="section-service-header" <?= $style;?>>
    <div class="container flex">
        <div class="col colg">
            <h1 class="from-left" <?= $styleH1;?>><?= esc_html($title);?></h1>
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