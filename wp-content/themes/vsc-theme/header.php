<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package vsc-theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			the_custom_logo();
				?>	
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			  <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                ☰
            </button>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
			) );
			?>
		</nav><!-- #site-navigation -->

		        <!-- ACTIONS DROITE : Téléphone + Nous joindre -->
        <div class="header-actions">
            <a href="tel:5140000000" class="header-phone">
                (514) 000-0000
            </a>
            <a href="/nous-joindre" class="header-contact">
                Nous joindre
            </a>
        </div>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
