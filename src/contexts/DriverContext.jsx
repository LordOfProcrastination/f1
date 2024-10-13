import { useState, createContext, useEffect } from "react";
import DriverService from "../services/DriverService";

export const DriverContext = createContext(null);

// Provider som gjør at jeg kan bruke fører konkteksten min reaktivt
export const DriverProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDriversFromService();
  }, []);

  const getDriversFromService = async () => {
    const driversFromService = await DriverService.getAll();
    setDrivers(driversFromService);
  };

  const getByIsProfessional = async (isProfessional) => {
    const isDriverProfessional = await DriverService.getByIsProfessional(
      isProfessional
    );
    return isDriverProfessional;
  };

  const getById = async (id) => {
    const driversToUpdate = await DriverService.getById(id);
    return driversToUpdate;
  };

  const postDriver = async (newDriver, image) => {
    const driversToPost = await DriverService.postDriver(newDriver, image);
    return driversToPost;
  };

  const editDriver = async (driversToUpdate) => {
    await DriverService.putDriver(driversToUpdate);
  };

  const deleteDriver = async (id) => {
    const result = await DriverService.deleteDriver(id);
    return result;
  };

  return (
    <DriverContext.Provider
      value={{
        drivers,
        getByIsProfessional,
        getById,
        postDriver,
        editDriver,
        deleteDriver,
      }}
    >
      {children}
    </DriverContext.Provider>
  );
};
