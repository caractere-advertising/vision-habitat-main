<?php 

$surtitre = get_sub_field('surtitre') ?? '';
$titre    = get_sub_field('titre') ?? '';

$grilleCards = get_sub_field('grille_card');
$cards       = $grilleCards['cards'];

$colDepart = absint( $grilleCards['colonne-depart'] ?? 0 );
$rowStart  = $colDepart !== 0
    ? 'style="grid-column-start:' . $colDepart . '"'
    : 'style="grid-column-start:0;"';

$borderLeft = get_sub_field('border-left');
$ctaSection = get_sub_field('cta-section');

$borderLeft ? $class = "card -left" : $class="card";

?>

<section class="section-approche-globale">
    <div class="container">
        <span class="surtitre"><?= esc_html( $surtitre ); ?></span>
        <?= wp_kses_post( $titre ); ?>
    </div>

    <div class="container grid <?= $borderLeft ? '-gleft' : ''; ?>">
        <?php if ( $cards ) :
            $i = 0;
            foreach ( $cards as $c ) :
                $icon  = $c['icone'];
                $label = $c['label'];
                $lien  = $c['lien'];
            ?>
                <div class="<?= esc_attr( $class ); ?>" <?php echo $i === 0 ? $rowStart : ''; ?>>
                    <div class="content-card">
                        <div class="block-img">
                            <?php if ( $icon ) : ?>
                                <img src="<?= esc_url( $icon['url'] ); ?>" loading="lazy" alt="<?= esc_attr( $icon['title'] ?? '' ); ?>"/>
                            <?php endif; ?>
                        </div>
                        <h3><?= esc_html( $label ); ?></h3>
                        <?php if ( $lien ) : ?>
                            <a href="<?= esc_url( $lien['url'] ); ?>" aria-label="<?= esc_attr( $lien['title'] ); ?>" class="btn-cta"></a>
                        <?php endif; ?>
                    </div>
                </div>
            <?php $i++; endforeach;
        endif; ?>
    </div>
    <div class="container">
        <?php if ( $ctaSection ) : ?>
            <a href="<?= esc_url( $ctaSection['url'] ); ?>" class="btn-cta section"><?= esc_html( $ctaSection['title'] ); ?></a>
        <?php endif; ?>
    </div>
</section>