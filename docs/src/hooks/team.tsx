import React from "react";

export type Member = {
  url?: string;
  avatar?: string;
  name: string;
};
export type Team = {
  name: string;
  members: Member[];
};

export const Teams = React.createContext<{
  update: (teams: Team[]) => void;
  teams: Team[];
}>({ teams: [], update: () => {} });

const readTeamsStorage: () => Team[] = () => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem("teams")) || [];
  } catch {
    return [];
  }
};

const setTeamsStorage: (teams: Team[]) => void = (teams) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("teams", JSON.stringify(teams));
};

export const TeamsProvider: React.FC = ({ children }) => {
  const [teams, setTeams] = React.useState(readTeamsStorage());
  const update = (teams: Team[]) => {
    setTeamsStorage(teams);
    setTeams(teams);
  };
  return <Teams.Provider value={{ teams, update }}>{children}</Teams.Provider>;
};

export const useTeams = () => React.useContext(Teams);
