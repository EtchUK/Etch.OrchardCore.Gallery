using Microsoft.Extensions.Localization;
using Etch.OrchardCore.Gallery.Models;
using Etch.OrchardCore.Gallery.ViewModels;
using Newtonsoft.Json;
using OrchardCore.ContentManagement.Display.ContentDisplay;
using OrchardCore.ContentManagement.Display.Models;
using OrchardCore.DisplayManagement.ModelBinding;
using OrchardCore.DisplayManagement.Views;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etch.OrchardCore.Gallery.Drivers
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


        public override IDisplayResult Display(GalleryPart part) {
            return Initialize<GalleryPartDisplayViewModel>("GalleryPart", model => {
                model.MediaItems = part.MediaItems.ToList();
            }).Location("Content:10");
        }


        public override IDisplayResult Edit(GalleryPart part, BuildPartEditorContext context)
        {
            return Initialize<GalleryPartEditViewModel>("GalleryPart_Edit", m =>
            {
                m.MediaItems =  JsonConvert.SerializeObject(part.MediaItems);
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
    }
}
