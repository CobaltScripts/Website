'use client';

import React from 'react';
import { getDiscordAvatarUrl } from '../data/team';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

interface UserProps {
  name: string;
  userId: string;
  avatarHash: string;
  role: string;
  description: string;
}

export default function User({
  name,
  userId,
  avatarHash,
  role,
  description,
}: UserProps) {
  const avatarUrl = getDiscordAvatarUrl(userId, avatarHash);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-white/10 bg-card p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#347BB2] hover:shadow-xl hover:shadow-[#347BB2]/20">
          <Avatar className="h-24 w-24 border-2 border-white/10">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <h3 className="mt-4 text-lg font-bold">{name}</h3>
          <Badge variant="outline" className="mt-1">
            {role}
          </Badge>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <div className="flex gap-6 p-4">
          <div className="flex flex-col items-center text-center px-4">
            <Avatar className="h-24 w-24 border-2 border-white/10">
              <AvatarImage src={avatarUrl} alt={name} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <DialogTitle className="mt-4">{name}</DialogTitle>
            <Badge variant="outline" className="mt-1">
              {role}
            </Badge>
          </div>
          <Separator orientation="vertical" className="h-auto" />
          <div className="flex flex-1 items-center">
            <DialogDescription className="text-sm">
              {description}
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
