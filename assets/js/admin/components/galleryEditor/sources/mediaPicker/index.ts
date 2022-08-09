import {
    EnumGalleryItemType,
    GalleryItemType,
    IGalleryItem,
    IGallerySource,
} from '../../models';
import selectors from '../helpers/selectors';
import bootstrap from 'bootstrap';
import { clearEventListeners } from '../helpers/modal';

const description: string = 'Add media via media library';
const label: string = 'Add via Media Library';

const invalidSelectionMessage: string =
    'You can only add images from media library to gallery.';

let $cachedMediaApp: Element;

export default (id: string): IGallerySource => {
    const displayMediaLibrary = (
        $modalElement: Element,
        onAdd: (items: IGalleryItem[]) => void
    ) => {
        var $modal = new bootstrap.Modal($modalElement)

        const modalTitle = $modalElement.querySelector('.modal-title') as Element;
        modalTitle.textContent = label;

        const modalBody = $modalElement.querySelector('.modal-body') as Element;
        modalBody.innerHTML = '';

        $modalElement.querySelector(selectors.modalDialog)?.classList.add('media-modal');

        const $mediaAppElement = document.querySelector(selectors.mediaApp) as HTMLElement
        if (!$cachedMediaApp) {
            $cachedMediaApp = $mediaAppElement.parentNode?.removeChild($mediaAppElement) as Element;
        }

        modalBody.appendChild($cachedMediaApp);

        // mediaApp has "display: none" as default.
        // This replaces jquery show() function albeit poorly.
        $mediaAppElement.style.display = 'block';

        clearEventListeners($modalElement.querySelector(selectors.modalSubmitButton) as Element)
        const $okButton = $modalElement.querySelector(selectors.modalSubmitButton) as Element
        $okButton.addEventListener('click', async () => {
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
                $modal.hide();
            }

            window.mediaApp.selectedMedias = [];

            return true;
        });

        $modal.show();
    };

    return {
        description,
        label,
        action: (onAdd: (items: IGalleryItem[]) => void) => {

            const modalElement = document.querySelector(`.gallery > .${id}-ModalBody`) as Element;
            displayMediaLibrary(modalElement, onAdd);
        },
    };
};
