export enum EnumGalleryItemType {
    Image = 1,
    Video = 2,
    ExternalImage = 3,
    LocalImage = 4
}

export class GalleryItemType {
    static getName: (index: number) => string = (index: number) => {
        switch (index) {
            case EnumGalleryItemType.Image:
                return 'Image';
            case EnumGalleryItemType.Video:
                return 'Video';
            case EnumGalleryItemType.ExternalImage:
                return 'External Image';
            case EnumGalleryItemType.LocalImage:
                return 'Local Image';
            default:
                return '';
        }
    };
}
