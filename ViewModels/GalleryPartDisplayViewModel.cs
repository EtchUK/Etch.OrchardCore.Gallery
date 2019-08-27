using System.Linq;

namespace Etch.OrchardCore.Gallery.ViewModels
{
    public class GalleryPartDisplayViewModel {
        public GalleryPartItemViewModel[] MediaItems { get; set; }

        public bool HasMediaItems
        {
            get { return MediaItems != null && MediaItems.Any(); }
        }
    }
}
