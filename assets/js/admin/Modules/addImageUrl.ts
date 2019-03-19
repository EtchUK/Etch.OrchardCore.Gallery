import { galleryModel } from '../Models/galleryModel';

export const addImageUrl = (): galleryModel => {
    const model = new galleryModel();

    model.description = 'This module allows users to add image to the gallery using URL';
    model.actionLabel = 'Add image URL';

    model.action = () => {
        console.log('test add image URL')
    };

    return model;
};

  