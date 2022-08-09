import { addFromMediaPicker, addImageUrl, addVideoEmbed } from './sources';
import { IGalleryItem, IGallerySource } from './models';

import draggable = require('vuedraggable');
import Vue from 'vue';

declare global {
    interface Window {
        mediaApp: any;
    }
}

export default (el: HTMLElement, initialData: IGalleryItem[]): void => {
    const sources = [
        addFromMediaPicker(el.id),
        addImageUrl(el.id),
        addVideoEmbed(el.id),
    ];

    new Vue({
        el,

        data: {
            items: [] as IGalleryItem[],
            sources,
        },

        components: {
            draggable,
        },

        computed: {
            hasItems(): boolean {
                return this.items.length > 0;
            },

            value(): string {
                return JSON.stringify(this.items);
            },
        },

        mounted: function () {
            this.items = initialData;
        },

        methods: {
            action: function (source: IGallerySource): void {
                const self = this;

                source.action(
                    (items: IGalleryItem[]): void => {
                        self.items.push(...items);
                    }
                );
            },

            remove: function (index: number): void {
                this.items.splice(index, 1);
            },

            updatePreview: function () {
                this.$nextTick(() => {
                    $(document).trigger('contentpreview:render');
                });
            },
        },

        watch: {
            items: function () {
                this.updatePreview();
            },
        },
    });
};
