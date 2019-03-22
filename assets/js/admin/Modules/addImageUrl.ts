import { GalleryModel } from '../Models/galleryModel';
import { GalleryJsonModel } from '../Models/galleryJsonModel';
import { GalleryPartItem } from '../Models/galleryPartItem';
import { EnumGalleryPartType, GalleryPartType } from '../Models/galleryPartType';

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
            <label for="imageTitle">Title</label> \
        <input type="text" id="imageTitle" name="imageTitle" class="form-control content-preview-text content-caption-text">\
        <label for="imageUrl">URL</label> \
        <input type="text" id="imageUrl" name="imageUrl" class="form-control content-preview-text content-caption-text">\
        </fieldset>'
        );

        // Trigger cancel button
        const $cancelButtons = $modal.find('button[data-dismiss="modal"]');
        $cancelButtons.each((index: number) => {
            const $cancelButton = $($cancelButtons[index]);
            $cancelButton.off('click').on('click', () => {
                $modal.hide();
            });
        });

        // Trigger ok button
        const $okButton = $modal.find('button[data-accept="model"]').first();
        $okButton.off('click').on('click', () => {
            const $jsonInput = $('.gallery > .' + id + '-MediaItems').first();

            const galleryJsonModel = new GalleryJsonModel($jsonInput);
            const galleryPartItem = new GalleryPartItem(
                EnumGalleryPartType.Image,
                GalleryPartType.getName(EnumGalleryPartType.Image),
                $('#imageUrl').val() as string,
                $('#imageTitle').val() as string,
                $('#imageUrl').val() as string
            );
            galleryJsonModel.add(galleryPartItem);

            $modal.hide();
        });
    };

    return galleryModel;
};
