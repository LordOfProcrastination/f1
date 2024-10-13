import { useContext, useState } from "react";
import { DriverContext } from "../../contexts/DriverContext";

// Komponent som endrer informasjon i databasen
const EditDriver = () => {
  const { getById, editDriver } = useContext(DriverContext);

  // Setter id og fører verdier som skal endres, med statusmelding
  const [id, setId] = useState("1");
  const [driversToUpdate, setDriversToUpdate] = useState({
    name: "",
    age: 0,
    nationality: "",
    team: "",
    vehicle: "",
  });
  const [image, setImage] = useState(null);

  const [statusMessage, setStatusMessage] = useState(null);

  // Funksjon for å hente inn verdiene som skal endres
  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(e.currentTarget.value);
        break;
      case "name":
        setDriversToUpdate({ ...driversToUpdate, name: e.currentTarget.value });
        break;
      case "age":
        setDriversToUpdate({ ...driversToUpdate, age: e.currentTarget.value });
        break;
      case "nationality":
        setDriversToUpdate({
          ...driversToUpdate,
          nationality: e.currentTarget.value,
        });
        break;
      case "team":
        setDriversToUpdate({ ...driversToUpdate, team: e.currentTarget.value });
        break;
      case "vehicle":
        setDriversToUpdate({
          ...driversToUpdate,
          vehicle: e.currentTarget.value,
        });
        break;
      case "image":
        setImage(e.currentTarget.files[0]);
        break;
    }
  };

  // Funksjon som bruker førerkonteksten til å hente inn id, med tilhørende verdier
  const getByIdFromContext = async () => {
    try {
      const driversFromContext = await getById(id);

      if (driversFromContext) {
        setDriversToUpdate(driversFromContext);
        setStatusMessage("Found Driver on ID: " + id);
      } else {
        setStatusMessage("Could not find driver on ID: " + id);
      }
    } catch (err) {
      console.log("Error i getByIdFromContext", err);
      setStatusMessage("Error in fetching driver info");
    }
    setTimeout(() => {
      setStatusMessage("");
    }, 4000);
  };

  // Funksjon som lagrer de endrede verdiene i databasen (bruker førerkonteksten)
  const saveChanges = async () => {
    try {
      const updatedDriver = {
        ...driversToUpdate,
        image: image.name,
      };
      editDriver(updatedDriver);
      setStatusMessage("Driver info updated successfully!");
    } catch (err) {
      console.log("Error i saveChanges", err);
      setStatusMessage("Driver info not updated...");
    }
    setTimeout(() => {
      setStatusMessage("");
    }, 4000);
  };

  return (
    <section className="p-4 text-center bg-info">
      <h3 className="mb-5">Edit Driverinfo</h3>
      <div className="mb-2">
        <label className="me-2 h6">Driver Id</label>
        <input onChange={handleChange} name="id" value={id} type="text" />
        <input onClick={getByIdFromContext} type="button" value="Get by id" />
        <span className="m-2 bg-dark text-light">{statusMessage}</span>
      </div>
      <div className="mb-2">
        <label className="me-2 h6">Name</label>
        <input
          onChange={handleChange}
          name="name"
          value={driversToUpdate.name}
          type="text"
        />
      </div>
      <div className="mb-2">
        <label className="me-2 h6">Age</label>
        <input
          onChange={handleChange}
          name="age"
          value={driversToUpdate.age}
          type="number"
        />
      </div>
      <div className="mb-2">
        <label className="me-2 h6">Nationality</label>
        <input
          onChange={handleChange}
          name="nationality"
          value={driversToUpdate.nationality}
          type="text"
        />
      </div>
      <div className="mb-2">
        <label className="me-2 h6">Team</label>
        <input
          onChange={handleChange}
          name="team"
          value={driversToUpdate.team}
          type="text"
        />
      </div>
      <div className="mb-2">
        <label className="me-2 h6">Vehicle</label>
        <input
          onChange={handleChange}
          name="vehicle"
          value={driversToUpdate.vehicle}
          type="text"
        />
      </div>
      <div className="mb-2">
        <label className="me-2 h6">Image</label>
        <input onChange={handleChange} name="image" type="file" />
      </div>
      <input onClick={saveChanges} type="button" value="Save Changes" />
    </section>
  );
};

export default EditDriver;
