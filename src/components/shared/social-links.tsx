import Link from "next/link";
import { Camera, GitBranch, Globe2 } from "lucide-react";
import { socialLinks } from "@/constants/site";

const iconMap = {
  linkedin: Globe2,
  github: GitBranch,
  instagram: Camera,
} as const;

const hoverClassMap = {
  linkedin: "hover:text-[#0A66C2]",
  github: "hover:text-[#181717]",
  instagram: "hover:text-[#E4405F]",
} as const;

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];

        return (
          <li key={link.label} className="group">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`inline-flex items-center rounded-full border border-dark/10 bg-white px-3 py-2 text-sm text-gray transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-sm ${hoverClassMap[link.icon]}`}
            >
              <Icon className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>{link.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
