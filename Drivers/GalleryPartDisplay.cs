using Microsoft.Extensions.Localization;
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
        #region Dependencies

        private readonly IStringLocalizer<GalleryPartDisplay> T;

        #endregion

        #region Constructor

        public GalleryPartDisplay(IStringLocalizer<GalleryPartDisplay> localizer) {
            T = localizer;
        }

        #endregion


        public override IDisplayResult Edit(GalleryPart part, BuildPartEditorContext context)
        {
            return Initialize<GalleryPartEditViewModel>("GalleryPart_Fields_Edit", m =>
            {
                m.MediaItems = part.MediaItems;
            });
        }

        public async override Task<IDisplayResult> UpdateAsync(GalleryPart part, IUpdateModel updater)
        {
            var viewModel = new GalleryPartEditViewModel();

            if (await updater.TryUpdateModelAsync(viewModel, Prefix))
            {
                viewModel.MediaItems = part.MediaItems;
            }

            return Edit(part);
        }
    }
}
