<?php 

$text_evidence  = get_sub_field('text_evidence');



$cat            = get_sub_field('categorie');
$details        = get_sub_field('details');

?>

<?php if($details):?>

<div>
    <p id ="category_evidence"></p>

    <p id="details"></p>
    <a href="">Rendez-vous</a>
</div>

<?php endif;?>

