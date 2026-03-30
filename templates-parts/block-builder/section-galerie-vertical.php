<?php 

$slides = get_sub_field('slides');

foreach($slides as $s):
    $titre = $s['titre'];
    $texte = $s['texte'];
    $img   = $s['image'];
    
endforeach;
