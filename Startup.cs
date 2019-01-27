using Microsoft.Extensions.DependencyInjection;
using Moov2.OrchardCore.Gallery.Drivers;
using Moov2.OrchardCore.Gallery.Models;
using OrchardCore.ContentManagement;
using OrchardCore.ContentManagement.Display.ContentDisplay;
using OrchardCore.Data.Migration;
using OrchardCore.Modules;

namespace Moov2.OrchardCore.Gallery
{
    public class Startup : StartupBase
    {
        static Startup()
        {

        }

        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IContentPartDisplayDriver, GalleryPartDisplay>();

            services.AddSingleton<ContentPart, GalleryPart>();

            services.AddScoped<IDataMigration, Migrations>();
        }
    }
}
