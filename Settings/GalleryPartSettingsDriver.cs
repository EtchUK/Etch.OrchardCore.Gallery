using Etch.OrchardCore.Gallery.Models;
using OrchardCore.ContentManagement.Metadata.Models;
using OrchardCore.ContentTypes.Editors;
using OrchardCore.DisplayManagement.Views;
using System;
using System.Threading.Tasks;

namespace Etch.OrchardCore.Gallery.Settings
{
    public class GalleryPartSettingsDriver : ContentTypePartDefinitionDisplayDriver
    {
        public override IDisplayResult Edit(ContentTypePartDefinition model)
        {
            if (!string.Equals(nameof(GalleryPart), model.PartDefinition.Name, StringComparison.Ordinal))
            {
                return null;
            }

            return Initialize<GalleryPartSettings>("GalleryPartSettings_Edit", settings =>
            {
                var galleryPartSettings = model.GetSettings<GalleryPartSettings>();

                settings.ThumbnailHeight = galleryPartSettings.ThumbnailHeight;
                settings.ThumbnailWidth = galleryPartSettings.ThumbnailWidth;
            })
           .Location("Content");
        }

        public override async Task<IDisplayResult> UpdateAsync(ContentTypePartDefinition model, UpdateTypePartEditorContext context)
        {
            if (!string.Equals(nameof(GalleryPart), model.PartDefinition.Name, StringComparison.Ordinal))
            {
                return null;
            }

            var settings = new GalleryPartSettings();

            if (await context.Updater.TryUpdateModelAsync(settings, Prefix))
            {
                context.Builder.WithSettings(settings);
            }

            return Edit(model);
        }
    }
}
