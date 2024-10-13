import TeamItem from "./TeamItem";
import { TeamContext } from "../../contexts/TeamContext";
import { useContext } from "react";

// Komponent for å opprette en liste med lag
const TeamList = () => {
  const teamContext = useContext(TeamContext);

  // TEST!
  if (!teamContext) {
    return <div>Loading...</div>;
  }

  const { teams } = teamContext;

  // Funksjon som henter inn alle lagobjektene
  const getTeamsTSX = () => {
    const teamsTSX = teams.map((team, i) => (
      <TeamItem
        key={i}
        manufacturer={team.manufacturer}
        logo={team.logo}
        vehicle={team.vehicle}
        driver1={team.driver1}
        driver2={team.driver2}
      />
    ));
    return teamsTSX;
  };

  return (
    <section className="mb-3">
      <h1 className="text-center mb-5">Manufacturers</h1>
      <div className="d-flex justify-content-center">
        <img
          src="images/vehicles/williams-car.png"
          className="w-25 ms-5"
          alt="car"
        />
        <img
          src="images/vehicles/alfa-romeo-car.png"
          className="w-25 ms-5"
          alt="car"
        />
      </div>
      <p className="text-center mt-5 mb-5 border rounded-3 border-dark bg-light">
        Here is an overview of the teams you can drive for, and the drivers
        spearheading each team!
      </p>
      <section className="row g-3 mt-5">{getTeamsTSX()}</section>
    </section>
  );
};

export default TeamList;
