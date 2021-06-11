import React from "react";

export type Member = {
  url?: string;
  avatar?: string;
  name: string;
};
export type Team = {
  id: string;
  name: string;
  members: Member[];
};

export type TeamState = { teams: Team[]; activeTeam?: string };

const DEFAULT_TEAM_STATE: TeamState = { teams: [] };

export const Teams = React.createContext<{
  update: (state: TeamState) => void;
  teamState: TeamState;
}>({ teamState: DEFAULT_TEAM_STATE, update: () => {} });

const readTeamStateStorage: () => TeamState = () => {
  if (typeof window === "undefined") return DEFAULT_TEAM_STATE;
  try {
    return maybePatchActiveTeam(
      JSON.parse(window.localStorage.getItem("teamState")) || DEFAULT_TEAM_STATE
    );
  } catch {
    return [];
  }
};

const setTeamStateStorage: (state: TeamState) => void = (state) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("teamState", JSON.stringify(state));
};

const maybePatchActiveTeam: (state: TeamState) => void = (state) => {
  if (state.teams.find((t) => t.id === state.activeTeam)) {
    return state;
  } else {
    delete state.activeTeam;
  }
  if (state.teams.length && !state.activeTeam) {
    state.activeTeam = state.teams[0].id;
  }
  return state;
};

export const TeamsProvider: React.FC = ({ children }) => {
  const [teamState, setTeamState] = React.useState(readTeamStateStorage());
  const update = (state: TeamState) => {
    maybePatchActiveTeam(state);
    setTeamStateStorage(state);
    setTeamState(state);
  };
  return (
    <Teams.Provider value={{ teamState, update }}>{children}</Teams.Provider>
  );
};

export const useTeams = () => React.useContext(Teams);
