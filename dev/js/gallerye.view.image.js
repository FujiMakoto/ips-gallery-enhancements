ips.controller.mixin('galleryEnlargement', 'gallery.front.view.image', true, function () {

    /**
     * Handles sizing elements as required
     *
     * @param 	{boolean}	forceResize 	Images smaller than previous won't shrink lightbox; setting this to true overrides that behavior
     * @returns {void}
     */
    this._setUpSizingDesktop = function (forceResize) {
        // Set or override default values
        //this._sizeBuffer    = ips.getSetting('gallerye_sizeBuffer');
        var minHeight       = ips.getSetting('gallerye_minHeight');
        var subtractNav     = ips.getSetting('gallerye_navHeight');
        var subtractScope   = ips.getSetting('gallerye_scope');
        var basePercent     = ips.getSetting('gallerye_percentage');

        var isLightbox = this.scope.is('[data-role="lightbox"]');
        var frame = this.scope.find('[data-role="imageFrame"]');
        var imageSizer = this.scope.find('[data-role="imageSizer"]');
        var infoPanel = this.scope.find('[data-role="imageInfo"]');
        var infoPanelWidth = infoPanel.width();
        var imageData = frame.attr('data-imageSizes');
        var viewportHeight = $( window ).height();

        if( isLightbox ){
            var maxHeight = $( window ).height() - (this._sizeBuffer * 2);
            var maxWidth = $( window ).width() - (this._sizeBuffer * 2) - infoPanelWidth;

            frame.css({
                height: 'auto'
            });
        } else {
            var maxHeight = viewportHeight * (basePercent / 100);
            // var maxHeight = frame.height();
            var maxWidth = frame.width();
        }

        var ratio = 1;

        if( maxHeight < 400 ){
            maxHeight = 400;
        }
        console.dir(imageData);
        if( imageData ){
            imageData = $.parseJSON( imageData );
            ratio = imageData['large'][ 0 ] / imageData['large'][ 1 ];

            var marginTop = 0;
            var imageSize = {
                width: imageData['large'][0],
                height: imageData['large'][1]
            };
            console.dir(imageSize);
            if( imageSize['width'] > maxWidth ){
                imageSize['width'] = maxWidth;
                imageSize['height'] = Math.round( imageSize['width'] / ratio );
            }

            if( imageSize['height'] > maxHeight ){
                imageSize['height'] = maxHeight;
                imageSize['width'] = Math.round( imageSize['height'] * ratio );
            }

            this.scope
                .find('[data-role="notesWrapper"], [data-role="theImage"]')
                .css({
                    width: imageSize['width'] + 'px',
                    height: imageSize['height'] + 'px',
                })
                .show();


            // ========
            // This code handled resizing the image frame to fit the photo.
            // However, in testing it's easier to use the lightbox when it is full-size, due to the number of UI controls
            // we display in the sidebar. Commenting this block out for now, but leaving for reference.
            // ========
            // Now size the container if needed. If this image is smaller than the last one, we DON'T shrink the lightbox
            // However if the image is larger than the previous, we do enlarge it.
            // We also make sure the panel is never smaller than 500x500.
            /*var minimumAllowedWidth = 500 + infoPanelWidth;
            if( forceResize || ( imageSize['width'] > this._curWidth && ( imageSize['width'] + infoPanelWidth ) >= minimumAllowedWidth ) ){
                imageSizer.css({ width: imageSize['width'] + infoPanelWidth + 'px' });
                this._curWidth = imageSize['width'];
            } else if ( ( imageSize['width'] + infoPanelWidth ) < minimumAllowedWidth && !this._curWidth ){
                imageSizer.css({ width: minimumAllowedWidth + 'px' });
                this._curWidth = 500;
            }

            // Height is simpler because we don't have to account for the info panel width here.
            if( forceResize || ( imageSize['height'] > this._curHeight && imageSize['height'] >= 500 ) ){
                imageSizer.css({ height: imageSize['height'] + 'px' });
                this._curHeight = imageSize['height'];
            } else if ( imageSize['height'] < 500 && !this._curHeight ){
                imageSizer.css({ height: '500px' });
                this._curHeight = 500;
            }*/
        }
    };

    /**
     * Overrides the setUpSizing method to alter the sizing of the gallery image box
     *
     * @param 	{event}		e 	Event object
     * @returns {void}
     */
    // this._setUpSizing = function() {
    //     // Set or override default values
    //     this._sizeBuffer    = ips.getSetting('gallerye_sizeBuffer');
    //     var minHeight       = ips.getSetting('gallerye_minHeight');
    //     var subtractNav     = ips.getSetting('gallerye_navHeight');
    //     var subtractScope   = ips.getSetting('gallerye_scope');
    //     var basePercent     = ips.getSetting('gallerye_percentage');
    //     Debug.log('Base image height: ' + basePercent + '%');
    //     Debug.log('Custom size buffer: ' + this._sizeBuffer);
    //     Debug.log('Custom minimum height: ' + minHeight);
    //     Debug.log('Subtracting navigation menu height?: ' + (subtractNav ? 'Yes' : 'No'));
    //     Debug.log('Subtracting image scope height?: ' + (subtractScope ? 'Yes' : 'No'));
    //
    //     var frame = this.scope.find('[data-role="imageFrame"]');
    //     var viewportHeight = $( window ).height();
    //     var scopeTop = ips.utils.position.getElemPosition( this.scope );
    //     var navHeight = this.scope.find('[data-role="collectionNav"]').outerHeight();
    //     var imageData = frame.attr('data-imageSizes');
    //     var ratio = 1;
    //
    //     // Calculate our custom max height now
    //     var maxHeight = viewportHeight * (basePercent / 100);
    //     maxHeight = maxHeight - this._sizeBuffer;
    //     if (subtractScope) {
    //         maxHeight = maxHeight - scopeTop.absPos.top;
    //     }
    //     if (subtractNav) {
    //         maxHeight = maxHeight - navHeight;
    //     }
    //
    //     if( maxHeight < minHeight ){
    //         maxHeight = minHeight;
    //     }
    //
    //     frame.css({
    //         height: maxHeight + 'px'
    //     });
    //
    //     if( imageData ){
    //         imageData = $.parseJSON( imageData );
    //         ratio = imageData['large'][ 0 ] / imageData['large'][ 1 ];
    //
    //         var innerHeight = frame.innerHeight() - parseInt( frame.css('padding-top') ) - parseInt( frame.css('padding-bottom') );
    //         var innerWidth = frame.innerWidth() - parseInt( frame.css('padding-left') ) - parseInt( frame.css('padding-right') );
    //         var marginTop = 0;
    //         var imageSize = {
    //             width: imageData['large'][0],
    //             height: imageData['large'][1]
    //         };
    //
    //         if( imageSize['width'] > innerWidth ){
    //             imageSize['width'] = innerWidth;
    //             imageSize['height'] = Math.round( imageSize['width'] / ratio );
    //         }
    //
    //         if( imageSize['height'] > innerHeight ){
    //             imageSize['height'] = innerHeight;
    //             imageSize['width'] = Math.round( imageSize['height'] * ratio );
    //         }
    //
    //         var padding = parseInt( frame.css('paddingTop') ) + parseInt( frame.css('paddingBottom') );
    //         var marginTop = ( maxHeight - padding - imageSize['height'] ) / 2;
    //
    //         this.scope
    //             .find('[data-role="notesWrapper"], [data-role="theImage"]').css({
    //             width: imageSize['width'] + 'px',
    //             height: imageSize['height'] + 'px',
    //         })
    //             .show()
    //             .filter('[data-role="notesWrapper"]')
    //             .css({
    //                 marginTop: ( marginTop > 0 ) ? marginTop : 0 + 'px'
    //             });
    //     }
    // };
});