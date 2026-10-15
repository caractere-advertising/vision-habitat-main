<?php

$nom= get_sub_field('nom');
$citation = get_sub_field('citation');

?>

<section class="section_actu_citation">
    <div class="citation_container container">
        <?php if ( $citation ) : ?>
            <div class="citation_text"><?= wp_kses_post( $citation ); ?></div>

            <?php if ( $nom ) : ?>
                <div class="citation_nom"><?= esc_html( $nom ); ?></div>
            <?php endif;
        endif; ?>
    </div>
</section>