<?php var_dump(get_row_layout()); ?>
<?php var_dump(get_row()); ?>


<?php

$text_ev   = get_field('text_ev');
$paragraph = get_field('paragraph');
$contact   = get_field('contact');
$made_by   = get_field('made_by');
?>
<footer class="site-footer">
    <div class="footer-top">
        <div class="footer-left">
            <?php if ($text_ev) { ?>
                <div class="footer-titre"><?php echo $text_ev; ?></div>
            <?php } ?>
            <?php if ($contact) { ?>
                <a href="mailto:<?php echo $contact; ?>" class="footer-lien">
                    <?php echo $contact; ?>
                </a>
            <?php } ?>
        </div>
        <div class="footer-right">
            <?php if ($paragraph) { ?>
                <p class="footer-texte"><?php echo $paragraph; ?></p>
            <?php } ?>
        </div>
    </div>
    <div class="footer-bottom">
        <?php if ($made_by) { ?>
            <p class="footer-made-by"><?php echo $made_by; ?></p>
        <?php } ?>
        <?php wp_nav_menu([
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