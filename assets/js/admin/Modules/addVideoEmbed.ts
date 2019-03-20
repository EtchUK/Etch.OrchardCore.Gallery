import { GalleryModel } from '../Models/galleryModel';

export const addVideoEmbed = (): GalleryModel => {
    const galleryModel = new GalleryModel();

    galleryModel.description =
        'This module allows users to add video embed to the gallery';
    galleryModel.actionLabel = 'Add Video Embed';

    galleryModel.action = () => {
        console.log('test add vodeo embed');
    };

    return galleryModel;
};
