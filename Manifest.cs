using OrchardCore.Modules.Manifest;

[assembly: Module(
    Name = "Gallery",
    Author = "Etch UK",
    Website = "https://etchuk.com",
    Version = "0.2.0"
)]

[assembly: Feature(
    Id = "Etch.OrchardCore.Gallery",
    Name = "Gallery",
    Description = "Display a collection of images and videos.",
    Category = "Content"
)]