/**
 * Gallery lightbox
 */

import 'lightgallery.js'
import 'lg-video.js'

const gallery = function ($el) {

    // Handle single link
    if($el instanceof HTMLAnchorElement) {
        var lightgallary = lightGallery($el, {
            selector: 'this',
            videoMaxWidth: '100%'
        })

        return {
            lightgallary
        }
    }

    // Handle multiple images/links
    var lightgallary = lightGallery($el, {
        selector: 'a',
        videoMaxWidth: '100%'
    })

    return {
        lightgallary
    }
}

const init = function () {
    const selector = '.js-gallery'
    let $elements = document.querySelectorAll(selector)
    let instances = []
    let instance

    for (let i = 0; i < $elements.length; ++i) {
        instance = gallery($elements[i])

        if (instance) {
            instances.push(instance)
        }
    }

    return instances
}

init();