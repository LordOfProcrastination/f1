import axios from "axios";

// Service for å kontakte F1APIet med full CRUD
const DriverService = (() => {
  // !!!!!! Her må endres hvis hostadressen blir endret !!!!!!
  const driverController = "http://localhost:5139/api/driver";
  const imageUploadController = "http://localhost:5139/api/imageupload";
  const imageUrl = "http://localhost:5139/images";

  // Henter alle førere
  const getAll = async () => {
    try {
      const result = await axios.get(driverController);
      return result.data;
    } catch (err) {
      console.log("Error med controller", err);
      return [];
    }
  };

  // Henter fører etter id
  const getById = async (id) => {
    try {
      const result = await axios.get(`${driverController}/${id}`);
      if (result !== null) {
        return result.data;
      } else {
        console.log("Error med result");
        return [];
      }
    } catch (err) {
      console.log("Error med controller", err);
      return null;
    }
  };

  // Henter fører etter profesjonalitet
  const getByIsProfessional = async (isProfessional) => {
    try {
      const result = await axios.get(`${driverController}/${isProfessional}`);
      if (result !== null) {
        return result.data;
      } else {
        console.log("Error med result");
        return [];
      }
    } catch (err) {
      console.log("Error med controller", err);
      return [];
    }
  };

  // Endrer førerinfo
  const putDriver = async (driversToUpdate) => {
    try {
      const result = await axios.put(driverController, driversToUpdate);
      if (result !== null) {
        return result.data;
      } else {
        console.log("Error med result");
        return [];
      }
    } catch (err) {
      console.log("Error med controller", err);
      return [];
    }
  };

  // Legger til fører i database
  const postDriver = async (newDriver, image) => {
    try {
      const formData = new FormData();
      formData.append("file", image);

      const result = await axios.post(driverController, newDriver);
      if (result !== null) {
        const resultImageUpload = await axios({
          url: imageUploadController,
          method: "POST",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (resultImageUpload !== null) {
          formData.delete("file");
        } else {
          console.log("Error med resultImageUpload");
        }
      } else {
        console.log("Error med result");
      }
    } catch (err) {
      console.log("Error med controller", err);
    }
  };

  // Henter bildeadresse
  const getImageUrl = () => {
    return imageUrl;
  };

  // Sletter fører
  const deleteDriver = async (id) => {
    try {
      const result = await axios.delete(`${driverController}/${id}`);
      if (result !== null) {
        return true;
      } else {
        console.log("Error med result");
        return false;
      }
    } catch (err) {
      console.log("Error med controller", err);
      return false;
    }
  };
  return {
    getAll,
    getById,
    getByIsProfessional,
    putDriver,
    postDriver,
    getImageUrl,
    deleteDriver,
  };
})();

export default DriverService;
