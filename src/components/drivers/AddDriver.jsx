import { useContext, useState } from "react";
import { DriverContext } from "../../contexts/DriverContext";

// Komponent for å opprette og lagre en ny fører i databasen.
const AddDriver = () => {
  const { postDriver } = useContext(DriverContext);

  // Setter fører verdiene og statusmelding
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");
  const [team, setTeam] = useState("");
  const [vehicle, setVethicle] = useState("");
  const [image, setImage] = useState(null);
  const [isProfessional, setIsProfessional] = useState(false);

  const [postStatus, setPostStatus] = useState(null);

  // Funksjon med switch/case for å hente inn verdier
  const handleChange = (e) => {
    const name = e.currentTarget.name;

    switch (name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "age":
        setAge(e.currentTarget.value);
        break;
        o;
      case "nationality":
        setNationality(e.currentTarget.value);
        break;
      case "team":
        setTeam(e.currentTarget.value);
        break;
      case "vehicle":
        setVethicle(e.currentTarget.value);
        break;
      case "isProfessional":
        setIsProfessional(e.currentTarget.value);
        break;
      case "image":
        setImage(e.currentTarget.files[0]);
        break;
    }
  };

  // Denne funksjonen registrerer verdiene brukeren skrev inn i databasen
  const registerDriver = async () => {
    try {
      const newDriver = {
        name: name,
        age: age,
        nationality: nationality,
        team: team,
        vehicle: vehicle,
        isProfessional: isProfessional,
        image: image.name,
      };

      const addDriverToDb = async () => {
        await postDriver(newDriver, image);
        setPostStatus("Driver added to Database");
      };
      addDriverToDb();
    } catch (err) {
      console.log("Error i registerDriver", err);
      setPostStatus("Driver not added to Database");
    }
    setTimeout(() => {
      setPostStatus("");
    }, 4000);
  };
  return (
    <section className="text-center bg-info p-5">
      <h3 className="mb-5">Register Driver</h3>
      <div className="mb-2">
        <label className="me-2 h6">Name</label>
        <input name="name" onChange={handleChange} type="text" />
      </div>
      <div className="mb-2">
        <label className="me-2 h6">Age</label>
        <input name="age" onChange={handleChange} type="number" />
      </div>
      <div className="mb-2">
        <label className="me-2 h6">Nationality</label>
        <input name="nationality" onChange={handleChange} type="text" />
      </div>
      <div className="mb-2">
        <label className="me-2 h6">Team</label>
        <input name="team" onChange={handleChange} type="text" />
      </div>
      <div className="mb-2">
        <label className="me-2 h6">Vehicle</label>
        <input name="vehicle" onChange={handleChange} type="text" />
      </div>
      <div className="mb-2">
        <input
          name="isProfessional"
          onChange={handleChange}
          type="hidden"
          required
        />
      </div>
      <div className="mb-2">
        <label className="me-2 h6">Image</label>
        <input name="image" onChange={handleChange} type="file" />
      </div>
      <input onClick={registerDriver} type="button" value="Register" />
      <span className="bg-dark text-light ms-2">{postStatus}</span>
    </section>
  );
};

export default AddDriver;
