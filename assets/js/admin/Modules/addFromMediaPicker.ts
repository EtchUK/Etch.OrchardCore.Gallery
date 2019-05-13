import { GalleryModel } from '../Models/galleryModel';
import { GalleryJsonModel } from '../Models/galleryJsonModel';
import { GalleryPartItem } from '../Models/galleryPartItem';
import {
    EnumGalleryPartType,
    GalleryPartType,
} from '../Models/galleryPartType';

export const addFromMediaPicker = (): GalleryModel => {
    const galleryModel = new GalleryModel();

    galleryModel.description =
        'This module allows users to add image from media picker';
    galleryModel.actionLabel = 'Add From Media Picker';

    const id = $('.gallery').attr('id');

    galleryModel.action = () => {
        const $modal = $('.gallery > .' + id + '-ModalBody');
        initModal($modal);
        $modal.show();
    };

    const initModal = ($modal: JQuery) => {
        // Update title
        $modal.find('.modal-title').html('Add Media');

        // Add content
        $modal.find('.modal-dialog').addClass('media-modal');
        $modal.find('.modal-body').html('');
        $('#mediaApp')
            .detach()
            .appendTo($modal.find('.modal-body'))
            .show();

        // Trigger cancel button
        const $cancelButtons = $modal.find('button[data-dismiss="modal"]');
        $cancelButtons.each((index: number) => {
            const $cancelButton = $($cancelButtons[index]);
            $cancelButton.off('click').on('click', () => {
                // we don't want the included medias to be still selected the next time we open the modal.
                const mediaApp = (window as any).mediaApp;
                mediaApp.selectedMedias = [];

                $modal.find('.modal-dialog').removeClass('media-modal');
                $modal.hide();

                $('#mediaApp')
                    .detach()
                    .appendTo('.ta-content')
                    .hide();
            });
        });

        // Trigger ok button
        const $okButton = $modal.find('button[data-accept="model"]').first();
        $okButton.off('click').on('click', () => {
            const mediaApp = (window as any).mediaApp;
            const $jsonInput = $('.gallery > .' + id + '-MediaItems').first();
            const galleryJsonModel = new GalleryJsonModel($jsonInput);
            var galleryPartItems = Array<GalleryPartItem>();

            var isValidImage = true;

            mediaApp.selectedMedias.forEach((media: any) => {
                // Check if user has selected anything other than image then show an error
                if (!media.mime.startsWith('image')) {
                    alert('You only allow to select image.');

                    galleryPartItems = [];
                    isValidImage = false;
                    return;
                }

                const galleryPartItem = new GalleryPartItem(
                    EnumGalleryPartType.Image,
                    GalleryPartType.getName(EnumGalleryPartType.Image),
                    media.url,
                    media.name,
                    media.url
                );

                galleryPartItems.push(galleryPartItem);
            });

            if (!isValidImage) {
                return;
            }

            galleryJsonModel.addAll(galleryPartItems);

            // we don't want the included medias to be still selected the next time we open the modal.
            mediaApp.selectedMedias = [];

            $modal.find('.modal-dialog').removeClass('media-modal');
            $modal.hide();

            $('#mediaApp')
                .detach()
                .appendTo('.ta-content')
                .hide();
        });
    };

    return galleryModel;
};
