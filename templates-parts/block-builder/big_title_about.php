<?php $big_title = get_sub_field( 'big_title' ) ?? ''; ?>

<section class="section-big-title from-left">
    <div class="container"><?= wp_kses_post( $big_title ); ?></div>
</section>