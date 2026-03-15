<?php
$title =get_sub_field("title");
$image=get_sub_field("image");
$cat=get__sub_field("category");
$paragraph = get_sub_field("paragraph");
$link=get_sub_field("link");
?>
<section>
    <div class="container">
        <h3><?php echo $title ?></h3>
        <div class="big_article">
            <article>
                <img src="" alt="" <?php echo $image ?>>
                <p><?php echo $cat ?></p>
                <p><?php echo $paragraph ?></p>

            </article>
        </div>

        <div class="small_article">
            <article>
                <img src="" alt="" <?php echo $image ?>>
                <p><?php echo $cat ?></p>
                <p><?php echo $paragraph ?></p>

            </article>

            <article>
                <img src="" alt="" <?php echo $image ?>>
                <p><?php echo $cat ?></p>
                <p><?php echo $paragraph ?></p>

            </article>

        </div>
        
        <div>
            <a href="#"><?php echo $link ?></a>
        </div>
    </div>
</section>