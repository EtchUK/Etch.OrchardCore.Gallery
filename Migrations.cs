using OrchardCore.ContentManagement.Metadata;
using OrchardCore.ContentManagement.Metadata.Settings;
using OrchardCore.Data.Migration;
using OrchardCore.Recipes.Services;
using System.Threading.Tasks;

namespace Etch.OrchardCore.Gallery
{
    public class Migrations : DataMigration
    {
        #region Dependencies

        private readonly IContentDefinitionManager _contentDefinitionManager;
        private readonly IRecipeMigrator _recipeMigrator;

        #endregion

        #region Constructor

        public Migrations(IContentDefinitionManager contentDefinitionManager, IRecipeMigrator recipeMigrator)
        {
            _contentDefinitionManager = contentDefinitionManager;
            _recipeMigrator = recipeMigrator;
        }

        #endregion

        #region Migrations

        public async Task<int> CreateAsync()
        {
            _contentDefinitionManager.AlterPartDefinition("GalleryPart", part => part
                .Reusable()
                .Attachable()
                .WithDescription("Create a collection of media items."));

            await _recipeMigrator.ExecuteAsync("create.recipe.json", this);

            return 1;
        }

        #endregion
    }
}
