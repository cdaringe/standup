import { TeamState } from "./team";

type GameUrl = { text: string; href: string };

export const gameUrls = [
  {
    text: "dvd",
    href: "https://dvd.js.org",
  },
  {
    text: "fish",
    href: "https://fish.js.org",
  },
];

export const launchGame = (
  { teams, activeTeam }: TeamState,
  href: GameUrl["href"]
) => {
  const team = teams.find((team) => team.id === activeTeam) || teams[0];
  if (!team) throw new Error(`no team available`);
  const url = new URL(href);
  url.searchParams.append(
    "names",
    team.members.map((v) => encodeURIComponent(v.name)).join(",")
  );
  window.location.href = url.toString();
};
