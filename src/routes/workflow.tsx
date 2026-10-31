import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { CtaBand, PageHero } from "@/components/site/layout";
import { WORKFLOW } from "@/lib/site-data";

export const Route = createFileRoute("/workflow")({
  head: () => ({
    meta: [
      { title: "Our Service Workflow | Lancaster Security Limited" },
      {
        name: "description",
        content:
          "From discovery and risk assessment to deployment, monitoring, and continuous improvement — how Lancaster Security designs and delivers tailored security solutions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Our Service Workflow | Lancaster Security" },
      {
        property: "og:description",
        content:
          "Six steps from discovery and consultation to review and improvement — one accountable process for every assignment.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkflowPage,
});

const COMMITMENTS = [
  {
    title: "Prevention & Preparedness",
    text: "We focus on anticipating risks before they escalate rather than simply reacting to incidents.",
  },
  {
    title: "Rapid Response",
    text: "Our operational structures are designed to ensure swift and effective incident response.",
  },
  {
    title: "Continuous Improvement",
    text: "Regular audits, assessments, training, and performance reviews keep our services effective and relevant.",
  },
  {
    title: "Tailored Delivery",
    text: "Every client is unique, so we develop a customized security strategy for every assignment.",
  },
];

function Steps() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {WORKFLOW.map((item) => (
            <div
              key={item.step}
              className="relative rounded-3xl border border-gold/15 bg-card p-7 shadow-sm"
            >
              <span className="font-display text-4xl font-black text-gold/25">
                {item.step}
              </span>
              <h3 className="mt-2 font-display text-base font-extrabold uppercase tracking-wide text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commitments() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="section-kicker">Our Standards</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
              What You Can Expect
            </h2>
            <div className="mt-5 h-1.5 w-24 rounded-full bg-gold" />
            <p className="mt-6 text-[0.95rem] leading-relaxed text-ink/75">
              Behind every engagement is a set of standards we hold ourselves
              to — the same principles that guide how we design, deploy, and
              continuously improve every security solution we deliver.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {COMMITMENTS.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gold/20 bg-card p-6 shadow-sm"
              >
                <span className="gold-gradient flex size-10 items-center justify-center rounded-full text-white shadow">
                  <CheckCircle2 className="size-5" aria-hidden />
                </span>
                <h3 className="mt-3 font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowPage() {
  return (
    <>
      <PageHero
        kicker="How We Work"
        title="From First Conversation to Continuous Protection"
        intro="Every assignment follows a proven six-step workflow — from understanding your environment to keeping the solution effective as your risks evolve."
      />
      <Steps />
      <Commitments />
      <CtaBand
        title="Start the Conversation"
        text="Step one is simple: tell us about your organization and the risks you face."
        cta="Book a Consultation"
      />
    </>
  );
}
