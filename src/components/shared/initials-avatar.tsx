const PALETTE = ["bg-primary", "bg-accent", "bg-dark"];

function hashToIndex(str: string, mod: number) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash + str.charCodeAt(i)) % mod;
  }
  return hash;
}

export function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const colorClass = PALETTE[hashToIndex(name, PALETTE.length)];

  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white ${colorClass}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
