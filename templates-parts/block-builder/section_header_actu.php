<?php 

$title = get_field('title') ?? '';
$cta   = get_field('cta') ?? array('url' => '', 'title' => '');

?>

<div class="section-service-header">
    <div class="container flex">
        <div class="col colg">
            <h1><?= $title;?></h1>
        </div>
        <div class="col cold">
            <div class="block-cta">
                <?php if($cta):?>
                    <a href="<?= $cta['url'];?>" class="btn-cta"><?= $cta['title'];?></a>
                <?php endif;?>
            </div>
        </div>
    </div>
</div>