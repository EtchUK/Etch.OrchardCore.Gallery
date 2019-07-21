using Etch.OrchardCore.Gallery.Drivers;
using Etch.OrchardCore.Gallery.Models;
using Etch.OrchardCore.Gallery.ViewModels;
using Fluid;
using Microsoft.Extensions.DependencyInjection;
using OrchardCore.ContentManagement;
using OrchardCore.ContentManagement.Display.ContentDisplay;
using OrchardCore.Data.Migration;
using OrchardCore.Modules;
using OrchardCore.ResourceManagement;

namespace Etch.OrchardCore.Gallery
{
    public class Startup : StartupBase
    {
        static Startup()
        {
            TemplateContext.GlobalMemberAccessStrategy.Register<GalleryPartDisplayViewModel>();
            TemplateContext.GlobalMemberAccessStrategy.Register<GalleryPartItem>();
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IResourceManifestProvider, ResourceManifest>();
            services.AddScoped<IContentPartDisplayDriver, GalleryPartDisplay>();
            services.AddSingleton<ContentPart, GalleryPart>();

            services.AddScoped<IDataMigration, Migrations>();
        }
    }
}
