import { ITeam } from "./ITeam";

export interface ITeamContext {
  teams: ITeam[];
  getTeamsFromModule: (teams: ITeam) => void;
}
