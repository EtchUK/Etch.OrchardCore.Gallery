﻿using Etch.OrchardCore.Gallery.Models;
using Etch.OrchardCore.Gallery.ViewModels;
using Newtonsoft.Json;
using OrchardCore.ContentManagement.Display.ContentDisplay;
using OrchardCore.ContentManagement.Display.Models;
using OrchardCore.DisplayManagement.ModelBinding;
using OrchardCore.DisplayManagement.Views;
using System.Linq;
using System.Threading.Tasks;
using OrchardCore.Media;
using Etch.OrchardCore.Gallery.Settings;
using System;
using OrchardCore.ContentManagement.Metadata;

namespace Etch.OrchardCore.Gallery.Drivers
{
    public class GalleryPartDisplay : ContentPartDisplayDriver<GalleryPart>
    {

        #region Dependencies

        private readonly IContentDefinitionManager _contentDefinitionManager;
        private readonly IMediaFileStore _mediaFileStore;

        #endregion

        #region Constructor

        public GalleryPartDisplay(IContentDefinitionManager contentDefinitionManager, IMediaFileStore mediaFileStore) {
            _contentDefinitionManager = contentDefinitionManager;
            _mediaFileStore = mediaFileStore;
        }

        #endregion

        #region Overrides

        public override IDisplayResult Display(GalleryPart part, BuildPartDisplayContext context) {
            if (context.DisplayType != "Detail")
            {
                return null;
            }

            var settings = GetSettings(part);

            return Initialize<GalleryPartDisplayViewModel>("GalleryPart", model => {
                model.MediaItems = ShapeMediaItems(settings, part.MediaItems);
            }).Location("Content:10");
        }


        public override IDisplayResult Edit(GalleryPart part, BuildPartEditorContext context)
        {
            return Initialize<GalleryPartEditViewModel>("GalleryPart_Edit", m =>
            {
                m.MediaItems = JsonConvert.SerializeObject(ShapeMediaItems(GetSettings(part), part.MediaItems, false));
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

        private string GetThumbnail(GalleryPartItem item, GalleryPartSettings settings)
        {
            if (item.Type == (int)GalleryPartType.LocalImage)
            {
                return $"{_mediaFileStore.MapPathToPublicUrl(item.Url)}?width={settings.ThumbnailWidth}&height={settings.ThumbnailHeight}&rmode=crop";
            }

            return item.Thumb;
        }

        private GalleryPartSettings GetSettings(GalleryPart part)
        {
            return _contentDefinitionManager.GetTypeDefinition(part.ContentItem.ContentType)
                ?.Parts
                .FirstOrDefault(x => string.Equals(x.PartDefinition.Name, nameof(GalleryPart), StringComparison.Ordinal))
                ?.GetSettings<GalleryPartSettings>();
        }

        private string GetUrl(GalleryPartItem item)
        {
            if (item.Type == (int)GalleryPartType.LocalImage)
            {
                return _mediaFileStore.MapPathToPublicUrl(item.Url);
            }

            return item.Url;
        }

        private GalleryPartItemViewModel[] ShapeMediaItems(GalleryPartSettings settings, GalleryPartItem[] mediaItems, bool isDisplay = true)
        {
            return mediaItems.Select(x => new GalleryPartItemViewModel
            {
                Thumb = GetThumbnail(x, settings),
                Title = x.Title,
                Type = x.Type,
                TypeName = x.TypeName,
                Url = isDisplay ? GetUrl(x) : x.Url
            }).ToArray();
        }

        #endregion
    }
}
