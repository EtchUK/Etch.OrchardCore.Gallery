import {
    EnumGalleryItemType,
    GalleryItemType,
    IGallerySource,
    IGalleryItem,
} from '../../models';
import { imageExists } from './helpers/imageExists';
import { show } from '../helpers/modal';

const urlFieldId: string = 'imageUrl';

const body: string = `<fieldset class="form-group">
    <label for="${urlFieldId}">URL</label>
    <input type="text" id="${urlFieldId}" name="${urlFieldId}" class="form-control">
    <p class="hint">URL to image hosted on the web (e.g. https://via.placeholder.com/150).
</fieldset>`;

const description: string = 'Add image to gallery by specify URL';
const label: string = 'Add via Image URL';

const invalidUrlMessage: string = 'Please enter a valid image URL';

export default (id: string): IGallerySource => {
    return {
        description,
        label,
        action: (onAdd: (items: IGalleryItem[]) => void) => {
            show($(`.gallery > .${id}-ModalBody`), {
                body,
                label,
                onComplete: (): Promise<boolean> => {
                    const url = $(`#${urlFieldId}`).val() as string;

                    return new Promise(resolve => {
                        imageExists(url).then((isValid: boolean) => {
                            // check if URL is not valid show error
                            if (!isValid) {
                                alert(invalidUrlMessage);
                                resolve(false);
                                return;
                            }

                            onAdd([
                                {
                                    type: EnumGalleryItemType.ExternalImage,
                                    typeName: GalleryItemType.getName(
                                        EnumGalleryItemType.ExternalImage
                                    ),
                                    thumb: url,
                                    title: url,
                                    url,
                                },
                            ]);

                            resolve(true);
                        });
                    });
                },
            });
        },
    };
};
