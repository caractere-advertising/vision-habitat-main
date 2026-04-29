<?php

$titre = get_field('titre_contact', 'options');
$intro = get_field('intro_contact', 'options');

$infosCompany = get_field('infos-contact','options');

$form    = get_field('shortcode_form','options'); 

?>

<section class="section-formulaire-contact">
    <div class="container flex">
        <div class="colg col-35">
            <?= $titre; ?>
            <?= $intro; ?>

            <div class="block-contact">
                <? foreach($infosCompany as $info):
                    $siteName = $info['site-name'] ?? '';
                    $street   = $info['street-name'] ?? '';
                    $localité = $info['locality'] ?? '';
                    $tel      = $info['tel-num'] ?? '';
                    $mail     = $info['mail'] ?? '';

                    // Supprimer tout sauf les chiffres et le +
                    $linkTel = preg_replace('/[^0-9+]/', '', $tel);

                    // Remplacer +320 par 0032
                    $linkTel = preg_replace('/^\+320/', '0032', $linkTel);
                    
                    echo '<h3><strong>'. $siteName . '</strong></h3>';
                    echo '<div class="block-adress">' . $street . '<br>' . $localité . '</div>';
                    echo '<div class="block-tel-mail">';
                    echo '<span class="labelBold"> Tél.</span><a href="tel:' . $linkTel . '">' . $tel . '</a>';
                    echo '<br>';
                    echo '<span class="labelBold"> Mail.</span><a href="mailto:'. $mail . '">' . $mail . '</a>';
                    echo '</div>';
                    
                endforeach;?>
            </div>
        </div>
        <div class="cold col-65">
            <?php if($form):?><?= do_shortcode($form);?><?php endif;?>
        </div>
</section>