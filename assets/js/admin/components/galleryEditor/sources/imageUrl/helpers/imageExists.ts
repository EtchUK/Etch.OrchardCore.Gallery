export const imageExists = async (url: string): Promise<boolean> => {
    return new Promise(resolve => {
        var img = new Image();
        img.onload = function() {
            resolve(true);
        };
        img.onerror = function() {
            resolve(false);
        };
        img.src = url;
    });
};
