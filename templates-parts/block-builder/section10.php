<?php
$lien1 = get_sub_field("lien1");
$lien2 = get_sub_field("lien2");
$lien3 = get_sub_field("lien3");
$lien4 = get_sub_field("lien4");

?>

<section>
    <div class="link_container">
        <a href="#" class="">
        <span class="link_numero">01</span>
        <span class="link_list"><?php echo $lien1 ?></span>
        </a>

        <a href="#" class="">
        <span class="link_numero">02</span>
        <span class="link_list"><?php echo $lien2 ?></span>
        </a>

         <a href="#" class="">
        <span class="link_numero">03</span>
        <span class="link_list"><?php echo $lien3 ?></span>
        </a>

         <a href="#" class="">
        <span class="link_numero">04</span>
        <span class="link_list"><?php echo $lien4 ?></span>
        </a>

    </div>
</section>