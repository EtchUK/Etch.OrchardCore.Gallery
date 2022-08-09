export const getEmbedThumb = async (url: string): Promise<string> => {
    const youtubeId = getYoutubeId(url);
    if (youtubeId) {
        return Promise.resolve(
            '//img.youtube.com/vi/' + youtubeId + '/mqdefault.jpg'
        );
    }

    const vimeoId = getVimeoId(url);
    return fetch(
        'https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' + vimeoId
    ).then((data: any) => {
        return data.json();
    }).then((data: any) => {
        return data.thumbnail_url;
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
