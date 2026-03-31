<?php

$text_ev   = get_field('text_ev','option');
$paragraph = get_field('paragraph','option');
$contact   = get_field('contact','option');
$made_by   = get_field('made_by','option');

?>

<footer class="site-footer">
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
    <div class="footer-top">
        <div class="footer-left">
    <?php if ($text_ev) { ?>
        <div class="footer-titre"><?php echo $text_ev; ?></div>
    <?php } ?>
=======
    <div class="container">
        <div class="footer-top">
            <div class="footer-left">
                <?php if ($text_ev) { ?>
                    <div class="footer-titre"><?= $text_ev; ?></div>
                <?php } ?>
>>>>>>> 4e5df74 (ajout div container footer)

                <svg xmlns="http://www.w3.org/2000/svg" class="footer-arrow" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m7 7 10 10"/><path d="M17 7v10H7"/></svg>        
            </div>

            <div class="footer-right">
                <?php if ($paragraph) { ?>
                    <div class="footer-texte"><?= $paragraph; ?></div>
                <?php } ?>
            </div>
        </div>

        <?php if ($contact) { ?>
            <a href="mailto:<?= $contact; ?>" class="footer-lien"><?= $contact; ?></a>
        <?php } ?>
>>>>>>> d4c7333 (finetuning 26-03)

        <div class="footer-bottom">
<<<<<<< HEAD
            <?php if($made_by): ?><div class="footer-made-by"><?= $made_by; ?></div><?php endif;
            
            wp_nav_menu([
=======
            <?php if ($made_by) { ?>
                <div class="footer-made-by"><?= $made_by; ?></div>
            <?php } ?>
            <?php wp_nav_menu([
>>>>>>> 5e726ef (Ajout champs ACF page construire + contact / Ajout SCSS nouvelles sections + installation d'une dependence pour le parallax. + correction et optimisations de certaines pages)
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
