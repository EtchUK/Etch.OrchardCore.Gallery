export const imageExists = async (url: string): Promise<boolean> => {
    return new Promise(resolve => {
        var img = new Image();
        img.onload = function (e) {
            resolve(true);
        };
        img.onerror = function (e) {
            resolve(false);
        };
        img.src = url;
    });
};
