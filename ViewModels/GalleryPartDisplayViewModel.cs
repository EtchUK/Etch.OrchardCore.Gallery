using Etch.OrchardCore.Gallery.Models;
using System.Collections.Generic;
using System.Linq;

namespace Etch.OrchardCore.Gallery.ViewModels {
    public class GalleryPartDisplayViewModel {
        public List<GalleryPartItem> MediaItems { get; set; }

        public bool HasMediaItems
        {
            get { return MediaItems != null && MediaItems.Any(); }
        }
    }
}
