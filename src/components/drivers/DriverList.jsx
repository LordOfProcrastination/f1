import { useContext, useEffect, useState } from "react";
import DriverItem from "./DriverItem";
import { DriverContext } from "../../contexts/DriverContext";

// Komponent for å opprette en liste med førere
const DriverList = () => {
  const { drivers } = useContext(DriverContext);
  // Setter for kategori av fører som bruker vil se
  const [selectedCategory, setSelectedCategory] = useState("All Drivers");

  /* 
    Funksjon som filtrerer førere basert på profesjonalitet,
    og returnerer det brukeren ber om
  */
  const filteredDrivers = drivers.filter((driver) => {
    if (selectedCategory === "All Drivers") {
      return true;
    } else if (selectedCategory === "Professional Drivers") {
      return driver.isProfessional;
    } else if (selectedCategory === "Amateur Drivers") {
      return !driver.isProfessional;
    }
    return true;
  });

  // Funksjon som henter inn og returnerer de filtrerte førere
  const getDriversJSX = () => {
    const driversJSX = filteredDrivers.map((_drivers, i) => (
      <DriverItem
        key={i}
        name={_drivers.name}
        age={_drivers.age}
        nationality={_drivers.nationality}
        team={_drivers.team}
        vehicle={_drivers.vehicle}
        isProfessional={_drivers.isProfessional}
        image={_drivers.image}
      />
    ));
    return driversJSX;
  };

  // Funksjon endrer kategorien basert på valgt verdi
  const handleChange = (e) => {
    setSelectedCategory(e.currentTarget.getAttribute("value"));
  };
  return (
    <>
      <div className="dropdown d-flex justify-content-center">
        <img
          src="images/vehicles/ferrari-car.png"
          className="w-25 me-5"
          alt="car"
        />
        <button
          className="btn btn-warning dropdown-toggle text-dark mb-5"
          type="button"
          id="dropdown-button"
          data-mbd-toggle="dropdown"
          aria-expanded="false"
        >
          Show:
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdown-button">
          <li>
            <p
              className="dropdown-item"
              value="All Drivers"
              onClick={handleChange}
            >
              All Drivers
            </p>
          </li>
          <li>
            <p
              className="dropdown-item"
              value="Professional Drivers"
              onClick={handleChange}
            >
              Professional Drivers
            </p>
          </li>
          <li>
            <p
              className="dropdown-item"
              value="Amateur Drivers"
              onClick={handleChange}
            >
              Amateur Drivers
            </p>
          </li>
        </ul>
        <img
          src="images/vehicles/red-bull-car.png"
          className="w-25 ms-5"
          alt="car"
        />
      </div>
      <section className="mb-3">
        <h1 className="text-center mb-3">{selectedCategory}</h1>
        <p className="text-center mb-5 border rounded-3 border-dark bg-light">
          Here are a list of {selectedCategory} attending the event!<br></br>
          You can choose to filter drivers based on professionality
        </p>
        <section className="row g-4 mt-5">{getDriversJSX()}</section>
      </section>
    </>
  );
};
export default DriverList;
