//<?php

$form->add( new \IPS\Helpers\Form\Number(
    'genh_percentage',
    \IPS\Settings::i()->genh_percentage,
    TRUE,
    array('min' => 10, 'max' => '1000'), // Intentional, expanding beyond the viewport may be desired sometimes
    NULL, NULL, '%'
) );

$form->add( new \IPS\Helpers\Form\YesNo(
    'genh_noLightbox_category',
    \IPS\Settings::i()->genh_noLightbox_category
) );

$form->add( new \IPS\Helpers\Form\YesNo(
    'genh_noLightbox_album',
    \IPS\Settings::i()->genh_noLightbox_album
) );

if ( $values = $form->values() )
{
    $form->saveAsSettings();
    return TRUE;
}

return $form;