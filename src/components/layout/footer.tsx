import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/shared/social-links";
import { siteConfig, footerLinks } from "@/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-dark text-white">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo dark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Links</h3>
          <ul className="mt-4 space-y-3">
            {footerLinks.primary.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Social</h3>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <Link
            href={`mailto:${siteConfig.contactEmail}`}
            className="mt-4 inline-block text-sm text-white/60 transition-colors hover:text-white"
          >
            {siteConfig.contactEmail}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Tell us what you are building, and we will help shape the right
            software path.
          </p>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/40 sm:flex-row">
          <p>© {year} Corner Rock. All rights reserved.</p>
          <p>Building Software That Grows Businesses.</p>
        </Container>
      </div>
    </footer>
  );
}
