//<?php

$form->add( new \IPS\Helpers\Form\YesNo(
    'gallerye_navHeight',
    \IPS\Settings::i()->gallerye_navHeight
) );

$form->add( new \IPS\Helpers\Form\YesNo(
    'gallerye_scope',
    \IPS\Settings::i()->gallerye_scope
) );

$form->add( new \IPS\Helpers\Form\Number(
        'gallerye_percentage',
        \IPS\Settings::i()->gallerye_percentage,
        TRUE,
        array('min' => 10, 'max' => '1000'), // Intentional, expanding beyond the viewport may be desired sometimes
        NULL, NULL, '%'
) );

$form->add( new \IPS\Helpers\Form\Number(
        'gallerye_sizeBuffer', 
        \IPS\Settings::i()->gallerye_sizeBuffer,
        TRUE, 
        array('min' => 0),
        NULL, NULL, 'px'
) );

$form->add( new \IPS\Helpers\Form\Number(
        'gallerye_minHeight',
        \IPS\Settings::i()->gallerye_minHeight,
        TRUE,
        array('min' => 0),
        NULL, NULL, 'px'
) );

if ( $values = $form->values() )
{
	$form->saveAsSettings();
	return TRUE;
}

return $form;