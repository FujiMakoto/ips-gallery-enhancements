//<?php

$form->add( new \IPS\Helpers\Form\Number(
    'gallerye_percentage',
    \IPS\Settings::i()->gallerye_percentage,
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