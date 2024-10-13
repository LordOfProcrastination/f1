// Her er en modul jeg bruker for å opprette lag siden
const TeamModule = (() => {
  const teams = [
    {
      id: 1,
      manufacturer: "Mercedes",
      logo: "mercedes-logo.png",
      vehicle: "mercedes-car.png",
      driver1: "Lewis Hamilton",
      driver2: "George Russell",
    },
    {
      id: 2,
      manufacturer: "Red-Bull",
      logo: "red-bull-logo.png",
      vehicle: "red-bull-car.png",
      driver1: "Max Verstappen",
      driver2: "Sergio-Perez",
    },
    {
      id: 3,
      manufacturer: "Ferrari",
      logo: "ferrari-logo.png",
      vehicle: "ferrari-car.png",
      driver1: "Charles Leclerc",
      driver2: "Carlos Sainz Jr.",
    },
    {
      id: 4,
      manufacturer: "McLaren",
      logo: "mclaren-logo.png",
      vehicle: "mclaren-car.png",
      driver1: "Lando Norris",
      driver2: "Osar Piastri",
    },
    {
      id: 5,
      manufacturer: "Aston-Martin",
      logo: "aston-martin-logo.png",
      vehicle: "aston-martin-car.png",
      driver1: "Fernando Alonso",
      driver2: "Lance Stroll",
    },
    {
      id: 6,
      manufacturer: "Alpha-Tauri",
      logo: "alpha-tauri-logo.png",
      vehicle: "alphatauri-car.png",
      driver1: "Daniel Ricciardo",
      driver2: "Yuki Tsunoda",
    },
    {
      id: 7,
      manufacturer: "Alpine",
      logo: "alpine-logo.png",
      vehicle: "alpine-car.png",
      driver1: "Pierre Gasly",
      driver2: "Esteban Ocon",
    },
    {
      id: 8,
      manufacturer: "Williams",
      logo: "williams-logo.png",
      vehicle: "mercedes-car.png",
      driver1: "Alexander Albon",
      driver2: "Logan Sargeant",
    },
    {
      id: 9,
      manufacturer: "Haas",
      logo: "haas-logo.png",
      vehicle: "haas-car.png",
      driver1: "Kevin Magnussen",
      driver2: "Nico Hulkenberg",
    },
    {
      id: 10,
      manufacturer: "Alfa-Romeo",
      logo: "alfa-romeo-logo.png",
      vehicle: "alfa-romeo-car.png",
      driver1: "Valtteri Bottas",
      driver2: "Zhou Guanyu",
    },
  ];

  const getAll = () => {
    return structuredClone(teams);
  };

  const getById = (id) => {
    return structuredClone(teams);
  };

  return {
    getAll,
    getById,
  };
})();

export default TeamModule;
