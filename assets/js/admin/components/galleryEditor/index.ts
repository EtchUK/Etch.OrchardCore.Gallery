import { addFromMediaPicker, addImageUrl, addVideoEmbed } from './sources';
import { GalleryCollection, IGalleryItem, IGallerySource } from './models';

import draggable = require('vuedraggable');
import Vue from 'vue';

declare global {
    interface Window {
        mediaApp: any;
    }
}

export default (el: HTMLElement): void => {
    const id = $('.gallery').attr('id') || '';
    const sources = [
        addFromMediaPicker(id),
        addImageUrl(id),
        addVideoEmbed(id),
    ];

    // Get images
    const getImages = (): IGalleryItem[] => {
        return new GalleryCollection(
            $('.gallery > .' + id + '-MediaItems').first()
        ).get();
    };

    // Init vue
    new Vue({
        el,

        components: {
            draggable,
        },

        data: {
            items: sources,
            images: getImages(),
        },

        methods: {
            action: (gallerySource: IGallerySource) => {
                gallerySource.action();
            },
            deleteImage(index: number) {
                new GalleryCollection(
                    $('.gallery > .' + id + '-MediaItems').first()
                ).delete(index);
            },
            onDragEnd(event: any) {
                new GalleryCollection(
                    $('.gallery > .' + id + '-MediaItems').first()
                ).move(event.oldIndex, event.newIndex);
            },
            updateImages() {
                this.images = getImages();
            },
        },
    });
};
