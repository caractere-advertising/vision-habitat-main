<?php

/**
 * SEO & GEO — Vision Habitat
 * - Nettoyage du <head> WordPress
 * - Schema.org LocalBusiness (JSON-LD)
 * - Canonical URL (fallback si pas de plugin SEO)
 * - Open Graph basique (fallback si pas de plugin SEO)
 */

// ── Nettoyage du <head> ───────────────────────────────────────────────────────

remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wp_shortlink_wp_head', 10);
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_filter('the_content_feed', 'wp_staticize_emoji');
remove_filter('comment_text_rss', 'wp_staticize_emoji');

// ── Schema.org LocalBusiness ──────────────────────────────────────────────────

function vh_schema_org() {
    if ( ! function_exists('get_field') ) return;

    $contact = get_field('infos-contact', 'option');
    $logo    = get_field('logo', 'option');

    if ( empty($contact[0]) ) return;

    $info = $contact[0];

    $schema = [
        '@context' => 'https://schema.org',
        '@type'    => 'LocalBusiness',
        'name'     => ! empty($info['site-name']) ? $info['site-name'] : get_bloginfo('name'),
        'url'      => home_url('/'),
    ];

    if ( ! empty($info['street-name']) || ! empty($info['locality']) ) {
        $schema['address'] = [
            '@type'           => 'PostalAddress',
            'streetAddress'   => $info['street-name']  ?? '',
            'addressLocality' => $info['locality']      ?? '',
            'addressCountry'  => 'BE',
        ];
    }

    if ( ! empty($info['tel-num']) ) {
        $schema['telephone'] = preg_replace('/[^0-9+]/', '', $info['tel-num']);
    }

    if ( ! empty($info['mail']) ) {
        $schema['email'] = sanitize_email($info['mail']);
    }

    if ( ! empty($logo['url']) ) {
        $schema['logo'] = esc_url($logo['url']);
    }

    echo '<script type="application/ld+json">'
        . wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)
        . '</script>' . "\n";
}

add_action('wp_head', 'vh_schema_org');

// ── Détection plugin SEO actif ────────────────────────────────────────────────

function vh_seo_plugin_active() {
    return defined('WPSEO_VERSION')    // Yoast SEO
        || defined('RANK_MATH_VERSION') // RankMath
        || defined('AIOSEO_VERSION');   // All in One SEO
}

// ── Canonical URL (fallback) ──────────────────────────────────────────────────

function vh_canonical_fallback() {
    if ( vh_seo_plugin_active() ) return;

    if ( is_singular() ) {
        $url = get_permalink();
    } elseif ( is_home() || is_front_page() ) {
        $url = home_url('/');
    } else {
        return;
    }

    echo '<link rel="canonical" href="' . esc_url($url) . '">' . "\n";
}

add_action('wp_head', 'vh_canonical_fallback');

// ── Open Graph basique (fallback) ─────────────────────────────────────────────

function vh_og_fallback() {
    if ( vh_seo_plugin_active() ) return;

    $title = wp_get_document_title();
    $url   = is_singular() ? get_permalink() : home_url('/');
    $type  = is_singular() ? 'article' : 'website';
    $desc  = get_bloginfo('description');
    $image = '';

    if ( is_singular() && has_post_thumbnail() ) {
        $image = get_the_post_thumbnail_url(null, 'large');
    }

    echo '<meta property="og:type"      content="' . esc_attr($type)                  . '">' . "\n";
    echo '<meta property="og:title"     content="' . esc_attr($title)                 . '">' . "\n";
    echo '<meta property="og:url"       content="' . esc_url($url)                    . '">' . "\n";
    echo '<meta property="og:site_name" content="' . esc_attr(get_bloginfo('name'))   . '">' . "\n";

    if ( $desc ) {
        echo '<meta property="og:description" content="' . esc_attr($desc) . '">' . "\n";
    }

    if ( $image ) {
        echo '<meta property="og:image" content="' . esc_url($image) . '">' . "\n";
    }
}

add_action('wp_head', 'vh_og_fallback');