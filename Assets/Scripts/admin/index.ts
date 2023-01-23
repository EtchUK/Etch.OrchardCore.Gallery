import 'jquery';

import galleryEditor from './components/galleryEditor';

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

    galleryEditor(el, $(`#${$(el).data('for')}`).data('init'));
};
