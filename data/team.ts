export const team = [
  {
    name: "Nathan",
    userId: "1441859003708866601",
    avatarHash: "46d66bb036a7198accd9c0437fa600e6",
    role: "Developer",
  },
  {
    name: "Oblongboot",
    userId: "768481984242253904",
    avatarHash: "b0c1a947725d21624e88adfac7717bbf",
    role: "Developer",
  },
  {
    name: "Twiston",
    userId: "855798460593733652",
    avatarHash: "b9e840cdf13ef7233be9bbee01ef3c88",
    role: "Developer",
  },
];

export function getDiscordAvatarUrl(userId: string, avatarHash: string) {
  const extension = avatarHash.startsWith('a_') ? 'gif' : 'png';
  return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.${extension}?size=256`;
}