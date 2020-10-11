<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Grand Academy
 */

/**
 *
 * @hooked grand_academy_footer_start
 */
do_action( 'grand_academy_action_before_footer' );

/**
 * Hooked - grand_academy_footer_top_section -10
 * Hooked - grand_academy_footer_section -20
 */
do_action( 'grand_academy_action_footer' );

/**
 * Hooked - grand_academy_footer_end. 
 */
do_action( 'grand_academy_action_after_footer' );

wp_footer(); ?>

</body>  
</html>