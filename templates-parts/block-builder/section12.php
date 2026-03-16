<?php
// Layout ACF : block_actu
<<<<<<< HEAD
// Champs : title (wysiwyg), link (lien)
// Répéteur : articles > image (image), category (texte), paragraph (texte), lien (lien)

$title = get_sub_field("title");
$link  = get_sub_field("link");
=======
// Champs : title (wysiwyg),image (image),category(wysiwyg) , paragraph (paragraph),link (lien)
$title =get_sub_field("title");
$image=get_sub_field("image");
$cat=get__sub_field("category");
$paragraph = get_sub_field("paragraph");
$link=get_sub_field("link");
>>>>>>> 640e6ee (fixes style 16-03)
?>

<section class="section-actu">

    <?php if ($title) { ?>
    <div class="actu-title"><?php echo $title; ?></div>
    <?php } ?>

    <div class="actu-grid">
        <?php
        if (have_rows('articles')) {
            while (have_rows('articles')) {
                the_row();
                $image    = get_sub_field('image');
                $category = get_sub_field('category');
                $paragraph = get_sub_field('paragraph');
                $lien     = get_sub_field('lien');
                ?>
                <article class="actu-card">

                    <div class="actu-card-img">
                        <?php if ($image) { ?>
                        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                        <?php } ?>
                        <?php if ($lien) { ?>
                        <a href="<?php echo $lien['url']; ?>" class="actu-card-plus">+</a>
                        <?php } ?>
                    </div>

                    <?php if ($category) { ?>
                    <span class="actu-card-cat"><?php echo $category; ?></span>
                    <?php } ?>

                    <?php if ($paragraph) { ?>
                    <p class="actu-card-text"><?php echo $paragraph; ?></p>
                    <?php } ?>

                </article>
                <?php
            }
        }
        ?>
    </div>

    <?php if ($link) { ?>
    <div class="actu-btn-wrap">
        <a href="<?php echo $link['url']; ?>" class="actu-btn"><?php echo $link['title']; ?></a>
    </div>
    <?php } ?>

</section>

<a href="#top" class="scroll-top">↖</a>
