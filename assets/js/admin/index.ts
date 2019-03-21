import { addImageUrl } from './Modules/addImageUrl';
import { addVideoEmbed } from './Modules/addVideoEmbed';
import { GalleryModel } from './Models/galleryModel';
import { GalleryJsonModel } from './Models/galleryJsonModel';
import { GalleryPartItem } from './Models/galleryPartItem';
import Vue from 'vue';

const init = (): void => {
    const models = [addImageUrl(), addVideoEmbed()];

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
        data: {
            items: models,
            images: getImages(),
        },
        methods: {
            action: (model: GalleryModel) => {
                model.action();
            },
            updateImages() {
                this.images = getImages();
            },
            deleteImage(index: number) {
                const $jsonInput = $('.gallery > .' + id + '-MediaItems').first();
                new GalleryJsonModel($jsonInput).delete(index);
            }
        },
    });
};

init();
