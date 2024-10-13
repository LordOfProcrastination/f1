// Landingsside
const HomePage = () => {
  return (
    <section className="bg-light p-5 shadow-lg">
      <div className="text-center mb-5 me-5 ms-5 border rounded-3 border-dark shadow-lg">
        <h3 className="h1">Whacky Races</h3>
        <p className="display-6">
          Welcome to the event of the year! F1 proudly presents the brand new
          Whacky Races event!
        </p>
        <p className="display-6">
          The organizers behind Formula 1 presents the ultimate race-event where
          YOU will have the opportunity to race with and against the most
          legendary drivers in the world!
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <img
          src="images/vehicles/alphatauri-car.png"
          className="me-5 img-fluid"
          alt="car"
        />
      </div>
      <div className="text-center m-5 border rounded-3 border-dark shadow-lg">
        <h3 className="h1">Choose Your Team</h3>
        <p className="display-6">
          You can drive for any team you want! Do you see yourself driving for
          Red Bull? Or maybe you see yourself as more of a ferrari driver. The
          choice is yours!
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <img
          src="images/vehicles/haas-car.png"
          className="me-5 img-fluid"
          alt="car"
        />
      </div>
      <div className="text-center m-5 border rounded-3 border-dark shadow-lg">
        <h3 className="h1">Any Vehicle Allowed</h3>
        <p className="display-6">
          You have to bring your own vehicle, but there are no restrictions! As
          long as the vehicle runs you are allowed to drive it in this event.
          You can create as whacky a car you want, or bring your family van if
          you so desire.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
