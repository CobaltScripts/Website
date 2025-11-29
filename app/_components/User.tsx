import React from "react";
import { getDiscordAvatarUrl } from "../../data/team";

interface UserProps {
  name: string;
  userId: string;
  avatarHash: string;
  role: string;
}

export default function User({ name, userId, avatarHash, role }: UserProps) {
  const avatarUrl = getDiscordAvatarUrl(userId, avatarHash);

  return (
    <div className="group flex flex-col items-center rounded-xl border border-white/5 bg-[#18181b] p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#347BB2] hover:shadow-xl hover:shadow-[#347BB2]/20">
      <div className="relative mb-5 h-24 w-24 overflow-hidden rounded-full shadow-md ring-2 ring-white/10 transition-all duration-300 ease-out">
        <img
          src={avatarUrl}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mb-1 text-lg font-bold text-white">{name}</h3>
      <span className="rounded-full border border-[#347BB2] bg-[#347BB2]/20 px-3 py-0.5 text-xs font-medium text-[#347BB2]">
        {role}
      </span>
    </div>
  );
}
