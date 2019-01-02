//<?php

/* To prevent PHP errors (extending class does not exist) revealing path */
if ( !defined( '\IPS\SUITE_UNIQUE_KEY' ) )
{
	exit;
}

class hook490 extends _HOOK_CLASS_
{

	/**
	 * Disable the lightbox on gallery overview (if we want to)
	 *
	 * @param	\IPS\gallery\Category	$category	The category to show
	 * @return	void
	 */
	protected function _category( $category )
	{
	    \IPS\Output::i()->jsVars['gallerye_noLightbox'] = \IPS\Settings::i()->gallerye_noLightbox_category;
		return parent::_category( $category );
	}

	/**
	 * Show Album
	 *
	 * @param	\IPS\gallery\Album	$album	The album to show
	 * @return	void
	 */
	protected function _album( $album )
	{
      	\IPS\Output::i()->jsVars['gallerye_noLightbox'] = \IPS\Settings::i()->gallerye_noLightbox_album;
		return parent::_album( $album );
	}

}
