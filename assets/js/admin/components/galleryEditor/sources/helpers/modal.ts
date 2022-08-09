import selectors from './selectors';
import bootstrap from 'bootstrap';

export interface IShowModalOptions {
    body: string;
    label: string;

    onComplete: () => Promise<boolean>;
}

export const show = ($modalElement: Element, options: IShowModalOptions) => {
    var $modal = new bootstrap.Modal($modalElement)

    const modalTitle = $modalElement.querySelector('.modal-title') as Element;
    modalTitle.textContent = options.label;

    const modalBody = $modalElement.querySelector('.modal-body') as Element;
    modalBody.innerHTML = options.body;

    $modalElement.querySelector(selectors.modalDialog)?.classList.remove('media-modal');

    let $okButton = $modalElement.querySelector(selectors.modalSubmitButton) as Element;
    clearEventListeners($okButton);
    $okButton = $modalElement.querySelector(selectors.modalSubmitButton) as Element;

    $okButton.addEventListener('click', () => {
        if (!options.onComplete) {
            $modal.hide();
            return;
        }

        options.onComplete().then((isSuccess: Boolean) => {
            if (isSuccess) {
                $modal.hide();
                return;
            }
        });
    });

    $modal.show();
};

// this function essentially clones node and replaces with itself
// as a result it clears all existing eventlisteners
// similar to $elem.off() function in jquery
export const clearEventListeners = (element: Element) => {
    element.outerHTML = element.outerHTML;
}
