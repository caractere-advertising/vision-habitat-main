<<<<<<< HEAD
<?php $big_title = get_sub_field('big_title') ?? ''; ?>

<section class="section-big-title from-left">
    <div class="container">
        <?= $big_title; ?> 
    </div>
=======
<?php
// champs big_title wysiwig 
$big_title = get_sub_field('big_title');
?>

<section class="big_title">
<?php echo $big_title ?> 
>>>>>>> 927826b (fin2-4)
</section>