//import 'bootstrap';

import galleryEditor from './components/galleryEditor';
import { IGalleryItem } from './components/galleryEditor/models';

declare global {
    interface Window {
        galleryApp: any;
    }
}

window.galleryApp = window.galleryApp || {};

(window as any).initializeGalleryEditor = (el: HTMLElement): void => {
    if (!el) {
        return;
    }

    let elem_for = el.attributes.getNamedItem("data-for");
    if (elem_for && elem_for.value) {
        let input = document.getElementById(elem_for.value);
        if (input) {
            let init_attr = input.attributes.getNamedItem("data-init");
            if (init_attr && init_attr.value) {
                galleryEditor(el, JSON.parse(init_attr.value) as unknown as IGalleryItem[]);
            }
        }
    }

    // galleryEditor(el, $(`#${$(el).data('for')}`).data('init'));
};