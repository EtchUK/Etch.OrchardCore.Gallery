using Etch.OrchardCore.Gallery.Models;
using OrchardCore.ContentManagement;
using System.Linq;

namespace Etch.OrchardCore.Gallery.ViewModels
{
    public class GalleryPartDisplayViewModel 
    {
        public ContentItem ContentItem { get; set; }
        public GalleryPartItemViewModel[] MediaItems { get; set; }
        public GalleryPart Part { get; set; }

        public bool HasMediaItems
        {
            get { return MediaItems != null && MediaItems.Any(); }
        }
    }
}
