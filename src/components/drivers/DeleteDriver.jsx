import { useState, useContext } from "react";
import { DriverContext } from "../../contexts/DriverContext";

// Komponent for å slette en fører fra databasen
const DeleteDriver = () => {
  const { deleteDriver } = useContext(DriverContext);

  // Setter id som skal slettes, og statusmelding
  const [id, setId] = useState("0");

  const [deleteStatus, setDeleteStatus] = useState("");

  // Funksjon for å hente inn id-verdi
  const handleChange = (e) => {
    setId(e.currentTarget.value);
  };

  // Funksjon for å slette fører fra databasen
  const removeDriver = async () => {
    try {
      const result = await deleteDriver(id);
      if (result === true) {
        setDeleteStatus("Driver deleted!");
      } else {
        setDeleteStatus("Driver not found... ");
      }
      setTimeout(() => {
        setDeleteStatus("");
      }, 4000);
    } catch (err) {
      console.log("Error i removeDriver", err);
    }
  };

  return (
    <section className="text-center bg-info p-5 mb-5">
      <h3 className="mb-5">Delete Driver</h3>
      <div className="mb-2">
        <label className="me-2 h6">Driver Id: {id}</label>
        <input onChange={handleChange} name="id" value={id} type="text" />
      </div>
      <input onClick={removeDriver} type="button" value="Delete Driver" />
      <span className="bg-dark text-light ms-2">{deleteStatus}</span>
    </section>
  );
};

export default DeleteDriver;
