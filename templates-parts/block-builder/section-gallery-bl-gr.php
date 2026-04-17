<?php
$card = get_sub_field('card');
// Champs : slides (répéteur)
//    image (image), titre (texte),ss-titre(texte), paragraph (wysiwyg)

?>

<div class="section-gallery-bl-gr">
    <?php foreach ($card as $c) :
        $image     = $c['image'];
        $titre     = $c['titre'];
        $ssTitre   = $c['ss-titre'];
        $paragraph = $c['paragraph'];
    ?>
    <div class="gallery">
        <div class="card">
            <div class="gallery-image">
                <?php if ($image) : ?>
                    <img src="<?= esc_url($image['url']); ?>" alt="<?= esc_attr($image['alt']); ?>">
                <?php endif; ?>
            </div>
            <div class="gallery-info">
                <div class="top">
                    <?php if ($titre) : ?>
                        <p class="gallery-titre"><?= esc_html($titre); ?></p>
                    <?php endif; ?>
                    <?php if ($ssTitre) : ?>
                        <div class="gallery-ssTitre"><?= $ssTitre; ?></div>
                    <?php endif; ?>
                </div>
                <div class="gallery-paragraph">
                    <?php echo $paragraph; ?>
                </div>
            </div>
        </div>
    </div>
    <?php endforeach; ?>
</div>