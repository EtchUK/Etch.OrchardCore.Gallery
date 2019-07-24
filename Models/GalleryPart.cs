using OrchardCore.ContentManagement;

namespace Etch.OrchardCore.Gallery.Models
{
    public class GalleryPart : ContentPart
    {
        public GalleryPartItem[] MediaItems { get; set; } = new GalleryPartItem[] { };
    }
}
