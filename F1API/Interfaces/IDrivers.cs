namespace F1API.Interfaces;

// Her er interfacet som bestemmer hvordan førertabellen min skal se ut
public interface IDrivers
{
    int Id {get; set;}
    string? Name {get; set;}
    int Age {get; set;}
    string? Nationality {get; set;}
    string? Team {get; set;}
    string? Vehicle {get; set;}
    bool IsProfessional {get; set;}
    string? Image {get; set;}

}