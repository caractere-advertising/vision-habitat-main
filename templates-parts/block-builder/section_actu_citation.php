<?php
// layout AFC section_actu_citation
//champs nom(text), citation(wysiwig)

$nom= get_sub_field('nom');
$citation = get_sub_field('citation');
?>

<section class="section_actu_citation">
    <div class="citation_container container">
    <?php if($citation): ?>
        <div class="citation_text"><?php echo $citation ?>
        </div>
    <?php if($nom): ?>
        <div class="citation_nom">
        <?php echo $nom ?>
    </div>
    <?php endif ?>        
    <?php endif ?>    
</div>

</section>