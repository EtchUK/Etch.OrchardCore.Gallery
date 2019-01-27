using Moov2.OrchardCore.Gallery.Models;
using Moov2.OrchardCore.Gallery.ViewModels;
using OrchardCore.ContentManagement.Display.ContentDisplay;
using OrchardCore.ContentManagement.Display.Models;
using OrchardCore.DisplayManagement.ModelBinding;
using OrchardCore.DisplayManagement.Views;
using System.Threading.Tasks;

namespace Moov2.OrchardCore.Gallery.Drivers
{
    public class GalleryPartDisplay : ContentPartDisplayDriver<GalleryPart>
    {
        public override IDisplayResult Edit(GalleryPart part, BuildPartEditorContext context)
        {
            return Initialize<GalleryPartEditViewModel>("GalleryPart_Fields_Edit", m =>
            {

            });
        }

        public async override Task<IDisplayResult> UpdateAsync(GalleryPart part, IUpdateModel updater)
        {
            var viewModel = new GalleryPartEditViewModel();

            if (await updater.TryUpdateModelAsync(viewModel, Prefix))
            {

            }

            return Edit(part);
        }
    }
}
