<?php 

$text_ev   = get_field('text_ev','options');
$paragraph = get_field('paragraph','options');
$contact   = get_field('contact', 'options');
$made_by   = get_field('made_by', 'options');
?>

<footer class="site-footer">
    <div class="footer-top">
        <div class="footer-left">
            <?php if ($text_ev) { ?>
                <div class="footer-titre"><?= $text_ev; ?></div>
            <?php }
            if ($contact) { ?>
                <a href="mailto:<?= $contact; ?>" class="footer-lien">
                    <?= $contact; ?>
                </a>
            <?php } ?>
        </div>
        <div class="footer-right">
            <?php if ($paragraph) { ?>
                <p class="footer-texte"><?= $paragraph; ?></p>
            <?php } ?>
        </div>
    </div>
    <div class="footer-bottom">
        <?php if ($made_by) { ?>
            <p class="footer-made-by"><?= $made_by; ?></p>
        <?php }
        
        wp_nav_menu([
            'theme_location' => 'footer',
            'container'      => false,
            'menu_class'     => 'footer-nav',
        ]); ?>
    </div>
</footer>
<a href="#" class="scroll-top">↖</a>
<?php wp_footer(); ?>
</body>
</html>