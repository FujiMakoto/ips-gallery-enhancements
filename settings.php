//<?php

$form->addHeader( 'genh_header_index' );
$form->add( new \IPS\Helpers\Form\Number(
    'genh_albumsPerPage', 
    \IPS\Settings::i()->genh_albumsPerPage,
    FALSE,
    ['unlimited' => 0, 'unlimitedLang' => 'genh_defaultSetting']
));
$form->add( new \IPS\Helpers\Form\Number(
    'genh_imagesPerPage', 
    \IPS\Settings::i()->genh_imagesPerPage,
    FALSE,
    ['unlimited' => 0, 'unlimitedLang' => 'genh_defaultSetting']
));
$form->add( new \IPS\Helpers\Form\YesNo(
    'genh_noLightbox_category',
    \IPS\Settings::i()->genh_noLightbox_category
) );
$form->add( new \IPS\Helpers\Form\YesNo(
    'genh_noLightbox_album',
    \IPS\Settings::i()->genh_noLightbox_album
) );

$form->addHeader( 'genh_header_imageOverview' );
$form->add( new \IPS\Helpers\Form\Number(
    'genh_percentage',
    \IPS\Settings::i()->genh_percentage,
    TRUE,
    array('min' => 10, 'max' => '1000'), // Intentional, expanding beyond the viewport may be desired sometimes
    NULL, NULL, '%'
) );

if ( $values = $form->values() )
{
    $form->saveAsSettings();
    return TRUE;
}

return $form;