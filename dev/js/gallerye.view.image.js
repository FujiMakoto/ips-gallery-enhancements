ips.controller.mixin('galleryEnlargement', 'gallery.front.view.image', true, function() {
    this._setUpSizingDesktop = function(forceResize) {
        var basePercent = ips.getSetting('genh_percentage');
        var isLightbox = this.scope.is('[data-role="lightbox"]');
        var frame = this.scope.find('[data-role="imageFrame"]');
        var imageSizer = this.scope.find('[data-role="imageSizer"]');
        var infoPanel = this.scope.find('[data-role="imageInfo"]');
        var infoPanelWidth = infoPanel.width();
        var imageData = frame.attr('data-imageSizes');
        var viewportHeight = $(window).height();
        if (isLightbox) {
            var maxHeight = $(window).height() - (this._sizeBuffer * 2);
            var maxWidth = $(window).width() - (this._sizeBuffer * 2) - infoPanelWidth;
            frame.css({
                height: 'auto'
            });
        } else {
            var maxHeight = viewportHeight * (basePercent / 100);
            var maxWidth = frame.width();
        }
        var ratio = 1;
        if (maxHeight < 400) {
            maxHeight = 400;
        }
        console.dir(imageData);
        if (imageData) {
            imageData = $.parseJSON(imageData);
            ratio = imageData['large'][0] / imageData['large'][1];
            var marginTop = 0;
            var imageSize = {
                width: imageData['large'][0],
                height: imageData['large'][1]
            };
            console.dir(imageSize);
            if (imageSize['width'] > maxWidth) {
                imageSize['width'] = maxWidth;
                imageSize['height'] = Math.round(imageSize['width'] / ratio);
            }
            if (imageSize['height'] > maxHeight) {
                imageSize['height'] = maxHeight;
                imageSize['width'] = Math.round(imageSize['height'] * ratio);
            }
            this.scope.find('[data-role="notesWrapper"], [data-role="theImage"]').css({
                width: imageSize['width'] + 'px',
                height: imageSize['height'] + 'px',
            }).show();
        }
    };
    this._setUpSizingMobile = function(forceResize) {
        var basePercent = ips.getSetting('genh_percentage');
        var isLightbox = this.scope.is('[data-role="lightbox"]');
        var frame = this.scope.find('[data-role="imageFrame"]');
        var frameHeight = $(window).height() - 80;
        var imageData = frame.attr('data-imageSizes');
        var viewportHeight = $(window).height();
        if (isLightbox) {
            $(window).scrollTop(0);
            frame.css({
                height: frameHeight + 'px'
            });
            var maxHeight = frameHeight;
            var maxWidth = $(window).width();
        } else {
            var maxHeight = frameHeight;
            var maxWidth = frame.width();
        }
        var ratio = 1;
        if (imageData) {
            imageData = $.parseJSON(imageData);
            ratio = imageData['large'][0] / imageData['large'][1];
            var marginTop = 0;
            var imageSize = {
                width: imageData['large'][0],
                height: imageData['large'][1]
            };
            if (imageSize['width'] > maxWidth) {
                imageSize['width'] = maxWidth;
                imageSize['height'] = Math.round(imageSize['width'] / ratio);
            }
            if (imageSize['height'] > maxHeight) {
                imageSize['height'] = maxHeight;
                imageSize['width'] = Math.round(imageSize['height'] * ratio);
            }
            this.scope.find('[data-role="notesWrapper"], [data-role="theImage"]').css({
                width: imageSize['width'] + 'px',
                height: imageSize['height'] + 'px',
            }).show();
        }
    };
});;