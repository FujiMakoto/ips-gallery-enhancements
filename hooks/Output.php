//<?php

/* To prevent PHP errors (extending class does not exist) revealing path */
if ( !defined( '\IPS\SUITE_UNIQUE_KEY' ) )
{
	exit;
}

class hook489 extends _HOOK_CLASS_
{

	/**
	 * Send output
	 *
	 * @param	string	$output				Content to output
	 * @param	int		$httpStatusCode		HTTP Status Code
	 * @param	string	$contentType		HTTP Content-type
	 * @param	array	$httpHeaders		Additional HTTP Headers
	 * @param	bool	$cacheThisPage		Can/should this page be cached?
	 * @param	bool	$pageIsCached		Is the page from a cache? If TRUE, no language parsing will be done
	 * @param	bool	$parseFileObjects	Should <fileStore.xxx> and <___base_url___> be replaced in the output?
	 * @param	bool	$parseEmoji			Should Emoji be parsed?
	 * @return	void
	 */
	public function sendOutput( $output='', $httpStatusCode=200, $contentType='text/html', $httpHeaders=array (
), $cacheThisPage=true, $pageIsCached=false, $parseFileObjects=true, $parseEmoji=true )
	{
		return parent::sendOutput( $output, $httpStatusCode, $contentType, $httpHeaders, $cacheThisPage, $pageIsCached, $parseFileObjects, $parseEmoji );
	}

}
