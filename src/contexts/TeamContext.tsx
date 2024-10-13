import { FC, createContext, useState, useEffect, ReactNode } from "react";
import { ITeam } from "../interfaces/ITeam";
import { ITeamContext } from "../interfaces/ITeamContext";
import TeamModule from "../modules/TeamModule";

export const TeamContext = createContext<ITeamContext | null>(null);

interface Props {
  children: ReactNode;
}

// Provider som gjør at jeg kan bruke lag konkteksten min reaktivt
export const TeamProvider: FC<Props> = ({ children }) => {
  const [teams, setTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    getTeamsFromModule();
  }, []);

  const getTeamsFromModule = () => {
    const teamsFromModule = TeamModule.getAll();
    setTeams(teamsFromModule);
  };
  return (
    <TeamContext.Provider value={{ teams, getTeamsFromModule }}>
      {children}
    </TeamContext.Provider>
  );
};
