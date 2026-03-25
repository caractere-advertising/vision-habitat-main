<?php 

$img = get_sub_field('image'); // Récupère l'image depuis le champ ACF de la page


$url = $img['url'];
$alt = $img['alt'];

?>

<img src="<?php echo $url; ?>" alt="<?php echo $alt; ?>">