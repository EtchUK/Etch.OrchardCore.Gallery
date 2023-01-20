import bootstrap from 'bootstrap';
import selectors from './selectors';

export interface IShowModalOptions {
    body: string;
    label: string;

    onComplete: () => Promise<boolean>;
}

export const hide = (modal: bootstrap.Modal | null) => {
    if (modal !== null) {
        modal.hide();
    }
};

export const show = ($modal: JQuery, options: IShowModalOptions) => {
    const $cancelButtons = $modal.find(selectors.modalCancelButton);
    const $okButton = $modal.find(selectors.modalSubmitButton).first();
    const modal = new bootstrap.Modal($modal[0]);

    $modal.find(selectors.modalDialog).removeClass('media-modal');

    $modal.find(selectors.modalTitle).html(options.label);
    $modal.find(selectors.modalBody).html(options.body);

    $cancelButtons.each((index: number) => {
        const $cancelButton = $($cancelButtons[index]);
        $cancelButton.off('click').on('click', () => {
            modal.hide();
        });
    });

    $okButton.off('click').on('click', () => {
        if (!options.onComplete) {
            modal.hide();
        }

        options.onComplete().then((isSuccess: boolean) => {
            if (isSuccess) {
                modal.hide();
            }
        });
    });

    modal.show();
};
