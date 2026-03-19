<?php
// Champs ACF : footer_titre (wysiwyg), footer_texte (texte), footer_lien (lien)
$titre = get_sub_field('footer_titre');
$texte = get_sub_field('footer_texte');
$lien  = get_sub_field('footer_lien');
?>

<footer class="site-footer">

    <div class="footer-top">

        <div class="footer-left">
            <?php if ($titre) { ?>
            <div class="footer-titre"><?php echo $titre; ?></div>
            <?php } ?>
            <?php if ($lien) { ?>
            <a href="<?php echo $lien['url']; ?>" class="footer-lien">
                <?php echo $lien['title']; ?> <span>↗</span>
            </a>
            <?php } ?>
        </div>

        <div class="footer-right">
            <?php if ($texte) { ?>
            <p class="footer-texte"><?php echo $texte; ?></p>
            <?php } ?>
        </div>

    </div>

    <div class="footer-bottom">
        <span class="footer-url">vision-habitat.be</span>
        <?php wp_nav_menu([
            'theme_location' => 'footer',
            'container'      => false,
            'menu_class'     => 'footer-nav',
        ]); ?>
    </div>

</footer>

<a href="#" class="scroll-top">↖</a>

<?php wp_footer(); ?>
