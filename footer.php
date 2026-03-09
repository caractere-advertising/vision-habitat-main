

<?php 
$text_ev   = get_field('text_ev');
$paragraph = get_field('paragraph');
$contact   = get_field('contact');
$made_by   = get_field('made_by');
?>

<footer>
    <section>
        <div class="container">
            <div><?php echo $text_ev; ?></div>
            <div><?php echo $paragraph; ?></div>
        </div>
        <div><?php echo $contact; ?></div>
        <hr>
        <nav>
            <div><?php echo $made_by; ?></div>
            <?php wp_nav_menu([
                'theme_location' => 'footer',
                'container'      => false,
                'menu_class'     => 'navbar',
            ]); ?>
        </nav>
    </section>
</footer>

<?php wp_footer(); ?>
</body>
</html>
