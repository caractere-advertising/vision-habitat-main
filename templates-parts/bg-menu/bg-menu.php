   <?php
//champs page d'option afc
//logo-social-media (répéteur -> image, lien)
//menu-burger-footer(répéteur ->lien)
//cond_générales (répéteur ->cond(texte),copyright(texte))
//bg-menu-image (image)
//infos-contact(site-name(texte),(street-name(texte),locality(texte), tel-num(texte),mail(texte),tva(texte)))
//logo_bg_menu(image)

$burger_image        = get_field('bg-menu-image', 'option');
$burger_info_contact = get_field('infos-contact', 'option');
$burger_socials      = get_field('logo-social-media', 'option');
$cond_generales      = get_field('cond-generales', 'option');
$footer_nav          = get_field('menu-burger-footer','option');
$logo_bg_menu        = get_field('logo_bg_menu','option');

?>
   
   <div class="menu-burger-left">
        <?php if ($burger_image) : ?>
            <img src="<?= $burger_image['url']; ?>" alt="<?= $burger_image['alt']; ?>">
        <?php endif; ?>

        <div class="menu-burger-left_overlay">
            <?php if ($logo_bg_menu) : ?>
                <a href="<?= home_url('/'); ?>"
                    class="menu-burger-left_logo">
                    <img src="<?= $logo_bg_menu['url']; ?>"  alt="<?= $logo_bg_menu['alt']; ?>">
                </a>
            <?php endif; ?>

            <div class="menu-burger-left_bottom">
                <?php if ($burger_info_contact) : ?>
                    <?php $info = $burger_info_contact[0]; ?>
                    <div class="menu-burger-contact">
                        <p class="menu-burger-contact_name"><?= $info['site-name']; ?></p>
                        <p><?= $info['street-name']; ?></p>
                        <p><?= $info['locality']; ?></p>
                        <p><strong>Tél. </strong><?= $info['tel-num']; ?></p>
                        <p><strong>Mail : </strong><?= $info['mail']; ?></p>
                        <p><?= $info['tva']; ?></p>
                    </div>
                <?php endif; ?>

                <?php if ($burger_socials) : ?>
                    <div class="menu-burger-socials">
                        <?php foreach ($burger_socials as $social) : ?>
                            <a href="<?= $social['lien']; ?>" target="_blank">
                                <img src="<?= $social['image']['url']; ?>" alt="<?= $social['image']['alt']; ?>">
                            </a>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <div class="menu-burger-right">
        <button class="burger-btn burger-btn-close">&#x2715;</button>

        <?php wp_nav_menu([
            'theme_location' => 'burger-menu',
            'container'      => 'nav',
            'container_class' => 'burger-nav',
            'menu_class'     => 'burger-menu_list',
        ]); ?>

        <?php if ($footer_nav) : ?>
            <ul class="burger-cta-list">
                <?php foreach ($footer_nav as $item) : ?>
                    <li>
                        <a href="<?= $item['link']['url']; ?>"><?= $item['link']['title']; ?></a>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>

        <?php if ($cond_generales) : ?>
            <div class="burger-legal">
                <hr>
                <p class="burger-legal_links"><?= $cond_generales['cond']; ?></p>
                <p class="burger-legal_copyright"><?= $cond_generales['copyright']; ?></p>
            </div>
        <?php endif; ?>
    </div>
</section>