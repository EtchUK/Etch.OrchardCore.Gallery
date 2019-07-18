export enum EnumGalleryItemType {
    Image = 1,
    Video = 2,
}

export class GalleryItemType {
    static getName: (index: number) => string = (index: number) => {
        switch (index) {
            case EnumGalleryItemType.Image:
                return 'Image';
            case EnumGalleryItemType.Video:
                return 'Video';
            default:
                return '';
        }
    };
}
