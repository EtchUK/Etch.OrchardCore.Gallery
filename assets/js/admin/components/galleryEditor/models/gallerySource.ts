export default interface IGallerySource {
    description: string;
    label: string;

    action: () => void;
}
