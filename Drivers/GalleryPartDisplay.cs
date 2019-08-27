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
                model.MediaItems = ShapeMediaItems(part.MediaItems);
            }).Location("Content:10");
        }


        public override IDisplayResult Edit(GalleryPart part, BuildPartEditorContext context)
        {
            return Initialize<GalleryPartEditViewModel>("GalleryPart_Edit", m =>
            {
                m.MediaItems = JsonConvert.SerializeObject(ShapeMediaItems(part.MediaItems, false));
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

        private string GetThumbnail(GalleryPartItem item)
        {
            if (item.Type == (int)GalleryPartType.LocalImage)
            {
                return $"{_mediaFileStore.MapPathToPublicUrl(item.Url)}?width={ThumbnailDimension}&rmode=crop";
            }

            return item.Url;
        }

        private string GetUrl(GalleryPartItem item)
        {
            if (item.Type == (int)GalleryPartType.LocalImage)
            {
                return _mediaFileStore.MapPathToPublicUrl(item.Url);
            }

            return item.Url;
        }

        private GalleryPartItemViewModel[] ShapeMediaItems(GalleryPartItem[] mediaItems, bool isDisplay = true)
        {
            return mediaItems.Select(x => new GalleryPartItemViewModel
            {
                Thumb = GetThumbnail(x),
                Title = x.Title,
                Type = x.Type,
                TypeName = x.TypeName,
                Url = isDisplay ? GetUrl(x) : x.Url
            }).ToArray();
        }

        #endregion
    }
}
