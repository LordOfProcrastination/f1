namespace F1API.Models;

using F1API.Interfaces;

// Her er modellen min som bruker interfacet jeg lagde til å opprette databasen
public class Drivers : IDrivers
{
    public int Id {get; set;}
    public string? Name {get; set;}
    public int Age {get; set;}
    public string? Nationality {get; set;}
    public string? Team {get; set;}
    public string? Vehicle {get; set;}
    public bool IsProfessional {get; set;}
    public string? Image {get; set;}
}