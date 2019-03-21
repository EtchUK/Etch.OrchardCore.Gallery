import { GalleryPartItem } from '../Models/galleryPartItem';

export class GalleryJsonModel {
    private jsonInput: JQuery<HTMLElement>;

    constructor(jsonInput: JQuery<HTMLElement>) {
        this.jsonInput = jsonInput;
    }

    add: (galleryPartItem: GalleryPartItem) => void = (galleryPartItem: GalleryPartItem) => {
        if (galleryPartItem.url == '') {
            return;
        }

        const jsonString = (this.jsonInput.val() as string) || '[]';
        const jsonParsed = JSON.parse(jsonString) as [GalleryPartItem];
        jsonParsed.push(galleryPartItem);

        this.jsonInput.val(JSON.stringify(jsonParsed));

        // This is the only way we can trigger change
        const e = document.createEvent('HTMLEvents');
        e.initEvent('change', true, true);
        this.jsonInput[0].dispatchEvent(e);
    };

    get: () => [GalleryPartItem] = () => {
        const jsonString = (this.jsonInput.val() as string) || '[]';
        return JSON.parse(jsonString) as [GalleryPartItem];;
    }
}
