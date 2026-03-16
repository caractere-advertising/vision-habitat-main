<<<<<<< HEAD
=======

>>>>>>> 640e6ee (fixes style 16-03)
<?php
// Layout ACF : block_citation
// Champs : name (texte), citation (wysiwyg), title (wysiwyg), link (lien)

$name     = get_sub_field('name');
$citation = get_sub_field('citation');
$title    = get_sub_field('title');
$link     = get_sub_field('link');
?>

<section class="section-citation">

    <div class="citation-block">
        <div class="citation-inner">
            <?php if ($name) : ?>
            <span class="citation-name"><?php echo $name; ?></span>
            <?php endif; ?>

            <?php if ($citation) : ?>
            <div class="citation-text">
                <?php echo $citation; ?>
            </div>
            <?php endif; ?>
        </div>
    </div>

    <div class="citation-blue">
        <div class="citation-blue-inner">
            <?php if ($title) : ?>
            <div class="citation-blue-title">
                <?php echo $title; ?>
            </div>
            <?php endif; ?>

            <?php if ($link) : ?>
            <a href="<?php echo $link['url']; ?>" class="btn-cta">
                <?php echo $link['title']; ?>
            </a>
            <?php endif; ?>
        </div>

        <div class="citation-deco"></div>
    </div>

<<<<<<< HEAD
=======
</section>
<?php 
$name = get_sub_field('name');
$citation   = get_sub_field('citation');
$link      = get_sub_field('link');
$title = get_sub_field('title');

?>

<section>
   <div class="container">
         <div class="citation_name">
            <h3><?php echo $name ?></h3>
            <p><?php echo $citation ?></p>
        </div>
        <div class="citation_blue">
            <p><?php echo $title?></p>
            <a href="#"><?php echo $link ?></a>

        </div>
   </div>
>>>>>>> 640e6ee (fixes style 16-03)
</section>