//<?php

/* To prevent PHP errors (extending class does not exist) revealing path */
if ( !defined( '\IPS\SUITE_UNIQUE_KEY' ) )
{
	exit;
}

class hook1650 extends _HOOK_CLASS_
{


    /**
     * Get any image dimensions stored
     *
     * @return	array
     */
    public function get__dimensions()
    {
        return parent::get__dimensions();
    }

    /**
     * This is basically a hack, because IPS doesn't natively support original dimensions client side
     * Doing this is just a cleaner/simpler method for a non-official implementation
     *
     * @return	array
     */
    public function get_originalData()
    {
        $data = json_decode($this->_data['data'], true);

        // Don't know the original dimensions yet? Find out now.
        if ( empty($data['orig']) )
        {
            $file = \IPS\File::get('gallery_Image', $this->original_file_name);
            $origDims = $file->getImageDimensions();

            $data['orig'][0] = $origDims[0];
            $data['orig'][1] = $origDims[1];

            $this->data = json_encode($data);
            $this->save();
        }

        $data['large'][0] = $data['orig'][0];
        $data['large'][1] = $data['orig'][1];

        return json_encode($data);
    }

	/**
	 * Set any image dimensions
	 *
	 * @param	array	$dimensions	Image dimensions to store
	 * @return	array
	 */
	public function set__dimensions( $dimensions )
	{
	    $file = \IPS\File::get('gallery_Image', $this->original_file_name);
	    $origDims = $file->getImageDimensions();

	    $dimensions['orig'][0] = $origDims[0];
	    $dimensions['orig'][1] = $origDims[1];

		return parent::set__dimensions( $dimensions );
	}

}
