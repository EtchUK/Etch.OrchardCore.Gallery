import { GalleryModel } from '../Models/galleryModel';
import { GalleryJsonModel } from '../Models/galleryJsonModel';
import { GalleryPartItem } from '../Models/galleryPartItem';
import { GalleryPartType } from '../Models/galleryPartType';

export const addVideoEmbed = (): GalleryModel => {
    const galleryModel = new GalleryModel();

    galleryModel.description =
        'This module allows users to add video embed to the gallery';
    galleryModel.actionLabel = 'Add Video Embed';

    const id = $('.gallery').attr('id');

    galleryModel.action = () => {
        const $modal = $('.gallery > .' + id + '-ModalBody');
        initModal($modal);
        $modal.show();
    };

    const initModal = ($modal: JQuery) => {
        // Update title
        $modal.find('.modal-title').html('Add Video Embed');

        // Add content
        const $body = $modal.find('.modal-body');
        $body.html(
            '<fieldset class="form-group">\
        <label for="embedUrl">URL</label> \
        <input type="text" id="embedUrl" name="embedUrl" class="form-control content-preview-text content-caption-text">\
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

            getEmbedThumb($('#embedUrl').val() as string).then(
                (url: string) => {
                    const galleryPartItem = new GalleryPartItem(
                        GalleryPartType.Video,
                        $('#embedUrl').val() as string,
                        '',
                        url
                    );
                    galleryJsonModel.add(galleryPartItem);
                }
            );

            $modal.hide();
        });
    };

    const getEmbedThumb = async (url: string): Promise<string> => {
        const youtubeId = getYoutubeId(url);
        if (youtubeId) {
            return Promise.resolve(
                '//img.youtube.com/vi/' + youtubeId + '/0.jpg'
            );
        }

        const vimeoId = getVimeoId(url);
        return $.getJSON(
            '//www.vimeo.com/api/v2/video/' + vimeoId + '.json?callback=?',
            { format: 'json' }
        ).then((data: any) => {
            if (data && data[0]) {
                return data[0].thumbnail_large;
            }
        });
    };

    const getYoutubeId = (url: string): string | null => {
        const youtube_regex = /^.*(youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/;
        const parsed = url.match(youtube_regex);
        if (parsed && parsed[2]) {
            return parsed[2];
        }

        return null;
    };

    const getVimeoId = (url: string): string | null => {
        const vimeo_regex = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
        const parsed = url.match(vimeo_regex);
        if (parsed && parsed[5]) {
            return parsed[5];
        }

        return null;
    };

    return galleryModel;
};
