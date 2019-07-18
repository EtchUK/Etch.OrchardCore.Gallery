import {
    EnumGalleryItemType,
    GalleryCollection,
    GalleryItemType,
    IGallerySource,
} from '../../models';
import { show } from '../helpers/modal';
import { getYoutubeId, getVimeoId, getEmbedThumb } from './helpers/vendor';

const embedUrlFieldId: string = 'embedUrl';
const body: string = `<fieldset class="form-group">
    <label for="embedUrl">URL</label>
    <input type="text" id="${embedUrlFieldId}" name="${embedUrlFieldId}" class="form-control">
</fieldset>`;

const description: string =
    'Add video by specifying URL to embed from third party sites (e.g. YouTube)';

const label: string = 'Add via Video Embed URL';

const invalidUrlMessage: string = 'Please enter a valid YouTube/Vimeo URL';

export default (id: string): IGallerySource => {
    return {
        description,
        label,
        action: () => {
            show($(`.gallery > .${id}-ModalBody`), {
                body,
                label,
                onComplete: (): Promise<boolean> => {
                    return new Promise(resolve => {
                        const url = $(`#${embedUrlFieldId}`).val() as string;

                        if (!getYoutubeId(url) && !getVimeoId(url)) {
                            alert(invalidUrlMessage);
                            resolve(false);
                            return;
                        }

                        const galleryCollection = new GalleryCollection(
                            $('.gallery > .' + id + '-MediaItems').first()
                        );

                        getEmbedThumb(url)
                            .then((thumb: string) => {
                                galleryCollection.add({
                                    type: EnumGalleryItemType.Video,
                                    typeName: GalleryItemType.getName(
                                        EnumGalleryItemType.Video
                                    ),
                                    thumb,
                                    title: '',
                                    url,
                                });

                                resolve(true);
                            })
                            .catch(error => {
                                resolve(false);
                            });
                    });
                },
            });
        },
    };
};
