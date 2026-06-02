<?php

$titre = get_field('titre_contact', 'options');
$intro = get_field('intro_contact', 'options');

$infosCompany = get_field('infos-contact','options');

$form    = get_field('shortcode_form','options'); 

?>

<section class="section-formulaire-contact">
    <div class="container flex">
        <div class="colg col-35">
            <?= wp_kses_post( $titre ); ?>
            <?= wp_kses_post( $intro ); ?>

            <div class="block-contact">
                <?php foreach ( $infosCompany as $info ) :
                    $siteName = $info['site-name'] ?? '';
                    $street   = $info['street-name'] ?? '';
                    $localite = $info['locality'] ?? '';
                    $tel      = $info['tel-num'] ?? '';
                    $mail     = $info['mail'] ?? '';

                    // Supprimer tout sauf les chiffres et le +
                    $linkTel = preg_replace( '/[^0-9+]/', '', $tel );
                    // Remplacer +320 par 0032
                    $linkTel = preg_replace( '/^\+320/', '0032', $linkTel );
                    ?>

                    <h3><strong><?= esc_html( $siteName ); ?></strong></h3>
                    <div class="block-adress"><?= esc_html( $street ); ?><br><?= esc_html( $localite ); ?></div>
                    <div class="block-tel-mail">
                        <span class="labelBold"> Tél.</span><a href="tel:<?= esc_attr( $linkTel ); ?>"><?= esc_html( $tel ); ?></a>
                        <br>
                        <span class="labelBold"> Mail.</span><a href="mailto:<?= esc_attr( sanitize_email( $mail ) ); ?>"><?= esc_html( $mail ); ?></a>
                    </div>

                <?php endforeach; ?>
            </div>
        </div>
        <div class="cold col-65">
            <?php if ( $form ) : echo do_shortcode( wp_kses_post( $form ) ); endif; ?>
        </div>
    </div>
</section>