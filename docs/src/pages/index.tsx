import { Team, useTeams } from "../hooks/team";
import EditTeam from "../components/EditTeam";
import Launch from "../components/Launch";
import { gameUrls, launchGame } from "../hooks/games";

export default function Index() {
  const { teamState, update } = useTeams();
  const handleTeamDelete = (toDelete: Team) => {
    update({
      ...teamState,
      teams: teamState.teams.filter((team) => team !== toDelete),
    });
  };
  return (
    <div className="p-2">
      <Launch
        onLaunch={() => {
          if (!teamState.teams.length) {
            const loadEmUp = document.getElementById("edit-teams");
            if (!loadEmUp) console.error(`unable to find edit-teams`);
            loadEmUp?.scrollIntoView({
              behavior: "smooth",
            });
          } else {
            console.log(`teams found! launching`);
          }
        }}
      />
      <h1 id="edit-teams" className="m-auto text-3xl text-center">
        Edit your teams!
      </h1>
      {teamState.teams.map((team, i) => {
        return (
          <EditTeam
            team={team}
            key={team.id}
            handleTeamChange={(nextTeam) => {
              update({
                ...teamState,
                teams: teamState.teams.map((teem, j) =>
                  i === j ? nextTeam : teem
                ),
              });
            }}
            handleTeamDelete={handleTeamDelete}
          />
        );
      })}
      <div>
        <button
          type="button"
          className="p-2 pl-10 pr-10 bg-green-500 text-white rounded-md m-auto mt-2 mb-2 block"
          onClick={() => {
            update({
              ...teamState,
              teams: [
                ...teamState.teams,
                { id: String(Date.now()), name: "", members: [] },
              ],
            });
          }}
        >
          + Add team
        </button>
      </div>
      <div>
        <h1 id="edit-teams" className="m-auto mt-8 text-3xl text-center">
          Rad stuff
        </h1>
        <ul className="list-disc list-inside p-2 text-3xl">
          {gameUrls.map(({ text, href }) => (
            <li>
              <a
                href={href}
                onClick={(evt) => {
                  evt.preventDefault();
                  launchGame(teamState, href);
                }}
                children={text}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
