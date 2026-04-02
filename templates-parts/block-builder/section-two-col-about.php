<?php
// champs titre wisywyg, intro wysiwyf,cta lien

$titre = get_sub_field('titre');
$intro = get_sub_field('intro');
$cta = get_sub_field('cta');
?>

<section class="section-two-col">
    <div class="two-col-inner container flex">
        <div class="two-col-left col-50">
            <div class="two-col-title ">
                <?php echo $titre ?>
            </div>
        </div>
        <div class="two-col-right col-50">
            <div class="two-col-paragraph">
                <?php echo $intro ?>
            </div>
            <a href="http://" class="btn-cta"><?php echo $cta['url'] ?></a>
        </div>
        

    </div>
</section>