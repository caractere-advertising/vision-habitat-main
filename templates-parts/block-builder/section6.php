<?php 
$categorie = get_sub_field('categorie');
$details   = get_sub_field('details');
$link      = get_sub_field('link');
$paragraph = get_sub_field('paragraph');
$gd_image = get_sub_field('gd_image');
$pt_image = get_sub_field('pt_image');
?>

<section>
    <div class="container">
        <div class="separator" ></div>
    <div class="image_container">
    <img src="" alt="" class="gd_image">
    <img src="" alt="" class="pt_image">
    </div>
    <p><?php echo $categorie ?></p>
    <p><?php echo $details ?></p>
    <p> <?php echo $paragraph ?> </p>
    <a href="#"><?php echo $link ?></a>
   




    </div>
</section>