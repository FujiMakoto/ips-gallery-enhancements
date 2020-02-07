ips.controller.mixin('lightboxTrigger', 'gallery.front.browse.imageLightbox', true, function() {
    this.setup = function() {
        Debug.info('Suppressing lightbox')
    };
    this.around('launchLightbox', function(origFn, e) {
        console.log('Launching lightbox');
        if (!ips.getSetting('genh_noLightbox')) {
            origFn(e)
        }
    });
});;