export const getEmbedThumb = async (url: string): Promise<string> => {
    const youtubeId = getYoutubeId(url);
    if (youtubeId) {
        return Promise.resolve('//img.youtube.com/vi/' + youtubeId + '/0.jpg');
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

export const getYoutubeId = (url: string): string | null => {
    const youtube_regex = /^.*(youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/;
    const parsed = url.match(youtube_regex);

    if (parsed && parsed[2]) {
        return parsed[2];
    }

    return null;
};

export const getVimeoId = (url: string): string | null => {
    const vimeo_regex = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
    const parsed = url.match(vimeo_regex);

    if (parsed && parsed[5]) {
        return parsed[5];
    }

    return null;
};
