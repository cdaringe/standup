import { Team, useTeams } from "../hooks/team";
import EditTeam from "../components/EditTeam";
import Launch from "../components/Launch";

export default function Index() {
  const teams = useTeams();
  const handleTeamDelete = (toDelete: Team) => {
    console.log(toDelete);
    teams.update(teams.teams.filter((team) => team !== toDelete));
  };
  return (
    <>
      <Launch
        onLaunch={() => {
          if (!teams.teams.length) {
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
      {teams.teams.map((team, i) => {
        return (
          <EditTeam
            team={team}
            key={`${i}_${team.name}`}
            handleTeamChange={(nextTeam) => {
              teams.update(
                teams.teams.map((teem, j) => (i === j ? nextTeam : teem))
              );
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
            teams.update([...teams.teams, { name: "", members: [] }]);
          }}
        >
          + Add team
        </button>
      </div>
    </>
  );
}
