import { Team, useTeams } from "../hooks/team";
import EditTeam from "../components/EditTeam";
import Launch from "../components/Launch";
import { launchGame } from "../hooks/games";
import { apps } from "../../../apps";
import Head from "next/head";

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
      <Head>
        <title>standup. but less boring</title>
      </Head>
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
            const app = apps[Math.round(Math.random() * 100) % apps.length];
            launchGame(teamState, app.href);
          }
        }}
      />
      <h1 id="edit-teams" className="m-auto text-3xl text-center">
        Edit your teams!
      </h1>
      {teamState.teams.map((team, i) => {
        return (
          <EditTeam
            active={team.id === teamState.activeTeam}
            team={team}
            key={`${team.name}`}
            handleTeamChange={(nextTeam) => {
              update({
                ...teamState,
                teams: teamState.teams.map((teem, j) =>
                  i === j ? nextTeam : teem
                ),
              });
            }}
            handleSetActive={() => {
              update({
                ...teamState,
                activeTeam: team.id,
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
          {apps.map(({ text, href }) => (
            <li key={href}>
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
      <h1 className="mt-8">Library</h1>
      <p>Wanna make more sweet standups? Here's how:</p>
      <ol className="list-decimal list-inside p-4 mb-8">
        {[
          "make a game",
          "install standup: pnpm install @cdarige/standup",
          'import it: import { init } from "@cdarige/standup"',
          `integrate it: init({ team })`,
          "add your app to @cdarige/standup#main apps.ts",
        ].map((text) => (
          <li key={text}>
            <pre className="inline-block">{text}</pre>
          </li>
        ))}
      </ol>
    </div>
  );
}
