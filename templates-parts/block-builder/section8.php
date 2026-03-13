<?php 
$name = get_sub_field('name');
$citation   = get_sub_field('citation');
$link      = get_sub_field('link');
$title = get_sub_field('title');

?>

<section>
   <div class="container">
         <div class="citation_name">
            <h3><?php echo $name ?></h3>
            <p><?php echo $citation ?></p>
        </div>
        <div class="citation_blue">
            <p><?php echo $title?></p>
            <a href="#"><?php echo $link ?></a>

        </div>
   </div>
</section>