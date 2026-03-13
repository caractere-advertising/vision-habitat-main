<?php 
$categorie = get_sub_field('categorie');
$details   = get_sub_field('details');
$link      = get_sub_field('link');
$paragraph = get_sub_field('paragraph');


?>
<?php if( $details ) : ?>
<section>
<div>
<p><?php echo $categorie; ?></p>
<p><?php echo $details; ?></p>
<p><?php echo $paragraph; ?></p>
<?php if( is_array($link) && !empty($link['url']) ) : ?>
    <a href="<?php echo esc_url($link['url']); ?>"><?php echo esc_html($link['title']); ?></a>
<?php endif; ?>
</div>
</section>
<?php endif; ?>