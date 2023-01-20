import {
    EnumGalleryItemType,
    GalleryItemType,
    IGalleryItem,
    IGallerySource,
} from '../../models';
import selectors from '../helpers/selectors';

const description = 'Add media via media library';
const label = 'Add via Media Library';

const invalidSelectionMessage =
    'You can only add images from media library to gallery.';

let $cachedMediaApp: JQuery<HTMLElement>;

export default (id: string): IGallerySource => {
    const displayMediaLibrary = (
        $modal: JQuery,
        onAdd: (items: IGalleryItem[]) => void
    ) => {
        $modal.find(selectors.modalTitle).html(label);

        $modal.find(selectors.modalBody).html('');
        $modal.find(selectors.modalDialog).addClass('media-modal');

        if (!$cachedMediaApp) {
            $cachedMediaApp = $(selectors.mediaApp).detach();
        }

        $cachedMediaApp.appendTo($modal.find(selectors.modalBody));

        $(selectors.mediaApp).show();

        const modal = $modal.modal();

        $modal
            .find(selectors.modalSubmitButton)
            .off('click')
            .on('click', async () => {
                if (window.mediaApp.selectedMedias.length) {
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
                            type: EnumGalleryItemType.LocalImage,
                            typeName: GalleryItemType.getName(
                                EnumGalleryItemType.LocalImage
                            ),
                            url: media.mediaPath,
                        });
                    });

                    if (!isValidImage) {
                        return;
                    }

                    onAdd(items);
                }

                window.mediaApp.selectedMedias = [];

                modal.modal('hide');
                return true;
            });
    };

    return {
        description,
        label,
        action: (onAdd: (items: IGalleryItem[]) => void) => {
            displayMediaLibrary($(`.gallery > .${id}-ModalBody`), onAdd);
        },
    };
};
