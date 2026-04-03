<?php
// Layout ACF : card_solutions
// Champs : card (répéteur)
//   card_image (image), card_category (texte), card_link (lien)

$cards = get_sub_field('card');
?>

<?php if ($cards) : ?>
    <section class="section-card-solutions">
        <div class="cards-grid container">
            <?php foreach ($cards as $c) :
                $image    = $c['card_image'];
                $category = $c['card_category'];
                $link     = $c['card_link'];
            ?>
<<<<<<< HEAD
<<<<<<< HEAD
                <div class="card from-bottom">
=======
                <div class="card">
>>>>>>> 6269e0f (Correction header + slider fullwidth (optimisatoin css)  + ajotu animation carte solutions)
=======
                <div class="card from-bottom">
>>>>>>> c4fe539 (Ajout animation apparition sur chaque section + animate.js)
                    <div class="card-image">
                        <?php if ($image) : ?>
                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                        <?php endif;
                        if ($link) : ?>
                            <a href="<?php echo $link['url']; ?>" class="card-plus">
                                 <span class="btn-plus-icon">+</span>
                            </a>
                        <?php endif; ?>
                    </div>

                    <div class="card-body">
                        <?php if ($category) : ?>
                            <span class="card-category"><?php echo $category; ?></span>
                        <?php endif;
                        if ($link) : ?>
                            <p class="card-title"><?php echo $link['title']; ?></p>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>
<?php endif; ?>