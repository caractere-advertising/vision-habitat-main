<?php 
$title = get_sub_field('title');
$paragraph   = get_sub_field('paragraph');
$link      = get_sub_field('link');
$img      = get_sub_field('image');
$location     = get_sub_field('location');
$price      = get_sub_field('price');


?>

<section>
    <div class="container">
        <div class="section_blue">
            <h3><?php echo $title?></h3>
            <p><?php echo $paragraph ?></p>
            <a href="#"><?php echo $link ?></a>
        </div>
        <div class="section_photo">
            <div>
                <img src="" alt="" <?php echo $img ?>>
            </div>
            <p><?php echo $location ?></p>
            <p><?php echo $price ?></p>
        </div>
    </div>

</section>

// slider?