using Newtonsoft.Json;

namespace Etch.OrchardCore.Gallery.ViewModels
{
    public class GalleryPartItemViewModel
    {
        [JsonProperty("type")]
        public int Type { get; set; }

        [JsonProperty("typeName")]
        public string TypeName { get; set; }

        [JsonProperty("url")]
        public string Url { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("thumb")]
        public string Thumb { get; set; }
    }
}
