
<?php 
$partenaires = get_field('gallerie-partenaires','option');
?>




    <div class="gallerie-partenaire swiper swiper-partenaire">
      <div class="swiper-wrapper" >
<?php foreach ($partenaires as $partenaire) :
$image = $partenaire['image'];
$lien = $partenaire['lien']; ?>
<div class="partenaire swiper-slide">
<a href="<?php echo $lien['url']; ?>">
        <?php if ($image) : ?>
          <img class="image"src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
        <?php endif; ?>
      </a>
</div>
<?php endforeach ?>
<div class="gallery-prev"></div>
<div class="gallery-next"> </div>
</div>
    </div>