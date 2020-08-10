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
        public override IDisplayResult Edit(ContentTypePartDefinition contentTypePartDefinition)
        {
            if (!string.Equals(nameof(GalleryPart), contentTypePartDefinition.PartDefinition.Name, StringComparison.Ordinal))
            {
                return null;
            }

            return Initialize<GalleryPartSettings>("GalleryPartSettings_Edit", model =>
            {
                var settings = contentTypePartDefinition.GetSettings<GalleryPartSettings>();

                model.ThumbnailHeight = settings.ThumbnailHeight;
                model.ThumbnailWidth = settings.ThumbnailWidth;
            })
           .Location("Content");
        }

        public override async Task<IDisplayResult> UpdateAsync(ContentTypePartDefinition contentTypePartDefinition, UpdateTypePartEditorContext context)
        {
            var settings = new GalleryPartSettings();

            if (await context.Updater.TryUpdateModelAsync(settings, Prefix))
            {
                context.Builder.WithSettings(settings);
            }

            return Edit(contentTypePartDefinition);
        }
    }
}
