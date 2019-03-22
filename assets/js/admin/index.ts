import { addImageUrl } from './Modules/addImageUrl';
import { addVideoEmbed } from './Modules/addVideoEmbed';
import { addFromMediaPicker } from './Modules/addFromMediaPicker';
import { GalleryModel } from './Models/galleryModel';
import { GalleryJsonModel } from './Models/galleryJsonModel';
import { GalleryPartItem } from './Models/galleryPartItem';
import draggable = require('vuedraggable');
import Vue from 'vue';

const init = (): void => {
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
        el: '.gallery',
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

init();
