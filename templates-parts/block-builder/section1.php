<?php

$zone_logo = get_field('image', 'site_name','slogan');
$navigation_header = get_field('navigation_header');
$text_evidence = get_field('text_evidence','options');

if ($image) :

    if (is_array($image)) : ?>
        <img src="<?= esc_url($image['url']); ?>" alt="<?= esc_attr($image['alt']); ?>">
    
   
    elseif (is_string($image)) : ?>
        <img src="<?= esc_url($image); ?>" alt="Logo">
    
    <?php
    
    elseif (is_numeric($image)) :
        echo wp_get_attachment_image($image, 'full');
    endif;

else :
    echo '<p>Pas de logo défini pour cette page.</p>';
endif;

$slide = get_sub_field('slide');
$navigation = get_sub_field('title1','title2','title3',);
$logo = get_sub_field('image','site_name','slogan'); 
$text=get_sub_field('categories','details'); 


echo $slide, $navigation,$logo,$text;


?>


<header>
    <div>
        <img id="image" src="" alt="">
        <p id="site_name"></p>
        <p id="slogan"></p>
    </div>
    <nav>
    <ul>
        <li><a href="" id="title1"></a></li>
        <li><a href=""id="title2">></a></li>
        <li><a href="" id="title3">></a></li>
    </ul>
    </nav>
    <h1 id="details"></h1>

    <div>
        <a href="#" id="categories"></a>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            class="lucide lucide-arrow-down-right-icon lucide-arrow-down-right"><path d="m7 7 10 10"/><path d="M17 7v10H7"/></svg>
        </div>
    </div>
</header>