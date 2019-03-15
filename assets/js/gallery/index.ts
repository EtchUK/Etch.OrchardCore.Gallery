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
    let $elements = document.querySelectorAll(selector);

    for (let i = 0; i < $elements.length; ++i) {
        gallery($elements[i]);
    }
};

init();
