//<?php

/* To prevent PHP errors (extending class does not exist) revealing path */
if ( !defined( '\IPS\SUITE_UNIQUE_KEY' ) )
{
    exit;
}

class hook460 extends _HOOK_CLASS_
{

    /* !Hook Data - DO NOT REMOVE */
    public static function hookData() {
        return array_merge_recursive( array (
            'imageLightboxFrame' =>
                array (
                    0 =>
                        array (
                            'selector' => '#elGalleryImageLightbox',
                            'type' => 'replace',
                            'content' => '<div id=\'elGalleryImageLightbox\' class=\'elGalleryImage\' data-role="imageFrame" data-setHeight {{if $image->originalData}}data-imageSizes=\'{$image->originalData}\'{{elseif $image->data}}data-imageSizes=\'{$image->data}\'{{endif}}>
        {{if $image->media }}
                <div class=\'cGallery_videoContainer\'>
                        <video data-controller="core.global.core.embeddedvideo" id="elGalleryVideo" data-role="video" data-imageID=\'{$image->id}\' {{if $image->canEdit()}}data-editable{{endif}} class="ipsPos_center" controls preload="auto" width="100%" height="100%"{{if $image->masked_file_name }} poster="{file="$image->masked_file_name" extension="gallery_Images"}"{{endif}}>
                                <source src="{file="$image->original_file_name" extension="gallery_Images"}" type=\'{$image->file_type}\' />
                                <embed wmode="opaque" autoplay="true" showcontrols="true" showstatusbar="true" showtracker="true" src="{file="$image->original_file_name" extension="gallery_Images"}" width="480" height="360" type=\'{$image->file_type}\' />
                        </video>
                </div>
        {{else}}
                <div class=\'cGalleryViewImage\' data-role=\'notesWrapper\' data-controller=\'gallery.front.view.notes\' data-imageID=\'{$image->id}\' {{if $image->canEdit()}}data-editable{{endif}} data-notesData=\'{$image->_notes_json}\'>
                        <div>
                                <img src=\'{file="$image->original_file_name" extension="gallery_Images"}\' alt="{$image->caption}" title=\'{$image->caption}\' data-role=\'theImage\' class=\'ipsHide\'>
                        </div>
                        {{if \count( $image->_notes )}}
                                <noscript>
                                        {{foreach $image->_notes as $note}}
                                                <div class=\'cGalleryNote\' style=\'left: {$note[\'LEFT\']}%; top: {$note[\'TOP\']}%; width: {$note[\'WIDTH\']}%; height: {$note[\'HEIGHT\']}%\'>
                                                        <div class=\'cGalleryNote_border\'></div>
                                                        <div class=\'cGalleryNote_note\'><div>{$note[\'NOTE\']}</div></div>
                                                </div>
                                        {{endforeach}}
                                </noscript>
                        {{endif}}
                </div>
        {{endif}}',
                        ),
                ),
            'imageFrame' =>
                array (
                    0 =>
                        array (
                            'selector' => '#elGalleryImage > div.cGalleryImageFade > div.cGalleryImageTopBar > ul.cGalleryControls.ipsList_inline.ipsResponsive_hidePhone > li > a.ipsButton.ipsButton_narrow.ipsButton_link.ipsButton_verySmall.ipsButton_veryLight[target=\'_blank\'][rel=\'noopener\']',
                            'type' => 'replace',
                            'content' => '<a href=\'{file="$image->original_file_name" extension="gallery_Images"}\' title=\'{lang="view_fullsize_image"}\' class=\'ipsButton ipsButton_narrow ipsButton_link ipsButton_verySmall ipsButton_veryLight\' data-ipsTooltip target=\'_blank\' rel=\'noopener\' title="test"><i class=\'fa fa-external-link\'></i></a>',
                        ),
                ),
            'imageLightboxInfo' =>
                array (
                    0 =>
                        array (
                            'selector' => '#elImageLightboxActions_menu',
                            'type' => 'add_after',
                            'content' => '<a href="{$image->url(\'download\')}" class="ipsButton ipsButton_small ipsButton_narrow ipsSpacer_top ipsSpacer_half ipsPos_right ipsButton_primary" style="margin-right: 5px;" data-ipsTooltip title="{lang="download"}"> <i class="fa fa-download"></i> </a>',
                        ),
                ),
        ), parent::hookData() );
    }
    /* End Hook Data */


}