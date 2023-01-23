/**
 * Gallery lightbox
 */

import 'lightgallery.js';
import 'lg-video.js';

const lightGallery = (window as any).lightGallery;

const gallery = ($el: Element): void => {
    // Handle single link
    if ($el instanceof HTMLAnchorElement) {
        lightGallery($el, {
            selector: 'this',
            videoMaxWidth: '100%',
        });

        return;
    }

    // Handle multiple images/links
    lightGallery($el, {
        selector: 'a',
        videoMaxWidth: '100%',
    });
};

const init = (): void => {
    const selector = '.js-gallery';
    const $elements = document.querySelectorAll(selector);

    for (const $element of $elements) {
        gallery($element);
    }
};

init();
