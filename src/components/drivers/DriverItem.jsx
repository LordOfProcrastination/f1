// Komponent for å opprette et førerobjekt
const DriverItem = ({
  name,
  image,
  age,
  nationality,
  team,
  vehicle,
  isProfessional,
}) => {
  // Funksjon som sjekker og returnerer om fører er proff eller amatør
  const checkProfessionality = () => {
    if (isProfessional == true) {
      return "Professional";
    } else {
      return "Amateur";
    }
  };
  return (
    <>
      <article className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div
          className={`text-center h-100 text-secondary driver-item ${team}-item`}
        >
          <h3 className="h2">{name}</h3>
          <img
            className="rounded-pill img-fluid p-3"
            src={`http://localhost:5139/images/${image}`}
            alt=""
          />
          <p className="display-6 border-bottom border-1 border-dark">{age}</p>
          <p className="h5 border-bottom border-1 border-dark">{nationality}</p>
          <p className="h5 border-bottom border-1 border-dark">{team}</p>
          <p className="h5 border-bottom border-1 border-dark">{vehicle}</p>
          <p className="display-6 border-bottom border-1 border-dark">
            {checkProfessionality()}
          </p>
        </div>
      </article>
    </>
  );
};

export default DriverItem;
