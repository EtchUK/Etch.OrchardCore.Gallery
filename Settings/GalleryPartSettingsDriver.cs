using OrchardCore.ContentManagement.Metadata.Models;
using OrchardCore.ContentTypes.Editors;
using OrchardCore.DisplayManagement.Views;
using System.Threading.Tasks;

namespace Etch.OrchardCore.Gallery.Settings
{
    public class GalleryPartSettingsDriver : ContentTypePartDefinitionDisplayDriver
    {
        public override IDisplayResult Edit(ContentTypePartDefinition partDefinition)
        {
            return Initialize<GalleryPartSettings>("GalleryPartSettings_Edit", model =>
            {
                partDefinition.PopulateSettings(model);
            })
           .Location("Content");
        }

        public override async Task<IDisplayResult> UpdateAsync(ContentTypePartDefinition contentTypePartDefinition, UpdateTypePartEditorContext context)
        {
            var settings = new GalleryPartSettings();

            if (await context.Updater.TryUpdateModelAsync(settings, Prefix, m => m.ThumbnailWidth))
            {
                context.Builder.WithSettings(settings);
            }

            return Edit(contentTypePartDefinition, context.Updater);
        }
    }
}
