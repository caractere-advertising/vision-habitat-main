<?php
$image = get_sub_field("image");
$title = get_sub_field("title");
$paragraph = get_sub_field("paragraph");
$link = get_sub_field("link");
?>

<section>
    <div class="container">
        <div>
            <img src="" alt="" <?php echo $image ?>>
        </div>
        <div>
            <h4><?php echo $title ?></h4>
            <p> <?php echo $paragraph ?> </p>
            <div class="link_container">
                <a href="#"><?php echo $link ?></a>
            </div>
        </div>
    </div>
</section>