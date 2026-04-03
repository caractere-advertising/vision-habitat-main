<?php 

if (is_home()) {
    $title = get_the_title(get_option('page_for_posts'));
} else {
    $title = get_the_title() ?? '';
}

$cta   = get_sub_field('cta') ?? array('url'=>'#','title'=>'Lorem');

?>

<div class="section-service-header">
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