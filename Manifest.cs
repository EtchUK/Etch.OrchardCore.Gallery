using OrchardCore.Modules.Manifest;

[assembly: Module(
    Name = "Gallery",
    Author = "Etch UK",
    Website = "https://etchuk.com",
    Version = "0.3.1"
)]

[assembly: Feature(
    Id = "Etch.OrchardCore.Gallery",
    Name = "Gallery",
    Dependencies = new[] { "OrchardCore.Media" },
    Description = "Display a collection of images and videos.",
    Category = "Content"
)]