import { GalleryModel } from '../Models/galleryModel';
import { GalleryJsonModel } from '../Models/galleryJsonModel';
import { GalleryPartItem } from '../Models/galleryPartItem';
import { GalleryPartType } from '../Models/galleryPartType';

export const addImageUrl = (): GalleryModel => {
    const galleryModel = new GalleryModel();

    galleryModel.description =
        'This module allows users to add image to the gallery using URL';
    galleryModel.actionLabel = 'Add image URL';

    const id = $('.gallery').attr('id');

    galleryModel.action = () => {
        const $modal = $('.gallery > .' + id + '-ModalBody');
        initModal($modal);
        $modal.show();
    };

    const initModal = ($modal: JQuery) => {
        // Update title
        $modal.find('.modal-title').html('Add image URL');

        // Add content
        const $body = $modal.find('.modal-body');
        $body.html(
            '<fieldset class="form-group">\
        <label for="addImageUrl">Image URL</label> \
        <input type="text" id="addImageUrl" name="addImageUrl" class="form-control content-preview-text content-caption-text"> \
        <span class="field-validation-valid"></span></fieldset>'
        );

        // Trigger cancel button
        const $cancelButtons = $modal.find('button[data-dismiss="modal"]');
        $cancelButtons.each((index: number) => {
            const $cancelButton = $($cancelButtons[index]);
            $cancelButton.on('click', () => {
                $modal.hide();
                removeEventListener($modal);
            });
        });

        // Trigger cancel button
        const $okButton = $modal.find('button[data-accept="model"]').first();
        $okButton.on('click', () => {
            const $jsonInput = $('.gallery > .' + id + '-MediaItems').first();

            const galleryJsonModel = new GalleryJsonModel($jsonInput);
            const galleryPartItem = new GalleryPartItem(
                GalleryPartType.Image,
                $('#addImageUrl').val() as string,
                '',
                $('#addImageUrl').val() as string
            );
            galleryJsonModel.add(galleryPartItem);

            $modal.hide();
            removeEventListener($modal);
        });
    };

    const removeEventListener = ($modal: JQuery) => {
        // Remove click events
        const $cancelButtons = $modal.find('button[data-dismiss="modal"]');
        $cancelButtons.each((index: number) => {
            const $cancelButton = $($cancelButtons[index]);
            $cancelButton.off('click');
        });

        const $okButton = $modal.find('button[data-accept="model"]').first();
        $okButton.off('click');
    };

    return galleryModel;
};
