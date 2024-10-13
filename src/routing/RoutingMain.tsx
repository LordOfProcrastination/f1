import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  DriverPage,
  HomePage,
  TeamPage,
  RegistrationPage,
  QuizPage,
  AdminPage,
} from "../pages";
import MainNavigation from "../components/shared/MainNavigation";
import { DriverProvider } from "../contexts/DriverContext";
import { TeamProvider } from "../contexts/TeamContext";
import { QuizProvider } from "../contexts/QuizContext";

// Her styres all routingen, og her la jeg til alle providerne
const RoutingMain = () => {
  return (
    <BrowserRouter>
      <header className="container-fluid px-0">
        <MainNavigation />
      </header>
      <main className="container">
        <QuizProvider>
          <DriverProvider>
            <TeamProvider>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="drivers" element={<DriverPage />}></Route>
                <Route path="teams" element={<TeamPage />}></Route>
                <Route path="quiz" element={<QuizPage />}></Route>
                <Route
                  path="registration"
                  element={<RegistrationPage />}
                ></Route>
                <Route path="admin" element={<AdminPage />}></Route>
              </Routes>
            </TeamProvider>
          </DriverProvider>
        </QuizProvider>
      </main>
    </BrowserRouter>
  );
};

export default RoutingMain;
