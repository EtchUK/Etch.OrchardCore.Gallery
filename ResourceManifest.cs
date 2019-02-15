using OrchardCore.ResourceManagement;

namespace Moov2.OrchardCore.Gallery {

    public class ResourceManifest : IResourceManifestProvider {
        public void BuildManifests(IResourceManifestBuilder builder) {
            var manifest = builder.Add();

            manifest
                .DefineStyle("Gallery.Styles")
                .SetUrl("/Moov2.OrchardCore.Gallery/css/styles.css");

            manifest
                .DefineScript("Gallery.Scripts")
                .SetUrl("/Moov2.OrchardCore.Gallery/js/bundle.js");
        }
    }
}
