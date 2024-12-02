using Microsoft.EntityFrameworkCore;

namespace MyNotes.DataAccess;

public class NotesDbContext : DbContext
{
    private readonly IConfiguration _configuration;
    public NotesDbContext(IConfiguration configuration)
    {
        _configuration = configuration;
    }
     
     protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
     {
       optionsBuilder.UseNpgsql(_configuration.GetConnectionString("Database"));

     }

}