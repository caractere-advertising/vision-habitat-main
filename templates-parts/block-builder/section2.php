<?php 

$text_evidence  = get_sub_field('text_evidence');
$card           = get_field('card_solutions');

$card_category  = get_sub_field('card_category');
$card_image     = get_sub_field('card_image');
$card_link      = get_sub_field('card_link');

echo $card_category, $details;

?>

<div>
    <p id ="category_evidence"></p>
    <div></div>
</div>
<p id="details"></p>
<a href="">Rendez-vous</a>

    </div>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            class="lucide lucide-arrow-down-right-icon lucide-arrow-down-right"><path d="m7 7 10 10"/><path d="M17 7v10H7"/></svg>
        </div>
    <div>
        <article>
            <img src="" alt="" id="card_image">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </div>
            
            <p id="card_category" ></p>
            <a href="#" id="card_link"></a>
        </article>
      
    </div>    
</div>
<div></div>