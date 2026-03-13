<?php var_dump(get_sub_field('card')); ?>
<?php
$card           = get_sub_field('card');
$card_category           = get_sub_field('card_category');
$card_image           = get_sub_field('card_image');
$card_link           = get_sub_field('card_link');
?>


<?php if( $cards ) : ?>
<section class="card-solutions">
  <div class="container">
    <?php foreach( $cards as $c ) : ?>
      <div class="card">
        <p><?php echo $c['card_category']; ?></p>
        <?php if( $c['card_link'] ) : ?>
          <a href="<?php echo $c['card_link']['url']; ?>" 
             class="btn" 
             target="<?php echo $c['card_link']['target']; ?>">
            <?php echo $c['card_link']['title']; ?>
          </a>
        <?php endif; ?>
      </div>
    <?php endforeach; ?>
  </div>
</section>
<?php endif; ?>