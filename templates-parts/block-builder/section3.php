<?php var_dump(get_sub_field('card')); ?>
<?php
<<<<<<< HEAD
// Layout ACF : card_solutions
// Champs : card (répéteur)
//   └── card_image (image), card_category (texte), card_link (lien)

$cards = get_sub_field('card');
?>

<?php if ($cards) : ?>
<section class="section-card-solutions">
    <div class="cards-grid">
        <?php foreach ($cards as $c) :
            $image    = $c['card_image'];
            $category = $c['card_category'];
            $link     = $c['card_link'];
        ?>
        <div class="card">

            <div class="card-image">
                <?php if ($image) : ?>
                    <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                <?php endif; ?>
                <?php if ($link) : ?>
                    <a href="<?php echo $link['url']; ?>" class="card-plus">+</a>
                <?php endif; ?>
            </div>

            <div class="card-body">
                <?php if ($category) : ?>
                    <span class="card-category"><?php echo $category; ?></span>
                <?php endif; ?>
                <?php if ($link) : ?>
                    <p class="card-title"><?php echo $link['title']; ?></p>
                <?php endif; ?>
            </div>

        </div>
        <?php endforeach; ?>
    </div>
</section>
<?php endif; ?>
=======
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
>>>>>>> b7f71c0a3d19fa39b86f8a027121a014c2283ad6
