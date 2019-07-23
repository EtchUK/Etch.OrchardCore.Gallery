using OrchardCore.ResourceManagement;

namespace Etch.OrchardCore.Gallery {

    public class ResourceManifest : IResourceManifestProvider {
        public void BuildManifests(IResourceManifestBuilder builder) {
            var manifest = builder.Add();

            manifest
                .DefineStyle("Gallery.Styles")
                .SetUrl("/Etch.OrchardCore.Gallery/Styles/styles.css");

            manifest
                .DefineScript("Gallery.Scripts")
                .SetUrl("/Etch.OrchardCore.Gallery/Scripts/gallery.js");
        }
    }
}
