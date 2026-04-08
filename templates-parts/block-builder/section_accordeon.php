<?php
$small_title = get_sub_field('site_name');
$image=get_sub_field('image');
$title=get_sub_field('titre');
$links=get_sub_field('lien_accordeon');
?>

<section class="section-accordeon">
<div class="container">
    <div class="col-image">
        <?php if ($image) : ?>
      <img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>">
        <?php endif; ?>
    </div>

    <div class="col-text">
        <div class="section-header">
        <p class="small_title"><?php echo $small_title ?></p>
   
    <div class="title"><?php echo $title ?></div>
        </div>
    <ul class="accordeon">
        <?php foreach ($links as $link): ?>
        <li class="accordeon_el">
            <a href="<?= esc_url($link['lien']['url']) ?>"><?= esc_html($link['lien']['title']) ?></a>
</li>
        
        <?php endforeach; ?>
        
       
    </ul>
 </div>
</div>

</section>
