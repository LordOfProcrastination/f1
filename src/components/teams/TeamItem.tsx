import { FC } from "react";
import { ITeam } from "../../interfaces/ITeam";

// Komponent for å lage et lag objekt
const TeamItem: FC<ITeam> = ({
  manufacturer,
  logo,
  vehicle,
  driver1,
  driver2,
}) => {
  return (
    <article className="col-12 col-md-6 col-lg-4">
      <div
        className={`text-center text-secondary h-100 team-item ${manufacturer}-item`}
      >
        <h1>{manufacturer}</h1>
        <img src={"images/icons/" + logo} alt="logo" className="team-image" />
        <div className="border-top border-bottom border-3 bg-light border-light">
          <p className="h6">{driver1}</p>
          <p className="h6">{driver2}</p>
        </div>
        <img
          src={"images/vehicles/" + vehicle}
          alt="vehicle"
          className="img-fluid"
        />
      </div>
    </article>
  );
};

export default TeamItem;
