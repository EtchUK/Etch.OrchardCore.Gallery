import { addImageUrl } from './modules/addImageUrl';
import { addVideoEmbed } from './modules/addVideoEmbed';
import { addFromMediaPicker } from './modules/addFromMediaPicker';
import { GalleryModel } from './models/galleryModel';
import { GalleryJsonModel } from './models/galleryJsonModel';
import { GalleryPartItem } from './models/galleryPartItem';
import draggable = require('vuedraggable');
import Vue from 'vue';

export default (el: HTMLElement): void => {
    const models = [addFromMediaPicker(), addImageUrl(), addVideoEmbed()];

    const id = $('.gallery').attr('id');

    // Get images
    const getImages = (): [GalleryPartItem] => {
        const $jsonInput = $('.gallery > .' + id + '-MediaItems').first();
        const galleryJsonModel = new GalleryJsonModel($jsonInput).get();

        return galleryJsonModel;
    }

    // Init vue
    new Vue({
        el,

        components: {
            draggable
        },

        data: {
            items: models,
            images: getImages(),
        },
 
        methods: {
            action: (galleryModel: GalleryModel) => {
                galleryModel.action();
            },
            updateImages() {
                this.images = getImages();
            },
            deleteImage(index: number) {
                const $jsonInput = $('.gallery > .' + id + '-MediaItems').first();
                new GalleryJsonModel($jsonInput).delete(index);
            },
            onDragEnd(event: any) {
                const $jsonInput = $('.gallery > .' + id + '-MediaItems').first();
                new GalleryJsonModel($jsonInput).move(event.oldIndex, event.newIndex);
            }
        }
    });
};
