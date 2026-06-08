<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package vsc-theme
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<section class="error-404 not-found">

				<div class="error-404__container">

					<!-- Tooth illustration -->
					<div class="error-404__tooth-wrap">
						<span class="error-404__sparkle error-404__sparkle--1"></span>
						<span class="error-404__sparkle error-404__sparkle--2"></span>
						<span class="error-404__sparkle error-404__sparkle--3"></span>
						<svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M100 10 C60 10, 30 40, 30 80 C30 110, 45 130, 55 160 C60 175, 62 200, 68 210 C72 216, 78 216, 82 210 C88 195, 90 175, 100 160 C110 175, 112 195, 118 210 C122 216, 128 216, 132 210 C138 200, 140 175, 145 160 C155 130, 170 110, 170 80 C170 40, 140 10, 100 10Z"
								fill="#FFFFFF" stroke="#2C114F" stroke-width="3"/>
							<path d="M75 45 C80 35, 95 30, 105 35"
								stroke="#2C114F" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.4"/>
							<circle cx="82" cy="75" r="5" fill="#0A1E3D" opacity="0.6"/>
							<circle cx="118" cy="75" r="5" fill="#0A1E3D" opacity="0.6"/>
							<path d="M85 105 C90 98, 110 98, 115 105"
								stroke="#0A1E3D" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.5"/>
							<circle cx="150" cy="55" r="20" stroke="#2C114F" stroke-width="3" fill="none" opacity="0.3"/>
							<line x1="164" y1="69" x2="178" y2="83" stroke="#2C114F" stroke-width="3" stroke-linecap="round" opacity="0.3"/>
							<text x="145" y="62" font-family="Be Vietnam Pro, sans-serif" font-size="20" font-weight="700" fill="#2C114F" text-anchor="middle" opacity="0.35">?</text>
						</svg>
						<div class="error-404__tooth-shadow"></div>
					</div>

					<!-- 404 code -->
					<div class="error-404__code">4<span>0</span>4</div>

					<!-- Title -->
					<h1 class="error-404__title">Cette page est introuvable</h1>

					<!-- Description -->
					<p class="error-404__text">
						La page que vous cherchez n'existe plus ou a été déplacée.
						Pas d'inquiétude, votre sourire reste notre priorité&nbsp;!
					</p>

					<!-- Buttons -->
					<div class="error-404__buttons">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="error-404__btn btn-primary">Retour à l'accueil</a>
						
					</div>


				</div>

				<!-- Wave decoration -->
				<div class="error-404__wave">
					<svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="#2C114F" opacity="0.06"/>
						<path d="M0,80 C300,110 600,30 900,70 C1100,95 1300,60 1440,80 L1440,120 L0,120 Z" fill="#2C114F" opacity="0.04"/>
					</svg>
				</div>

			</section>

		</main>
	</div>

<?php
get_footer();