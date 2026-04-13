"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { RefreshCw, Settings2, ShieldCheck } from "lucide-react"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import PointCloudCluster from "@/components/ui/PointCloudCluster"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const conversationFeatures = [
  { icon: RefreshCw, title: "Adapts in real time", body: "For intakes, a thorough and complete history is collected. For follow-ups, newly expressed symptoms and concerns trigger structured depth collection with detailed follow-through. Stable symptoms previously mentioned receive brief confirmation." },
  { icon: Settings2, title: "Configured by your clinic", body: "Your team selects the relevant clinical domains for your patient population and clinic needs. Chronic pain, behavioral health, neurology, oncology supportive care: the assessment architecture changes. The underlying conversational skills and safety system does not." },
  { icon: ShieldCheck, title: "Continuous safety monitoring", body: "Every session includes structured safety guardrails that monitor for direct and passive expression of risk factors from first question to last. Risk indicators are flagged at the moment of disclosure and routed to the supervising clinician. Safety questions override session time limits." },
]

const sessionTypes = [
  { title: "Intake Sessions (Sessions 1-3, 30-45 min)", body: "Covers configured clinical domains in breadth and depth. The system recommends transition to check-in mode once the clinical picture is sufficiently complete. Your clinical team confirms the transition." },
  { title: "Check-In Sessions (Ongoing, 10-15 min)", body: "Changes-focused. Medication updates, symptom shifts, new concerns. The system re-opens a domain if something new appears. Patients are not asked to start over." },
  { title: "Exercise Sessions (As needed, 10-15 min)", body: "Prescribed behavioral exercises, delivered in clinic and that run between appointments. Learnings are summarized for the provider before the next visit." },
]

const reportTypes = [
  { title: "Detailed Intake Report", body: "For initial intake and insurance re-authorization. Complete biopsychosocial picture across all assessed domains. Supports the documentation complexity that higher-level CPT coding requires." },
  { title: "SOAP Note", body: "For check-ins and progress visits. Changes since last visit, medication updates, flagged items, current risk status." },
  { title: "Billing-Ready Report", body: "Generated alongside every clinical report. Written in CPT-ready language, mapped to the codes the care supports. Your billing team receives documentation ready for processing under existing codes." },
]

const vrMetrics = [
  { domain: "Privacy & Trust", vr: "6.0", ai: "4.9", diff: "+22%" },
  { domain: "Medical Disclosure Comfort", vr: "6.67", ai: "5.0", diff: "+33%" },
  { domain: "Future Use & Preference", vr: "6.38", ai: "5.0", diff: "+28%" },
  { domain: "Core Experience", vr: "6.42", ai: "4.92", diff: "+30%" },
  { domain: "Cultural Competence", vr: "6.5", ai: "6.25", diff: "+4%" },
  { domain: "Overall Experience", vr: "6.29", ai: "5.86", diff: "+7%" },
]

const safetyCards = [
  { title: "Continuous safety screening", body: "Every session includes structured safety screening from the first question to the last. The system does not clear patients, it flags indicators. Risk alerts route directly to the supervising clinician in real time." },
  { title: "Evidence-linked claims", body: "Every finding in the clinical report is linked to the specific patient exchange that produced it. Providers can open the source transcript for any claim. Uncertain items are explicitly marked for provider review." },
  { title: "Clinician-controlled at every step", body: "Sessions are launched by clinical staff, not patients. Domain configuration is controlled by the clinical team. Reports require explicit provider sign-off before finalization. No content enters the clinical record without provider review and approval." },
]

export default function HowItWorksContent() {
  return (
    <>
      {/* Hero — cream bg with point cloud visual */}
      <section className="relative overflow-hidden bg-surface-cream">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_45%]">
          <div className="pt-28 pb-16 md:pt-32 md:pb-20 xl:pb-24 px-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-4">
            <nav className="mb-8 font-body text-sm text-neutral-slate">
              <Link href="/" className="hover:text-brand-indigo transition-colors">Home</Link><span className="mx-2">/</span><span className="text-neutral-near-black">How It Works</span>
            </nav>
            <ScrollReveal>
              <SectionLabel>How It Works</SectionLabel>
              <h1 className="mt-4 max-w-3xl">One platform. Designed to work across the full care journey.</h1>
              <p className="mt-6 max-w-2xl text-neutral-slate">Every component is configured by your clinical team. Every decision stays with your providers.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" href="/in-practice" size="large">See It in Practice</Button>
                <Button variant="secondary" href="/contact" size="large">Schedule a Conversation</Button>
              </div>
            </ScrollReveal>
          </div>
          <div className="relative hidden lg:block min-h-[450px]">
            <PointCloudCluster className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </section>

      {/* The Conversation — dark bg with dots at low opacity */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-brand-deep-space">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url(/images/illustrations/dots-indigo-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <ScrollReveal>
            <SectionLabel dark>The Conversation</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-white">Designed by medical experts for disclosure and information collection.</h2>
            <p className="mt-4 font-body font-bold text-white/80">15-45 minutes, no provider time consumed</p>
          </ScrollReveal>
          <motion.div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
            {conversationFeatures.map((f) => (
              <motion.div key={f.title} variants={staggerChild} className="flex items-start gap-4">
                <f.icon className="h-6 w-6 text-accent-lime shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="text-white">{f.title}</h4>
                  <p className="mt-2 text-white/70 text-base">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Session Types — cream with subtle dots */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-surface-cream">
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/illustrations/dots-cream-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <ScrollReveal>
            <SectionLabel>Session Types</SectionLabel>
            <h2 className="mt-4">Intake. Check-in. Between visits. Each session has a job.</h2>
          </ScrollReveal>
          <motion.div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
            {sessionTypes.map((t) => (
              <motion.div key={t.title} variants={staggerChild}>
                <Card className="h-full border-t-2 border-t-brand-indigo">
                  <h4 className="text-base">{t.title}</h4>
                  <p className="mt-2 text-neutral-slate text-base">{t.body}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Output — cream bg with subtle dots */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-surface-cream">
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/illustrations/dots-cream-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <ScrollReveal>
          <SectionLabel>The Output</SectionLabel>
          <h2 className="mt-4">The right report format for the right information.</h2>
          <p className="mt-4 max-w-2xl text-neutral-slate">Every session generates structured outputs from the same data: a clinical report or SOAP note for provider review, and billing-ready documentation mapped to the CPT codes the encounter supports.</p>
        </ScrollReveal>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-stretch">
          <ScrollReveal>
            <div className="space-y-6">
              {reportTypes.map((t) => (
                <div key={t.title} className="bg-surface-white/80 rounded-xl p-5 border border-neutral-border/50">
                  <h4 className="text-base">{t.title}</h4>
                  <p className="mt-2 text-neutral-slate text-base">{t.body}</p>
                </div>
              ))}
              <div className="space-y-4 mt-6">
                <div className="bg-surface-white/80 rounded-xl p-5 border border-neutral-border/50">
                  <h4 className="text-base">Evidence-linked claims</h4>
                  <p className="mt-2 text-neutral-slate text-base">Every finding traces to the patient&apos;s own words. Open the transcript or audio for any flagged item. Uncertain items are flagged. Trust confident summaries. Verify flagged ones.</p>
                </div>
                <div className="bg-surface-white/80 rounded-xl p-5 border border-neutral-border/50">
                  <h4 className="text-base">Cross-session intelligence</h4>
                  <p className="mt-2 text-neutral-slate text-base">The system tracks what has been covered, what changed, and what the provider directed, including between-visit check-ins and exercise engagement. Follow-ups build; they don&apos;t restart.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image src="/images/illustrations/three-report-tiers.png" alt="Report preview: Detailed Intake, SOAP Note, Billing-Ready" fill className="object-contain object-top" />
            </div>
          </ScrollReveal>
        </div>
        </div>
      </section>

      {/* Why VR — white bg */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-surface-white">
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start">
            <div>
              <ScrollReveal>
                <SectionLabel>Why VR</SectionLabel>
                <h2 className="mt-4">Immersion changes what patients share.</h2>
                <div className="mt-6 space-y-4 text-neutral-slate text-base">
                  <p>Standard clinical intake happens in environments shaped by time pressure, social judgment, and institutional formality. VR removes those barriers. In a controlled immersive environment, patients engage longer, disclose more, and report greater comfort sharing sensitive information.</p>
                  <p>Data from our randomized controlled trial shows VR consistently outperforming web-based AI across engagement, disclosure comfort, and overall experience. VR responses were 30% longer. Patients elaborate more when the environment supports it.</p>
                  <p>The same conversational AI runs on phone, tablet, and web. VR is the highest-fidelity option where deeper engagement matters most.</p>
                </div>
              </ScrollReveal>

              {/* Stats under text, in reading flow */}
              <ScrollReveal>
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full bg-surface-white border border-neutral-border rounded-xl overflow-hidden text-sm">
                    <thead>
                      <tr className="bg-surface-cream">
                        <th className="text-left px-4 py-3 font-body font-bold text-xs uppercase tracking-wider text-neutral-slate">Domain</th>
                        <th className="text-right px-4 py-3 font-body font-bold text-xs uppercase tracking-wider text-neutral-slate">VR</th>
                        <th className="text-right px-4 py-3 font-body font-bold text-xs uppercase tracking-wider text-neutral-slate">Web AI</th>
                        <th className="text-right px-4 py-3 font-body font-bold text-xs uppercase tracking-wider text-brand-indigo">Diff</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vrMetrics.map((m, i) => (
                        <tr key={m.domain} className={i % 2 === 1 ? "bg-surface-cream/50" : ""}>
                          <td className="px-4 py-2 font-body text-neutral-near-black text-sm">{m.domain}</td>
                          <td className="px-4 py-2 font-body text-right text-neutral-slate text-sm">{m.vr}</td>
                          <td className="px-4 py-2 font-body text-right text-neutral-slate text-sm">{m.ai}</td>
                          <td className="px-4 py-2 font-body font-bold text-right text-brand-indigo text-sm">{m.diff}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-2 font-body text-[11px] text-neutral-mist">Data from our randomized controlled trial, n=45</p>
                </div>
              </ScrollReveal>

              {/* Quote — emotional close, last element */}
              <ScrollReveal>
                <div className="mt-8 bg-brand-deep-space rounded-2xl p-6">
                  <p className="font-display italic text-base text-white/90">"VR showed higher median ratings than desktop across several domains, with moderate-to-large effect sizes in Core and Overall Experience."</p>
                  <p className="mt-2 font-body text-xs text-white/50">Murnane et al., Journal of Medical Extended Reality, 2026.</p>
                </div>
              </ScrollReveal>
            </div>

            {/* VR image — matched to text height, not cropped */}
            <ScrollReveal delay={0.1} className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden">
                <Image src="/images/illustrations/VR-experiences-adaptive-2.png" alt="VR clinical assessment session" width={500} height={375} className="w-full h-auto object-contain img-blend" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Avatar — cream dots bg, video cropped to match quote card height */}
      <Section bg="cream" dots>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden max-w-[380px]">
              <video autoPlay muted loop playsInline className="w-full h-auto object-contain" poster="/images/illustrations/robot-avatar-blue.png">
                <source src="/videos/robot-head-movements.mp4" type="video/mp4" />
              </video>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <SectionLabel>The Interface</SectionLabel>
            <h2 className="mt-4">Why a non-human avatar.</h2>
            <div className="mt-6 space-y-4 text-neutral-slate text-base">
              <p>Research in human-computer interaction shows that people disclose more to agents they perceive as non-human. The absence of a human face removes the fear of judgment, social desirability bias, and the self-editing that shapes every clinical encounter.</p>
              <p>AugMend's conversational avatar is deliberately non-human. It creates psychological distance from the clinical relationship while maintaining the warmth and responsiveness of a guided conversation. Patients don't perform for it. They speak to it.</p>
              <p>In our trial data, AI-mediated responses showed significantly higher emotional intensity (p &lt; .001) and greater emotional diversity (p = .04): patients are not just saying more, they're saying what they actually feel.</p>
            </div>
            <div className="mt-6 bg-brand-deep-space rounded-2xl p-6">
              <p className="font-display italic text-base text-white/90">"People disclose more when they believe they're interacting with a non-human agent, experiencing less fear of judgment and greater willingness to share sensitive information."</p>
              <p className="mt-2 font-body text-xs text-white/50">Lucas et al. (2014), Computers in Human Behavior, USC Institute for Creative Technologies</p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Safety — all text white/cream on dark bg */}
      <Section bg="deep-space">
        <ScrollReveal>
          <SectionLabel dark>Safety Design</SectionLabel>
          <h2 className="mt-4 text-white max-w-3xl">The AI guides. The provider decides. Every time.</h2>
          <p className="mt-4 max-w-2xl text-white/70 text-base">AugMend does not interpret clinical data, render diagnoses, or generate treatment recommendations. Every session runs under the supervision of a licensed clinician. Every output requires provider review before it enters the clinical record.</p>
        </ScrollReveal>
        <motion.div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerParent}>
          {safetyCards.map((c) => (
            <motion.div key={c.title} variants={staggerChild}>
              <div className="bg-white/[0.06] rounded-2xl p-6 border-l-2 border-l-accent-lime h-full">
                <h4 className="text-white">{c.title}</h4>
                <p className="mt-2 text-white/70 text-base">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Single CTA — dark indigo */}
      <section className="relative overflow-hidden py-16 md:py-20 xl:py-24 bg-brand-deep-space border-t border-white/[0.08]">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <ScrollReveal>
            <h2 className="text-white">See how it fits into your clinic&apos;s workflow.</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button variant="lime" href="/in-practice" size="large">See It in Practice &rarr;</Button>
              <Button variant="ghost" href="/contact" size="large">Schedule a Conversation</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
