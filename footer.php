<?php

$text_ev   = get_field('text_ev','option');
$paragraph = get_field('paragraph','option');
$contact   = get_field('contact','option');
$made_by   = get_field('made_by','option');

?>

<footer class="site-footer">
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

    <svg xmlns="http://www.w3.org/2000/svg" class="footer-arrow" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m7 7 10 10"/><path d="M17 7v10H7"/></svg>
    

    
</div>
        <div class="footer-right">
            <?php if ($paragraph) { ?>
                <div class="footer-texte"><?php echo $paragraph; ?></div>
            <?php } ?>
        </div>
    </div>
    <?php if ($contact) { ?>
        <a href="mailto:<?php echo $contact; ?>" class="footer-lien">
            <?php echo $contact; ?>
        </a>
    <?php } ?>
    <div class="footer-bottom">
        <?php if ($made_by) { ?>
            <div class="footer-made-by"><?php echo $made_by; ?></div>
        <?php } ?>
>>>>>>> d4c7333 (finetuning 26-03)

        <div class="footer-bottom">
            <?php if($made_by): ?><div class="footer-made-by"><?= $made_by; ?></div><?php endif;
            
            wp_nav_menu([
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
