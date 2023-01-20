import { IGalleryItem } from '.';

export default interface IGallerySource {
    description: string;
    label: string;

    action: (onAdd: (items: IGalleryItem[]) => void) => void;
}
