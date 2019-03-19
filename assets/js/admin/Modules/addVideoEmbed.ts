import { galleryModel } from '../Models/galleryModel';

export const addVideoEmbed = (): galleryModel => {
    const model = new galleryModel();

    model.description = 'This module allows users to add video embed to the gallery';
    model.actionLabel = 'Add Video Embed';
    
    model.action = () => {
        console.log('test add vodeo embed')
    };

    return model;
};

  