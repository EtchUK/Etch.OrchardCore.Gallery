import selectors from './selectors';

export interface IShowModalOptions {
    body: string;
    label: string;

    onComplete: () => Promise<boolean>;
}

export const hide = (modal: JQuery<HTMLElement> | null) => {
    if (modal !== null) {
        modal.modal('hide');
    }
};

export const show = ($modal: JQuery, options: IShowModalOptions) => {
    const $cancelButtons = $modal.find(selectors.modalCancelButton);
    const $okButton = $modal.find(selectors.modalSubmitButton).first();
    let modal: JQuery<HTMLElement> | null = null;

    $modal.find(selectors.modalDialog).removeClass('media-modal');

    $modal.find(selectors.modalTitle).html(options.label);
    $modal.find(selectors.modalBody).html(options.body);

    $cancelButtons.each((index: number) => {
        const $cancelButton = $($cancelButtons[index]);
        $cancelButton.off('click').on('click', () => {
            hide(modal);
        });
    });

    $okButton.off('click').on('click', () => {
        if (!options.onComplete) {
            hide(modal);
        }

        options.onComplete().then((isSuccess: Boolean) => {
            if (isSuccess) {
                hide(modal);
            }
        });
    });

    $modal.show();
    modal = $modal.modal();
};
