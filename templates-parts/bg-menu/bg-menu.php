<?php
//champs page d'option afc
//logo-social-media (répéteur -> image, lien)
//menu-burger-footer(répéteur ->lien)
//cond_générales (répéteur ->cond(texte),copyright(texte))
//bg-menu-image (image)
//infos-contact(site-name(texte),(street-name(texte),locality(texte), tel-num(texte),mail(texte),tva(texte)))
//logo_bg_menu(image)

  $burger_image   = get_field('bg-menu-image', 'option');
       $burger_info_contact = get_field('infos-contact', 'option');
       $burger_socials = get_field('logo-social-media', 'option');
       $cond_generales     = get_field('cond-generales', 'option');
       $footer_nav= get_field("menu-burger-footer",'option');
       $logo_bg_menu = get_field("logo_bg_menu",'option');

?>

<section class="menu-burger">
<div class="menu-burger-left container">
      <img src="<?php echo $burger_image['url']; ?>" alt="<?php echo $burger_image['alt']; ?> " >
      <div>
     <?php if ($burger_info_contact) : ?>
    <?php foreach ($burger_info_contact as $info) : ?>
        <p><?php echo ($info['site-name']) ?></p>
        <p><?php echo ($info['street-name']) ?></p>
        <p><?php echo ($info['locality']) ?></p>
        <p><?php echo ($info['tel-num']) ?></p>
        <p><?php echo ($info['mail']) ?></p>
        <p><?php echo ($info['tva']) ?></p>
    <?php endforeach; ?>
<?php endif; ?>
      </div>
      <div>
        <?php echo $burger_socials ?>
      </div>
</div>
<div class="menu-burger-right">
<?php
wp_nav_menu([
    'theme_location' => 'burger-menu',
    'container'      => 'nav',
    'container_class' => 'burger-nav',
    'menu_class'     => 'burger-menu__list',
]);
?>
<div> <?php if ($footer_nav) : ?>
    <ul>
        <?php foreach ($footer_nav as $item) : ?>
            <li>
                <a href="<?= esc_url($item['link']['url']) ?>"><?= esc_html($item['link']['title']) ?></a>
            </li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?></div>
</div>
</section>