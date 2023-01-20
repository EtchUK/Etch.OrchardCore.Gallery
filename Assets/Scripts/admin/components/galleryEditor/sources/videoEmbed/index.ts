import {
    EnumGalleryItemType,
    GalleryItemType,
    IGallerySource,
    IGalleryItem,
} from '../../models';
import { show } from '../helpers/modal';
import { getYoutubeId, getVimeoId, getEmbedThumb } from './helpers/vendor';

const embedUrlFieldId = 'embedUrl';
const titleFieldId = 'title';
const thumbnailUrlFieldId = 'thumbnailUrl';
const body = `<fieldset class="form-group">
    <label for="${embedUrlFieldId}">URL</label>
    <input type="text" id="${embedUrlFieldId}" name="${embedUrlFieldId}" class="form-control">
    <p class="hint">URL to video on <a href="https://vimeo.com">Vimeo</a> or <a href="https://youtube.com">YouTube</a> (e.g. https://www.youtube.com/watch?v=TorVk3Hxm7Q).</p>
</fieldset><fieldset class="form-group">
<label for="${titleFieldId}">Title</label>
<input type="text" id="${titleFieldId}" name="${titleFieldId}" class="form-control">
<p class="hint">Provide a title for this video</p>
</fieldset><fieldset class="form-group">
<label for="${thumbnailUrlFieldId}">Thumbnail URL</label>
<input type="text" id="${thumbnailUrlFieldId}" name="${thumbnailUrlFieldId}" class="form-control">
<p class="hint">URL for a video thumbnail (if one is not provided, a default will be used from either Vimeo or YouTube respectively)</p>
</fieldset>`;

const description =
    'Add video by specifying URL to embed from third party sites (e.g. YouTube)';

const label = 'Add via Video Embed URL';

const invalidUrlMessage = 'Please enter a valid YouTube/Vimeo URL';

export default (id: string): IGallerySource => {
    return {
        description,
        label,
        action: (onAdd: (items: IGalleryItem[]) => void) => {
            show($(`.gallery > .${id}-ModalBody`), {
                body,
                label,
                onComplete: (): Promise<boolean> => {
                    return new Promise((resolve) => {
                        const url = $(`#${embedUrlFieldId}`).val() as string;
                        const title = $(`#${titleFieldId}`).val() as string;
                        const thumbnailUrl = $(
                            `#${thumbnailUrlFieldId}`
                        ).val() as string;

                        if (!getYoutubeId(url) && !getVimeoId(url)) {
                            alert(invalidUrlMessage);
                            resolve(false);
                            return;
                        }

                        getEmbedThumb(url)
                            .then((thumb: string) => {
                                onAdd([
                                    {
                                        type: EnumGalleryItemType.Video,
                                        typeName: GalleryItemType.getName(
                                            EnumGalleryItemType.Video
                                        ),
                                        thumb: thumbnailUrl || thumb,
                                        title,
                                        url,
                                    },
                                ]);

                                resolve(true);
                            })
                            .catch(() => {
                                resolve(false);
                            });
                    });
                },
            });
        },
    };
};
