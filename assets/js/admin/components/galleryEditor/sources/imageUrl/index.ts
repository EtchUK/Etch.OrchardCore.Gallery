import {
    EnumGalleryItemType,
    GalleryItemType,
    IGallerySource,
    IGalleryItem,
} from '../../models';
import { imageExists } from './helpers/imageExists';
import { show } from '../helpers/modal';

const urlFieldId: string = 'imageUrl';
const titleFieldId: string = 'imageTitle';

const body: string = `<fieldset class="form-group">
    <label for="${titleFieldId}">Title</label>
    <input type="text" id="${titleFieldId}" name="${titleFieldId}" class="form-control content-preview-text content-caption-text">
</fieldset>
<fieldset class="form-group">
    <label for="${urlFieldId}">URL</label>
    <input type="text" id="${urlFieldId}" name="${urlFieldId}" class="form-control content-preview-text content-caption-text">
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
                    const title = $(`#${titleFieldId}`).val() as string;

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
                                    type: EnumGalleryItemType.Image,
                                    typeName: GalleryItemType.getName(
                                        EnumGalleryItemType.Image
                                    ),
                                    thumb: url,
                                    title,
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
