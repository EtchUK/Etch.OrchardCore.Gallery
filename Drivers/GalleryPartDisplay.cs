using Microsoft.Extensions.Localization;
using Etch.OrchardCore.Gallery.Models;
using Etch.OrchardCore.Gallery.ViewModels;
using Newtonsoft.Json;
using OrchardCore.ContentManagement.Display.ContentDisplay;
using OrchardCore.ContentManagement.Display.Models;
using OrchardCore.DisplayManagement.ModelBinding;
using OrchardCore.DisplayManagement.Views;
using System.Linq;
using System.Threading.Tasks;
using OrchardCore.Media;

namespace Etch.OrchardCore.Gallery.Drivers
{
    public class GalleryPartDisplay : ContentPartDisplayDriver<GalleryPart>
    {
        #region Constants

        private const int ThumbnailDimension = 280;

        #endregion

        #region Dependencies

        private readonly IStringLocalizer<GalleryPartDisplay> T;
        private readonly IMediaFileStore _mediaFileStore;

        #endregion

        #region Constructor

        public GalleryPartDisplay(IStringLocalizer<GalleryPartDisplay> localizer, IMediaFileStore mediaFileStore) {
            T = localizer;
            _mediaFileStore = mediaFileStore;
        }

        #endregion

        #region Overrides

        public override IDisplayResult Display(GalleryPart part, BuildPartDisplayContext context) {
            if (context.DisplayType != "Detail")
            {
                return null;
            }

            return Initialize<GalleryPartDisplayViewModel>("GalleryPart", model => {
                model.MediaItems = part.MediaItems.ToList();
            }).Location("Content:10");
        }


        public override IDisplayResult Edit(GalleryPart part, BuildPartEditorContext context)
        {
            return Initialize<GalleryPartEditViewModel>("GalleryPart_Edit", m =>
            {
                m.MediaItems = JsonConvert.SerializeObject(SetUrls(part.MediaItems));
            });
        }

        public async override Task<IDisplayResult> UpdateAsync(GalleryPart part, IUpdateModel updater)
        {
            var viewModel = new GalleryPartEditViewModel();

            if (await updater.TryUpdateModelAsync(viewModel, Prefix))
            {
                part.MediaItems = JsonConvert.DeserializeObject<GalleryPartItem[]>(viewModel.MediaItems);
            }

            return Edit(part);
        }

        #endregion

        #region Private Methods

        private GalleryPartItem[] SetUrls(GalleryPartItem[] mediaItems)
        {
            foreach (var item in mediaItems)
            {
                if (item.Type.ToString() == GalleryPartType.LocalImage.ToString())
                {
                    item.Url = _mediaFileStore.MapPathToPublicUrl(item.Url);
                    item.Thumb = $"{_mediaFileStore.MapPathToPublicUrl(item.Thumb)}?width={ThumbnailDimension}&rmode=crop";
                }
            }

            return mediaItems;
        }

        #endregion
    }
}
