using Etch.OrchardCore.Gallery.Models;
using Etch.OrchardCore.Gallery.ViewModels;
using OrchardCore.ContentManagement.Metadata.Models;
using OrchardCore.ContentTypes.Editors;
using OrchardCore.DisplayManagement.ModelBinding;
using OrchardCore.DisplayManagement.Views;
using System;
using System.Threading.Tasks;

namespace Etch.OrchardCore.Gallery.Settings
{
    public class GalleryPartSettingsDriver : ContentTypePartDefinitionDisplayDriver
    {
        public override IDisplayResult Edit(ContentTypePartDefinition contentTypePartDefinition, IUpdateModel updater)
        {
            if (!string.Equals(nameof(GalleryPart), contentTypePartDefinition.PartDefinition.Name, StringComparison.Ordinal))
            {
                return null;
            }

            return Initialize<GalleryPartSettingsViewModel>("GalleryPartSettings_Edit", model =>
            {
                var settings = contentTypePartDefinition.Settings.ToObject<GalleryPartSettings>();

                model.ThumbnailSize = settings.ThumbnailSize;
                model.GalleryPartSettings = settings;
            }).Location("Content");
        }

        public override async Task<IDisplayResult> UpdateAsync(ContentTypePartDefinition contentTypePartDefinition, UpdateTypePartEditorContext context)
        {
            if (!string.Equals(nameof(GalleryPart), contentTypePartDefinition.PartDefinition.Name, StringComparison.Ordinal))
            {
                return null;
            }

            var model = new GalleryPartSettingsViewModel();

            await context.Updater.TryUpdateModelAsync(model, Prefix, m => m.ThumbnailSize);
            
            context.Builder.WithSetting(nameof(GalleryPartSettings.ThumbnailSize), model.ThumbnailSize.ToString());

            return Edit(contentTypePartDefinition, context.Updater);
        }
    }
}
