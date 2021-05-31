import type { Member } from "../hooks/team";
import React from "react";
import clsx from "clsx";

const EditTeammate: React.FC<
  { member: Member; virtual?: boolean } & React.HTMLProps<HTMLInputElement>
> = ({ member, className = "", virtual, ...rest }) => (
  <input
    type="text"
    placeholder="Teammate name"
    defaultValue={member.name}
    className={clsx(
      className,
      !virtual && !member.name && "border-4 border-red-500"
    )}
    {...rest}
  />
);

export default EditTeammate;
