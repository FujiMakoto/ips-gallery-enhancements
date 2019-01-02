//<?php

/* To prevent PHP errors (extending class does not exist) revealing path */
if ( !defined( '\IPS\SUITE_UNIQUE_KEY' ) )
{
	exit;
}

class hook418 extends _HOOK_CLASS_
{

	/**
	 * Inject our custom settings as Javascript Setting Variables
	 *
	 * @return	void
	 * @link	http://www.videojs.com/projects/mimes.html
	 * @note	Only HTML5 and some flash-based video formats will work. MP4, webm and ogg are relatively safe bets but anything else isn't likely to play correctly.
	 *	The above link will allow you to check what is supported in the browser you are using.
	 * @note	As of RC1 we fall back to a generic 'embed' for non-standard formats for better upgrade compatibility...need to look into transcoding in the future
	 */
	protected function manage()
	{
        \IPS\Output::i()->jsVars['gallerye_navHeight']  = (bool)\IPS\Settings::i()->gallerye_navHeight;
        \IPS\Output::i()->jsVars['gallerye_scope']      = (bool)\IPS\Settings::i()->gallerye_scope;
        \IPS\Output::i()->jsVars['gallerye_sizeBuffer'] = (int)\IPS\Settings::i()->gallerye_sizeBuffer;
        \IPS\Output::i()->jsVars['gallerye_minHeight']  = (int)\IPS\Settings::i()->gallerye_minHeight;
        \IPS\Output::i()->jsVars['gallerye_percentage'] = (int)\IPS\Settings::i()->gallerye_percentage;
		return call_user_func_array( 'parent::manage', func_get_args() );
	}
  
}
