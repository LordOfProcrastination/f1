namespace F1API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using F1API.Contexts;
using F1API.Models;

/*
    Her er kontrolleren til førertabellen min. Denne henger sammen med react-prosjektet,
    og hver gang jeg kaller på noe der er det denne kontrolleren jeg kontakter.
    Kontrolleren her har full CRUD, noe som betyr at den kan lage/lese/oppdatere/slette
    informasjon til og fra databasen.
    Jeg har også brukt try/catch og if/else der det er nødvendig slik at når jeg jobber
    frontend kan jeg forstå hvor problemet er.
*/
[ApiController]
[Route("api/[controller]")]
public class DriverController : ControllerBase
{
    private readonly F1Context f1Context;

    public DriverController(F1Context _f1Context)
    {
        f1Context = _f1Context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Drivers>>> Get()
    {
        try
        {
            List<Drivers> drivers = await f1Context.Drivers.ToListAsync();
            return Ok(drivers);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Drivers>> Get(int id)
    {
        try 
        {
            Drivers? drivers = await f1Context.Drivers.FindAsync(id);
                if(drivers != null)
                {
                    return Ok(drivers);
                }
                else
                {
                    return NotFound();
                }
        }
        catch
        {
            return StatusCode(500);
        }
    }
    [HttpGet]
    [Route("[action]/{IsProfessional}")]
    public async Task<ActionResult<List<Drivers>>> GetProfessional(bool isProfessional)
    {
        try
        {
            List<Drivers> drivers = await f1Context.Drivers
                .Where(d => d.IsProfessional == isProfessional)
                .ToListAsync();
                if(drivers.Any())
                {
                    return Ok(drivers);
                }
                else
                {
                    return NotFound();
                }
        }
        catch
        {
            return StatusCode(500);
        }
    }
    [HttpPost]
    public async Task<IActionResult> Post(Drivers newDrivers)
    {
        try
        {
            f1Context.Drivers.Add(newDrivers);
            await f1Context.SaveChangesAsync();

            return Ok();
        }
        catch
        {
            return StatusCode(500);
        }
    }
    [HttpPut]
    public async Task<IActionResult> Put(Drivers updatedDrivers)
    {
        try
        {
            f1Context.Entry(updatedDrivers).State = EntityState.Modified;
            await f1Context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }

    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            Drivers? drivers = await f1Context.Drivers.FindAsync(id);

            if (drivers != null)
            {
                f1Context.Drivers.Remove(drivers);
                await f1Context.SaveChangesAsync();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }
}