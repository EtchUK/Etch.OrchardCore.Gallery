import IGalleryItem from './galleryItem';

export default class GalleryCollection {
    private $input: JQuery<HTMLElement>;

    constructor($input: JQuery<HTMLElement>) {
        this.$input = $input;
    }

    add: (item: IGalleryItem) => void = (item: IGalleryItem) => {
        if (!item.url) {
            return;
        }

        let items = this.get();
        items.push(item);
        this.set(items);
    };

    addAll: (items: IGalleryItem[]) => void = (items: IGalleryItem[]) => {
        if (items.length === 0) {
            return;
        }

        const currentItems = this.get();

        items.forEach(item => {
            currentItems.push(item);
        });

        this.set(currentItems);
    };

    delete: (index: number) => void = (index: number) => {
        this.set(this.get().splice(index, 1));
    };

    get: () => IGalleryItem[] = () => {
        return JSON.parse(this.getValue()) as IGalleryItem[];
    };

    getValue: () => string = () => {
        return (this.$input.val() as string) || '[]';
    };

    move: (fromIndex: number, toIndex: number) => void = (
        fromIndex: number,
        toIndex: number
    ) => {
        const items = this.get();

        var element = items[fromIndex];
        items.splice(fromIndex, 1);
        items.splice(toIndex, 0, element);

        this.set(items);
    };

    set: (items: IGalleryItem[]) => void = (items: IGalleryItem[]) => {
        this.$input.val(JSON.stringify(items));
        this.triggerChange();
    };

    triggerChange: () => void = () => {
        // This is the only way we can trigger change
        const e = document.createEvent('HTMLEvents');
        e.initEvent('change', true, true);
        this.$input[0].dispatchEvent(e);
    };
}
