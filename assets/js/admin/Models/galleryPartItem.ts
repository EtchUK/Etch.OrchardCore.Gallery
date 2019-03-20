export class GalleryPartItem {
    type: number;
    url: string;
    title: string;
    thumb: string;

    constructor(type: number, url: string, title: string, thumb: string) {
        this.type = type;
        this.url = url;
        this.title = title;
        this.thumb = thumb;
    }
}
