
<?php
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
//champs page d'option acf
//logo-social-media (répéteur -> image, lien)
//menu-burger-footer(répéteur ->lien)
//cond_générales (groupe ->cond(texte),copyright(texte))
//bg-menu-image (image)
//infos-contact(site-name(texte),street-name(texte),locality(texte), tel-num(texte),mail(texte),tva(texte))
//logo_bg_menu(image)
>>>>>>> bb29b64 (structure html)

=======
>>>>>>> 50d5368 (fin 30-3)
=======

>>>>>>> 69c6bb2 (burger-menu finetuning)
$burger_image        = get_field('bg-menu-image', 'option');
$burger_info_contact = get_field('infos-contact', 'option');
$burger_socials      = get_field('logo-social-media', 'option');
$cond_generales      = get_field('cond-generales', 'option') ?? '';
$footer_nav          = get_field('menu-burger-footer', 'option');
$logo_bg_menu        = get_field('logo_bg_menu', 'option');

?>

<section class="menu-burger">
    <div class="menu-burger-left">
        <?php if ($burger_image) : ?>
            <img src="<?= esc_url($burger_image['url']) ?>" alt="<?= esc_attr($burger_image['alt']) ?>"/>
        <?php endif; ?>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6bdd130 (Quick fix : Ajout flêche .svg pour cta + menu burger)
        <?php if ($logo_bg_menu) : ?>
            <a href="<?= esc_url(home_url('/')) ?>" class="menu-burger-left-logo">
                <img src="<?=  esc_url($logo_bg_menu['url']) ?>" alt="<?=  esc_attr($logo_bg_menu['alt']) ?>">
            </a>
        <?php endif; ?>
<<<<<<< HEAD

        <div class="menu-burger-left-bottom">
<<<<<<< HEAD
<<<<<<< HEAD
            <?php if ($burger_info_contact) :
                $info = $burger_info_contact[0];

                $tel  = $info['tel-num']; 
                $linkTel = preg_replace('/[^0-9+]/', '', $tel);
                $linkTel = preg_replace('/^\+320/', '0032', $linkTel);
                
                ?>

<<<<<<< HEAD
<?php var_dump($burger_info_contact); ?>
<?php if ($burger_info_contact) : ?>
=======
>>>>>>> 50d5368 (fin 30-3)
=======
<?php var_dump($burger_info_contact); ?>
<?php if ($burger_info_contact) : ?>
>>>>>>> 8054b78 (add var_dump())
            <?php if ($burger_info_contact) : ?>
                <?php $info = $burger_info_contact[0]; ?>
=======
>>>>>>> 69c6bb2 (burger-menu finetuning)
                <div class="menu-burger-contact">
                    <p class="menu-burger-contact-name"><?=  ($info['site-name']) ?></p>

                    <div class="contact-adresse from-left">
                        <p class="from-left"><?= ($info['street-name']) ?></p>
                        <p class="from-left"><?= ($info['locality']) ?></p>
                    </div>
                    
                    <div class="contact-tel-mail">
                        <p class="from-left"><strong>Tél. </strong><a href="tel:<?= $linkTel;?>"><?= $tel; ?></a></p>
                        <p class="from-left"><strong>Mail : </strong><a href="mailto:<?=  esc_html($info['mail']) ?>"><?=  esc_html($info['mail']) ?></a></p>
                        <p class="from-left"><strong>TVA </strong><?= ($info['tva']) ?></p>
                    </div>
=======
       <?php if ($logo_bg_menu) : ?>
    <a href="<?= esc_url(home_url('/')) ?>" class="menu-burger-left-logo">
        <img src="<?php echo esc_url($logo_bg_menu['url']) ?>" alt="<?php echo esc_attr($logo_bg_menu['alt']) ?>">
    </a>
<?php endif; ?>
=======
>>>>>>> 6bdd130 (Quick fix : Ajout flêche .svg pour cta + menu burger)

        <div class="menu-burger-left-bottom">
            <?php if ($burger_info_contact) :
                $info = $burger_info_contact[0];

                $tel  = $info['tel-num']; 
                $linkTel = preg_replace('/[^0-9+]/', '', $tel);
                $linkTel = preg_replace('/^\+320/', '0032', $linkTel);
                
                ?>

                <div class="menu-burger-contact">
<<<<<<< HEAD
                    <p class="menu-burger-contact-name"><?php echo ($info['site-name']) ?></p>
                    <p><?php echo($info['street-name']) ?></p>
                    <p><?php echo($info['locality']) ?></p>
                    <p><strong>Tél. </strong><?php echo($info['tel-num']) ?></p>
                    <p><strong>Mail : </strong><?php echo esc_html($info['mail']) ?></p>
                    <p><?php echo($info['tva']) ?></p>
>>>>>>> 69c6bb2 (burger-menu finetuning)
=======
                    <p class="menu-burger-contact-name"><?=  ($info['site-name']) ?></p>

                    <div class="contact-adresse">
                        <p><?= ($info['street-name']) ?></p>
                        <p><?= ($info['locality']) ?></p>
                    </div>
                    
                    <div class="contact-tel-mail">
                        <p><strong>Tél. </strong><a href="tel:<?= $linkTel;?>"><?= $tel; ?></a></p>
                        <p><strong>Mail : </strong><a href="mailto:<?=  esc_html($info['mail']) ?>"><?=  esc_html($info['mail']) ?></a></p>
                        <p><strong>TVA </strong><?= ($info['tva']) ?></p>
                    </div>
>>>>>>> 6bdd130 (Quick fix : Ajout flêche .svg pour cta + menu burger)
                </div>
            <?php endif; ?>
            
            <?php if ($burger_socials) : ?>
<<<<<<< HEAD
                <div class="menu-burger-socials from-left">
                    <?php foreach ($burger_socials as $social) :?>
                        <a href="<?= ($social['lien']) ?>">
                            <img src="<?= ($social['logo']['url']) ?>" alt="<?= ($social['logo']['title']) ?>">
=======
                <div class="menu-burger-socials">
                    <?php foreach ($burger_socials as $social) :?>
<<<<<<< HEAD
                        <a href="<?php echo($social['lien']) ?>">
                            <img src="<?php echo($social['logo']['url']) ?>" alt="<?php echo($social['logo']['title']) ?>">
>>>>>>> 69c6bb2 (burger-menu finetuning)
=======
                        <a href="<?= ($social['lien']) ?>">
                            <img src="<?= ($social['logo']['url']) ?>" alt="<?= ($social['logo']['title']) ?>">
>>>>>>> 6bdd130 (Quick fix : Ajout flêche .svg pour cta + menu burger)
                        </a>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div class="menu-burger-right">
        <button class="burger-btn burger-btn-close">&#x2715;</button>
        <?php wp_nav_menu([
        <button class="burger-btn
         burger-btn-close">&#x2715;</button>
=======
>>>>>>> 69c6bb2 (burger-menu finetuning)

=======
>>>>>>> 5e726ef (Ajout champs ACF page construire + contact / Ajout SCSS nouvelles sections + installation d'une dependence pour le parallax. + correction et optimisations de certaines pages)
    <div class="menu-burger-right">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
         <!-- <button class="burger-btn burger-btn-close">&#x2715;</button> -->
=======
=======
>>>>>>> 553e536 (suite burger menu)
<<<<<<< HEAD
=======
<<<<<<< header
>>>>>>> e0c9354 (avancement bg-menu)
=======
>>>>>>> bb29b64 (structure html)

        <button class="burger-btn burger-btn-close">&#x2715;</button>
>>>>>>> 0629f4f (avancement bg-menu)
=======
>>>>>>> 69c6bb2 (burger-menu finetuning)

    <div class="menu-burger-right">
        <!-- <button class="burger-btn burger-btn-close">&#x2715;</button> -->

        <?php wp_nav_menu([
            'theme_location' => 'burger-menu',
            'container'      => 'nav',
            'container_class' => 'burger-nav from-right',
            'menu_class'     => 'burger-menu_list',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        ]);?>
=======
<<<<<<< HEAD
=======

>>>>>>> bb29b64 (structure html)
=======
>>>>>>> 644e1b3 (suite burger menu)
        ]); ?>
<<<<<<< HEAD
>>>>>>> 0629f4f (avancement bg-menu)

        <div class="menu-bottom">
            <div class="burger-bottom">
                <?php if ($footer_nav) : ?>
                    <ul class="burger-legal-footer">
                        <?php foreach ($footer_nav as $item) : ?>
                            <li><a href="<?=  ($item['link']['url']) ?>"><?=  esc_html($item['link']['title']) ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>

<<<<<<< HEAD
=======
=======
        <div class="menu-bottom">
 <hr class="burger-hr">
        <div class="burger-bottom">
>>>>>>> 69c6bb2 (burger-menu finetuning)
            <?php if ($footer_nav) : ?>
                <ul class="burger-legal-footer">
                    <?php foreach ($footer_nav as $item) : ?>
                        <li><a href="<?php echo ($item['link']['url']) ?>"><?php echo esc_html($item['link']['title']) ?></a></li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>

<<<<<<< HEAD
            <hr class="burger-hr">

<<<<<<< HEAD
            <?php var_dump($cond_generales); ?>
            <?php if ($cond_generales) : ?>
>>>>>>> 50d5368 (fin 30-3)
=======
            
>>>>>>> 8054b78 (add var_dump())
                <div class="burger-legal-copy">
                    <p class="burger-legal-links"><a href="<?= $cond_generales['cond']['url'] ;?>"><?= esc_html($cond_generales['cond']['title']); ?></a></p>
                    <p class="burger-legal-copyright"><?= esc_html($cond_generales['copyright']) ?></p>
<<<<<<< HEAD
                </div>      
            </div>
=======
                </div>
                
            <?php endif; ?>

>>>>>>> 50d5368 (fin 30-3)
        </div>
    </div>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
</section>
<<<<<<< HEAD
=======
>>>>>>> 553e536 (suite burger menu)
<<<<<<< HEAD
        ]); ?>

        <?php if ($footer_nav) : ?>
            <ul class="bg-menu">
                <?php foreach ($footer_nav as $item) : ?>
                    <li>
                        <a href="<?= esc_url($item['link']['url']) ?>">
                            <?= esc_html($item['link']['title']) ?>
                        </a>
=======
=======
        ]);
        ?>
=======
        ]); ?>
>>>>>>> d4eec9f (suite burger menu)

        <?php if ($footer_nav) : ?>
            <ul class="bg-menu">
                <?php foreach ($footer_nav as $item) : ?>
                    <li>
<<<<<<< HEAD
                        <a href="<?php echo $item['link']['url'];
                                    ?>"><?php echo $item['link']['title']; ?></a>
>>>>>>> 0629f4f (avancement bg-menu)
=======
                        <a href="<?= esc_url($item['link']['url']) ?>">
                            <?= esc_html($item['link']['title']) ?>
                        </a>
>>>>>>> 553e536 (suite burger menu)
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>

        <?php if ($cond_generales) : ?>
            <div class="burger-legal">
                <hr>
                <?php foreach ($cond_generales as $row) : ?>
<<<<<<< HEAD
<<<<<<< HEAD
                    <p class="burger-legal_links"><?= esc_html($row['cond']) ?></p>
                    <p class="burger-legal_copyright"><?= esc_html($row['copyright']) ?></p>
=======
                    <p class="burger-legal_links"><?php echo
                                                    $row['cond']; ?></p>
                    <p class="burger-legal_copyright"><?php echo
                                                        $row['copyright']; ?></p>
>>>>>>> 0629f4f (avancement bg-menu)
=======
                    <p class="burger-legal_links"><?= esc_html($row['cond']) ?></p>
                    <p class="burger-legal_copyright"><?= esc_html($row['copyright']) ?></p>
>>>>>>> 553e536 (suite burger menu)
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

    </div>
<<<<<<< HEAD
</section>
=======
</section>
>>>>>>> 69c6bb2 (burger-menu finetuning)
=======

<<<<<<< HEAD
<<<<<<< HEAD
    </section>
>>>>>>> 401cb8c (avancement bg-menu)
<<<<<<< HEAD
>>>>>>> 0629f4f (avancement bg-menu)
=======
=======
</section>
>>>>>>> d4eec9f (suite burger menu)
<<<<<<< HEAD
>>>>>>> 553e536 (suite burger menu)
=======
=======
</section>
>>>>>>> aa53866 (avancement bg-menu)
>>>>>>> e0c9354 (avancement bg-menu)
=======
>>>>>>> bb29b64 (structure html)
=======
</section>
>>>>>>> 3316a78 (avancement bg-menu)
=======
</section>
>>>>>>> 052211e (avancement bg-menu)
=======
</section>
>>>>>>> 1fb1278 (structure html)
=======
           

            <div class="burger-legal-copy">
                <p class="burger-legal-links"><?php echo esc_html($cond_generales['cond']) ?></p>
                <p class="burger-legal-copyright"><?php echo esc_html($cond_generales['copyright']) ?></p>
            </div>      
        </div>
=======
        ]);?>

        <div class="menu-bottom">
            <div class="burger-bottom">
                <?php if ($footer_nav) : ?>
                    <ul class="burger-legal-footer">
                        <?php foreach ($footer_nav as $item) : ?>
                            <li><a href="<?=  ($item['link']['url']) ?>"><?=  esc_html($item['link']['title']) ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>

                <div class="burger-legal-copy">
                    <p class="burger-legal-links"><a href="<?= $cond_generales['cond']['url'] ;?>"><?= esc_html($cond_generales['cond']['title']); ?></a></p>
                    <p class="burger-legal-copyright"><?= esc_html($cond_generales['copyright']) ?></p>
                </div>      
            </div>
>>>>>>> 6bdd130 (Quick fix : Ajout flêche .svg pour cta + menu burger)
        </div>
    </div>
</section>
>>>>>>> 69c6bb2 (burger-menu finetuning)
