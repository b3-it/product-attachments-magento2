/**
 * File: file-uploader.js
 *
 * @author Bartosz Kubicki bartosz.kubicki@lizardmedia.pl>
 * @copyright Copyright (C) 2019 Lizard Media (http://lizardmedia.pl)
 */

'use strict';

define([
    'Magento_Downloadable/js/components/file-uploader'
], function (Component) {
    return Component.extend({
        /**
         * Since Magento 2.4.8 the uploader is set up by the parent component on
         * top of Uppy. The jQuery-File-Upload plugin this component used to
         * initialize here does not ship with Magento any more, so initUploader
         * is left to the parent implementation.
         *
         * @param {Event} event
         * @param {Object} data
         * @return {VoidFunction}
         */
        onFail: function (event, data) {
            console.error(data.jqXHR.responseText);
            console.error(data.jqXHR.status);
        },
    });
});
