ips.controller.mixin('lightboxTrigger', 'gallery.front.browse.imageLightbox', true, function () {

    /**
     * Initialize controller
     *
     * @returns {void}
     */
    // this.initialize = function () {
    //     this.on( 'click', '[data-imageLightbox]', this.launchLightbox );
    //     this.on( document, 'keydown', this.keyDown );
    //
    //     // Primary event that watches for URL changes
    //     History.Adapter.bind( window, 'statechange', _.bind( this.stateChange, this ) );
    //
    //     this.setup();
    // };

    /**
     * Disable the lightbox on configured pages
     *
     * @param	e	Event
     * @return void
     */
    this.around('launchLightbox', function (origFn, e) {
        console.log('Launching lightbox');
        if ( !ips.getSetting('gallerye_noLightbox') )
        {
            origFn(e)
        }
    });

});