import { addImageUrl } from './Modules/addImageUrl';
import { addVideoEmbed } from './Modules/addVideoEmbed';
import { galleryModel } from './Models/galleryModel';

const Vue = (window as any).Vue;

const init = (): void => {
    const models = [addImageUrl(), addVideoEmbed()];

    new Vue({
        el: '.gallery',
        data: {
            items: models,
        },
        methods: {
            action: (action: galleryModel) => {
                action.action();
            },
        },
    });
};

init();
