//<?php

/* To prevent PHP errors (extending class does not exist) revealing path */
if ( !\defined( '\IPS\SUITE_UNIQUE_KEY' ) )
{
	exit;
}

class hook462 extends _HOOK_CLASS_
{
	/**
	 * Get rows
	 *
	 * @param	array	$advancedSearchValues	Values from the advanced search form
	 * @return	array
	 */
	public function getRows( $advancedSearchValues )
	{
		if ( \IPS\Settings::i()->genh_imagesPerPage )
		{
			$this->limit = \IPS\Settings::i()->genh_imagesPerPage;
		}
      
		return parent::getRows( $advancedSearchValues );
	}

}
