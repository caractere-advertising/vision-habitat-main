
<?php
//champs page d'option acf
//logo-social-media (répéteur -> image, lien)
//menu-burger-footer(répéteur ->lien)
//cond_générales (groupe ->cond(texte),copyright(texte))
//bg-menu-image (image)
//infos-contact(site-name(texte),street-name(texte),locality(texte), tel-num(texte),mail(texte),tva(texte))
//logo_bg_menu(image)

$burger_image        = get_field('bg-menu-image', 'option');
$burger_info_contact = get_field('infos-contact', 'option');
$burger_socials      = get_field('logo-social-media', 'option');
$cond_generales      = get_field('cond-generales', 'option');
$footer_nav          = get_field('menu-burger-footer', 'option');
$logo_bg_menu        = get_field('logo_bg_menu', 'option');
?>
<section class="menu-burger">

    <div class="menu-burger-left">

        <?php if ($burger_image) : ?>
            <img src="<?= esc_url($burger_image['url']) ?>" alt="<?= esc_attr($burger_image['alt']) ?>"/>
        <?php endif; ?>

        <?php if ($logo_bg_menu) : ?>
            <a href="<?= esc_url(home_url('/')) ?>" class="menu-burger-left_logo">
                <img src="<?= esc_url($logo_bg_menu['url']) ?>" alt="<?= esc_attr($logo_bg_menu['alt']) ?>"/>
            </a>
        <?php endif; ?>

        <div class="menu-burger-left-bottom">
<?php var_dump($burger_info_contact); ?>
<?php if ($burger_info_contact) : ?>
            <?php if ($burger_info_contact) : ?>
                <?php $info = $burger_info_contact[0]; ?>
                <div class="menu-burger-contact">
                    <p class="menu-burger-contact-name"><?= esc_html($info['site-name']) ?></p>
                    <p><?= esc_html($info['street-name']) ?></p>
                    <p><?= esc_html($info['locality']) ?></p>
                    <p><strong>Tél. </strong><?= esc_html($info['tel-num']) ?></p>
                    <p><strong>Mail : </strong><?= esc_html($info['mail']) ?></p>
                    <p><?= esc_html($info['tva']) ?></p>
                </div>
            <?php endif; ?>

            <?php if ($burger_socials) : ?>
                <div class="menu-burger-socials">
                    <?php foreach ($burger_socials as $social) : ?>
                        <a href="<?= esc_url($social['lien']) ?>">
                            <img src="<?= esc_url($social['image']['url']) ?>" alt="<?= esc_attr($social['image']['alt']) ?>">
                        </a>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>

        </div>
    </div>
    <div class="menu-burger-right">

        <button class="burger-btn burger-btn-close">&#x2715;</button>

    <div class="menu-burger-right">
        <button class="burger-btn
         burger-btn-close">&#x2715;</button>

        <?php
        wp_nav_menu([
            'theme_location' => 'burger-menu',
            'container'      => 'nav',
            'container_class' => 'burger-nav',
            'menu_class'     => 'burger-menu_list',

        ]); ?>

        <div class="burger-bottom">

            <?php if ($footer_nav) : ?>
                <ul class="burger-legal-footer">
                    <?php foreach ($footer_nav as $item) : ?>
                        <li>
                            <a href="<?= esc_url($item['link']['url']) ?>">
                                <?= esc_html($item['link']['title']) ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>

            <hr class="burger-hr">

            
                <div class="burger-legal-copy">
                    <p class="burger-legal-links"><?= esc_html($cond_generales['cond']) ?></p>
                    <p class="burger-legal-copyright"><?= esc_html($cond_generales['copyright']) ?></p>
                </div>
                
            <?php endif; ?>

        </div>
    </div>

</section>
