
export enum EnumGalleryPartType {
    Image = 1,
    Video = 2
}

export class GalleryPartType {
    static getName: (index: number) => string = (index: number) => {
        switch (index) {
            case EnumGalleryPartType.Image:
                return 'Image';
            case EnumGalleryPartType.Video:
                return 'Video'
            default:
                return ''
        }
    }
}
