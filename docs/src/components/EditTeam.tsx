import clsx from "clsx";
import React from "react";
import { Team, Member } from "../hooks/team";
import EditTeammate from "./EditTeammate";
import { StarSvg } from "./icon/StarSvg";
import Trash from "./icon/Trash";

const EditTeam: React.FC<
  {
    active?: boolean;
    team: Team;
    handleSetActive: () => void;
    handleTeamChange: (team: Team) => void;
    handleTeamDelete: (team: Team) => void;
  } & React.HTMLProps<HTMLDivElement>
> = function EditTeam({
  active,
  team,
  handleSetActive,
  handleTeamChange,
  handleTeamDelete,
  className,
  ...rest
}) {
  const isMembersOk = team.members.every(({ name }) => !!name);
  const classNames = clsx(
    className,
    "m-2",
    "p-2",
    "border-blue-400",
    "border-2",
    "rounded",
    "inline-block",
    "max-w-lg",
    "w-full",
    "align-top"
  );
  return (
    <div className={classNames} {...rest}>
      <div className="flex align-middle">
        <input
          type="text"
          defaultValue={team.name}
          placeholder="Team Name"
          onBlur={(evt) => {
            const name = evt.currentTarget.value.trim();
            if (!name) return;
            handleTeamChange({ ...team, name });
          }}
          className={clsx(
            !team.name && "border-red-500 border-b-2",
            "text-2xl",
            "border-b"
          )}
        />
        <StarSvg
          onClick={handleSetActive}
          className="inline-block w-8 cursor-pointer"
          {...(active ? { fill: "gold" } : {})}
        />
      </div>
      <h3 className="mt-2">Teammates</h3>
      <ul style={{ listStyleType: "katakana" }} className="list-inside">
        {[
          ...team.members,
          isMembersOk ? ({ name: "" } as Member) : (null as unknown as Member),
        ]
          .filter(Boolean)
          .map((member, j) => (
            <li className="mb-1" key={`${j}_${member.name}`}>
              <EditTeammate
                className="inline-block"
                member={member}
                virtual={j === team.members.length}
                onBlur={(evt) => {
                  const name = evt.currentTarget.value.trim();
                  const members = team.members.map((memburr, k) => {
                    return {
                      ...memburr,
                      name: member === memburr ? name : memburr.name,
                    };
                  });
                  if (j === team.members.length) members.push({ name });
                  console.log({ members });
                  handleTeamChange({ ...team, members });
                }}
              />
              <Trash
                stroke="gray"
                fill="lightgray"
                className="inline-block transform hover:shadow-lg hover:rotate-12 cursor-pointer"
                onClick={() => {
                  handleTeamChange({
                    ...team,
                    members: team.members.filter((mem) => mem !== member),
                  });
                }}
              />
            </li>
          ))}
      </ul>
      <div>
        <button
          className="bg-blue-600 text-white p-2 pl-10 pr-10 mt-4 rounded-md"
          type="button"
          children="Save"
        />
        <button
          type="button"
          className="bg-red-600 text-white p-2 pl-4 pr-4 mt-4 rounded-md float-right"
          children="Delete"
          onClick={() => handleTeamDelete(team)}
        />
      </div>
    </div>
  );
};

export default EditTeam;
