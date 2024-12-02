<?php

function vdplug_team_member_init()
{
    register_block_type(
        VDPLUG_DIR . '/build/blocks/team-member'
    );
}
add_action('init', 'vdplug_team_member_init');
