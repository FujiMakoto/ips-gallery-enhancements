//<?php

/* To prevent PHP errors (extending class does not exist) revealing path */
if ( !\defined( '\IPS\SUITE_UNIQUE_KEY' ) )
{
	exit;
}

class hook461 extends _HOOK_CLASS_
{


	/**
	 * Constructor
	 *
	 * @param	\IPS\Http\Url|NULL		$url			Base URL (defaults to container URL)
	 * @param	\IPS\Node\Model|NULL	$container		The container
	 * @return	void
	 */
	public function __construct( ?\IPS\Http\Url $url=NULL, ?\IPS\Node\Model $container=NULL )
	{
		if ( \IPS\Settings::i()->genh_albumsPerPage )
		{
			$this->limit = \IPS\Settings::i()->genh_albumsPerPage;
		}

		return parent::__construct( $url, $container );
	}

}
