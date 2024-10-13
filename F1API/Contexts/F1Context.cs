namespace F1API.Contexts;

using System;
using System.Threading.Tasks;
using F1API.Models;
using Microsoft.EntityFrameworkCore;

    //Her er konteksten til F1API som jeg bruker i DriverController
public class F1Context : DbContext
{
    public F1Context(DbContextOptions<F1Context> options):base(options){}

    public DbSet<Drivers> Drivers {get; set;}

    /* Fikk opp error på [HttpDelete] i DriverController.cs,
     trykket på quickfiox og denne kom opp etterpå.
    */
    internal Task<Drivers?> FindAsync(int id)
    {
        throw new NotImplementedException();
    }
}