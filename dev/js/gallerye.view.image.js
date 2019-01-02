ips.controller.mixin('galleryEnlargement', 'gallery.front.view.image', true, function () {

    /**
     * Handles sizing elements as required
     *
     * @param 	{boolean}	forceResize 	Images smaller than previous won't shrink lightbox; setting this to true overrides that behavior
     * @returns {void}
     */
    this._setUpSizingDesktop = function (forceResize) {
        // Set or override default values
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

});