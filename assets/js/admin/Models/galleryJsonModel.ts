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

        this.triggerChange();
    };

    addAll: (galleryPartItems: GalleryPartItem[]) => void = (galleryPartItems: GalleryPartItem[]) => {

        if(galleryPartItems.length === 0) {
            return;
        }

        const jsonString = (this.jsonInput.val() as string) || '[]';
        const jsonParsed = JSON.parse(jsonString) as [GalleryPartItem];

        galleryPartItems.forEach(galleryPartItem => {
            jsonParsed.push(galleryPartItem);            
        });

        this.jsonInput.val(JSON.stringify(jsonParsed));

        this.triggerChange();
    };

    get: () => [GalleryPartItem] = () => {
        const jsonString = (this.jsonInput.val() as string) || '[]';
        return JSON.parse(jsonString) as [GalleryPartItem];;
    };

    delete: (index: number) => void = (index: number) => {
        const jsonString = (this.jsonInput.val() as string) || '[]';
        const galleryPartItems = JSON.parse(jsonString) as [GalleryPartItem];
        galleryPartItems.splice(index, 1);

        this.jsonInput.val(JSON.stringify(galleryPartItems));

        this.triggerChange();
    };

    move: (fromIndex: number, toIndex: number) => void = (fromIndex: number, toIndex: number) => {
        const jsonString = (this.jsonInput.val() as string) || '[]';
        const galleryPartItems = JSON.parse(jsonString) as [GalleryPartItem];
        
        var element = galleryPartItems[fromIndex];
        galleryPartItems.splice(fromIndex, 1);
        galleryPartItems.splice(toIndex, 0, element);
    
        this.jsonInput.val(JSON.stringify(galleryPartItems));
    };

    triggerChange: () => void = () => {
        // This is the only way we can trigger change
        const e = document.createEvent('HTMLEvents');
        e.initEvent('change', true, true);
        this.jsonInput[0].dispatchEvent(e);
    }
}
