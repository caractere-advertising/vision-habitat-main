<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<title><?= get_the_title(get_builder_context_id()); ?> | <?php bloginfo('name') ?></title>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php  get_template_part('templates-parts/navigation');?>