import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { InitialsAvatar } from "@/components/shared/initials-avatar";
import teamData from "@/data/team.json";
import type { TeamMember } from "@/types";

const team = teamData as TeamMember[];

export function TeamSection() {
  return (
    <section className="bg-dark/[0.02] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The team"
          title="Built by experienced engineers who care"
          description="We've shipped dozens of products across startups and enterprises. Now we're bringing that expertise to you."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <FadeIn key={member.id} delay={i * 0.08}>
              <article className="flex flex-col items-center text-center rounded-2xl border border-dark/10 bg-white p-6">
                <InitialsAvatar name={member.name} />
                <h3 className="mt-4 font-semibold text-dark">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray">{member.bio}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
