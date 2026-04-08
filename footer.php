<?php

$text_ev   = get_field('text_ev','option');
$paragraph = get_field('paragraph','option');
$contact   = get_field('contact','option');
$made_by   = get_field('made_by','option');

?>

<footer class="site-footer">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div class="container">
        <div class="footer-top">
            <div class="footer-left">
                <?php if($text_ev): ?><div class="footer-titre"><?= $text_ev; ?></div><?php endif; ?>
                <svg xmlns="http://www.w3.org/2000/svg" class="footer-arrow" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m7 7 10 10"/><path d="M17 7v10H7"/></svg>        
            </div>

            <div class="footer-right">
                <?php if($paragraph): ?><div class="footer-texte"><?= $paragraph; ?></div><?php endif; ?>
            </div>
        </div>

        <?php if ($contact): ?><a href="mailto:<?= $contact; ?>" class="footer-lien"><?= $contact; ?></a><?php endif; ?>
=======
=======
>>>>>>> 5f5b7df (finetuning 26-03)
    <div class="footer-top">
        <div class="footer-left">
    <?php if ($text_ev) { ?>
        <div class="footer-titre"><?php echo $text_ev; ?></div>
    <?php } ?>
<<<<<<< HEAD
=======
=======
>>>>>>> 7dc7994 (ajout div container footer)
    <div class="container">
        <div class="footer-top">
            <div class="footer-left">
<<<<<<< HEAD
                <?php if ($text_ev) { ?>
                    <div class="footer-titre"><?php echo $text_ev; ?></div>
                <?php } ?>
<<<<<<< HEAD
>>>>>>> 4e5df74 (ajout div container footer)
=======
>>>>>>> 5f5b7df (finetuning 26-03)
=======
>>>>>>> 7dc7994 (ajout div container footer)

=======
                <?php if($text_ev): ?><div class="footer-titre"><?= $text_ev; ?></div><?php endif; ?>
>>>>>>> 08604e2 (Fix : Correction du burger-menu.scss + footer + functions + template-builder.php)
                <svg xmlns="http://www.w3.org/2000/svg" class="footer-arrow" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m7 7 10 10"/><path d="M17 7v10H7"/></svg>        
            </div>

            <div class="footer-right">
                <?php if($paragraph): ?><div class="footer-texte"><?= $paragraph; ?></div><?php endif; ?>
            </div>
        </div>

<<<<<<< HEAD
        <?php if ($contact) { ?>
            <a href="mailto:<?php echo $contact; ?>" class="footer-lien">
                <?php echo $contact; ?>
            </a>
        <?php } ?>
>>>>>>> d4c7333 (finetuning 26-03)

        <div class="footer-bottom">
<<<<<<< HEAD
            <?php if($made_by): ?><div class="footer-made-by"><?= $made_by; ?></div><?php endif;
            
            wp_nav_menu([
=======
            <?php if ($made_by) { ?>
                <div class="footer-made-by"><?php echo $made_by; ?></div>
            <?php } ?>
            <?php wp_nav_menu([
>>>>>>> 5e726ef (Ajout champs ACF page construire + contact / Ajout SCSS nouvelles sections + installation d'une dependence pour le parallax. + correction et optimisations de certaines pages)
=======
        <?php if ($contact): ?><a href="mailto:<?= $contact; ?>" class="footer-lien"><?= $contact; ?></a><?php endif; ?>

        <div class="footer-bottom">
            <?php if($made_by): ?><div class="footer-made-by"><?= $made_by; ?></div><?php endif;
            
            wp_nav_menu([
>>>>>>> 08604e2 (Fix : Correction du burger-menu.scss + footer + functions + template-builder.php)
                'theme_location' => 'footer',
                'container'      => false,
                'menu_class'     => 'footer-nav',
            ]);?>
        </div>
    </div>
</footer>
<a href="#" class="scroll-top">↖</a>

<?php wp_footer(); ?>
</body>
</html>
