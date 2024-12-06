<?php

function vdplug_team_member_init()
{
    register_block_type(
        VDPLUG_DIR . '/build/blocks/team-member',
        array(
            'render_callback' => 'vdplug_team_member_render'
        )
    );
}
add_action('init', 'vdplug_team_member_init');

function vdplug_team_member_render( $attributes, $content ) {
    // Enqueue frontend script
    wp_enqueue_script(
        'vdplug-team-member-view',
        plugin_dir_url( __FILE__ ) . 'view.js',
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'view.js' ),
        true
    );

    return $content;
}
