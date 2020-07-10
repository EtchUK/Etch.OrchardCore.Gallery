namespace Etch.OrchardCore.Gallery.Settings
{
    public class GalleryPartSettings
    {
        public const int DefaultThumbnailWidth = 480;
        public const int DefaultThumbnailHeight = 270;

        public int ThumbnailWidth { get; set; } = DefaultThumbnailWidth;
        public int ThumbnailHeight { get; set; } = DefaultThumbnailHeight;
    }
}
