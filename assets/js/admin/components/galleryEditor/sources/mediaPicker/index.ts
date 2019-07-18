import {
    EnumGalleryItemType,
    GalleryCollection,
    GalleryItemType,
    IGalleryItem,
    IGallerySource,
} from '../../models';
import selectors from '../helpers/selectors';

const description: string = 'Add media via media library';
const label: string = 'Add via Media Library';

const invalidSelectionMessage: string =
    'You can only add images from media library to gallery.';

export default (id: string): IGallerySource => {
    const displayMediaLibrary = ($modal: JQuery) => {
        $modal.find(selectors.modalTitle).html(label);

        $modal.find(selectors.modalBody).html('');
        $modal.find(selectors.modalDialog).addClass('media-modal');

        $(selectors.mediaApp)
            .detach()
            .appendTo($modal.find(selectors.modalBody));

        $(selectors.mediaApp).show();

        const modal = $modal.modal();

        $modal
            .find(selectors.modalSubmitButton)
            .off('click')
            .on('click', async () => {
                if (window.mediaApp.selectedMedias.length) {
                    const galleryCollection = new GalleryCollection(
                        $('.gallery > .' + id + '-MediaItems').first()
                    );

                    let items: IGalleryItem[] = [];
                    let isValidImage = true;

                    window.mediaApp.selectedMedias.forEach((media: any) => {
                        // check if user has selected anything other than image then show an error
                        if (!media.mime.startsWith('image')) {
                            alert(invalidSelectionMessage);

                            items = [];
                            isValidImage = false;
                            return;
                        }

                        items.push({
                            thumb: media.url,
                            title: media.name,
                            type: EnumGalleryItemType.Image,
                            typeName: GalleryItemType.getName(
                                EnumGalleryItemType.Image
                            ),
                            url: media.url,
                        });
                    });

                    if (!isValidImage) {
                        return;
                    }

                    galleryCollection.addAll(items);
                }

                window.mediaApp.selectedMedias = [];

                modal.modal('hide');
                return true;
            });
    };

    return {
        description,
        label,
        action: () => {
            displayMediaLibrary($(`.gallery > .${id}-ModalBody`));
        },
    };
};
