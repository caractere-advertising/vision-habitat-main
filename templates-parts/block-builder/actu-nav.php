<?php
$current_cat = isset($_GET['cat']) ? $_GET['cat'] : '';
$categories  = get_categories(['hide_empty' => true]);
?>

<nav class="actu-nav">
    <ul class="actu-nav-list">
         <li class="<?= $current_cat === '' ? 'is-active' : ''; ?>">
            <a href="<?= esc_url(remove_query_arg('cat')); ?>">Tous</a>
        </li>

         <?php foreach ($categories as $cat) : ?>
            <li class="<?= $current_cat === $cat->slug ? 'is-active' : ''; ?>">
                <a href="<?= esc_url(add_query_arg('cat', $cat->slug)); ?>">
                    <?= esc_html($cat->name); ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</nav>