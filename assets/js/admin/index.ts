//import 'bootstrap';
import 'jquery';

import galleryEditor from './components/galleryEditor';

declare global {
    interface Window {
        galleryApp: any;
    }
}

window.galleryApp = window.galleryApp || {};

(window as any).initializeGalleryEditor = (el: HTMLElement): void => {
    galleryEditor(el);
};
