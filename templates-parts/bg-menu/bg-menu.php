
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
    <a href="<?= esc_url(home_url('/')) ?>" class="menu-burger-left-logo">
        <img src="<?php echo esc_url($logo_bg_menu['url']) ?>" alt="<?php echo esc_attr($logo_bg_menu['alt']) ?>">
    </a>
<?php endif; ?>

        <div class="menu-burger-left-bottom">
            <?php if ($burger_info_contact) :
                $info = $burger_info_contact[0]; ?>

                <div class="menu-burger-contact">
                    <p class="menu-burger-contact-name"><?php echo ($info['site-name']) ?></p>
                    <p><?php echo($info['street-name']) ?></p>
                    <p><?php echo($info['locality']) ?></p>
                    <p><strong>Tél. </strong><?php echo($info['tel-num']) ?></p>
                    <p><strong>Mail : </strong><?php echo esc_html($info['mail']) ?></p>
                    <p><?php echo($info['tva']) ?></p>
                </div>
            <?php endif; ?>
            
            <?php if ($burger_socials) : ?>
                <div class="menu-burger-socials">
                    <?php foreach ($burger_socials as $social) :?>
                        <a href="<?php echo($social['lien']) ?>">
                            <img src="<?php echo($social['logo']['url']) ?>" alt="<?php echo($social['logo']['title']) ?>">
                        </a>
                    <?php endforeach; ?>
                </div>
                
            <?php endif; ?>
        </div>
    </div>
    <div class="menu-burger-right">
        <button class="burger-btn burger-btn-close">&#x2715;</button>
        <?php wp_nav_menu([
        <button class="burger-btn
         burger-btn-close">&#x2715;</button>

        <?php wp_nav_menu([
            'theme_location' => 'burger-menu',
            'container'      => 'nav',
            'container_class' => 'burger-nav',
            'menu_class'     => 'burger-menu_list',
        ]); ?>
        <div class="menu-bottom">
 <hr class="burger-hr">
        <div class="burger-bottom">
            <?php if ($footer_nav) : ?>
                <ul class="burger-legal-footer">
                    <?php foreach ($footer_nav as $item) : ?>
                        <li><a href="<?php echo ($item['link']['url']) ?>"><?php echo esc_html($item['link']['title']) ?></a></li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>

           

            <div class="burger-legal-copy">
                <p class="burger-legal-links"><?php echo esc_html($cond_generales['cond']) ?></p>
                <p class="burger-legal-copyright"><?php echo esc_html($cond_generales['copyright']) ?></p>
            </div>      
        </div>
        </div>
    </div>

<<<<<<< HEAD
<<<<<<< HEAD
</section>
        ]); ?>

        <?php if ($footer_nav) : ?>
            <ul class="bg-menu">
                <?php foreach ($footer_nav as $item) : ?>
                    <li>
                        <a href="<?= esc_url($item['link']['url']) ?>">
                            <?= esc_html($item['link']['title']) ?>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>

        <?php if ($cond_generales) : ?>
            <div class="burger-legal">
                <hr>
                <?php foreach ($cond_generales as $row) : ?>
                    <p class="burger-legal_links"><?= esc_html($row['cond']) ?></p>
                    <p class="burger-legal_copyright"><?= esc_html($row['copyright']) ?></p>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
=======
</section>
>>>>>>> 3316a78 (avancement bg-menu)
=======
</section>
>>>>>>> 052211e (avancement bg-menu)
