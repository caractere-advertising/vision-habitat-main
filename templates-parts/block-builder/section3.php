<?php
$card           = get_sub_field('card');
?>


<?php if($card):?>

<section class="card-solutions">
    <div class="container">
        <?php 
        foreach($card as $c) {
            $category = $c['card_category'];
            $card_image     = $c['card_image'];
            $link = $c['card_link'];
            ?>
            <div class="card">
                <p id="card_category"><?php echo $category; ?></p>
                <a href="<?php echo $link['url']; ?>" class="btn" target="<?php echo $link['target']; ?>">
                    <?php echo $link['title']; ?>
                </a>
            </div>
        <?php } ?>
    </div>
</section>
<?php endif;?>
