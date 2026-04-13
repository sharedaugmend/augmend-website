"use client"

import { motion } from "framer-motion"
import { Lock, Shield, Brain, FileCheck, Server, Eye, AlertTriangle, UserCheck } from "lucide-react"
import Link from "next/link"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { staggerParent, staggerChild, viewportOnce } from "@/lib/animations"

const securityControls = [
  { domain: "Encryption in Transit", control: "TLS 1.2+ on all connections; WebSocket Secure", standard: "NIST SP 800-52 Rev. 2" },
  { domain: "Encryption at Rest", control: "AES-256 on all stored data", standard: "NIST SP 800-111" },
  { domain: "Cloud Infrastructure", control: "AWS (HIPAA, SOC 2, FedRAMP certified)", standard: "AWS Shared Responsibility Model" },
  { domain: "Access Control", control: "MFA; role-based access; quarterly reviews", standard: "NIST SP 800-63" },
  { domain: "Audit Logging", control: "All access attempts logged via cloud monitoring", standard: "HIPAA \u00a7 164.312(b)" },
  { domain: "AI Vendor Controls", control: "BAA with zero data retention for all vendors", standard: "HIPAA \u00a7 164.502(e)" },
  { domain: "De-Identification", control: "Automated NLP-based PII removal, HIPAA Safe Harbor", standard: "HIPAA \u00a7 164.514(b)" },
  { domain: "Compliance Certification", control: "SOC 2 Type 2 in progress", standard: "AICPA Trust Services Criteria" },
]

export default function TrustSecurityContent() {
  return (
    <>
      {/* Hero */}
      <Section bg="white" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <a href="/" className="hover:text-brand-indigo transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">Trust & Security</span>
        </nav>

        <ScrollReveal>
          <SectionLabel>Trust, Security &amp; AI Governance</SectionLabel>
          <h1 className="mt-4 max-w-3xl">
            Enterprise-grade security for clinical AI infrastructure.
          </h1>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            AugMend is built for institutional deployment. Every component meets HIPAA requirements, uses end-to-end encryption, and maintains zero data retention with AI vendors.
          </p>
        </ScrollReveal>
      </Section>

      {/* Section 1: Data Security */}
      <Section bg="cream">
        <ScrollReveal>
          <SectionLabel>Data Security Infrastructure</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            Encrypted. Compliant. Auditable.
          </h2>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <Lock className="h-6 w-6 text-brand-indigo mb-3" strokeWidth={1.5} />
              <h4>Encryption</h4>
              <p className="mt-2 text-neutral-slate">
                All data transmissions are encrypted using TLS 1.2 or higher. Real-time connections use encrypted WebSocket technology. All stored data is secured with AES-256 encryption at rest.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <Server className="h-6 w-6 text-brand-indigo mb-3" strokeWidth={1.5} />
              <h4>Cloud Infrastructure</h4>
              <p className="mt-2 text-neutral-slate">
                Hosted on Amazon Web Services (AWS), enterprise-grade security infrastructure certified for HIPAA, SOC 2, and FedRAMP compliance. Containerized deployment with encrypted object storage for all session artifacts.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <Shield className="h-6 w-6 text-brand-indigo mb-3" strokeWidth={1.5} />
              <h4>Access Controls</h4>
              <p className="mt-2 text-neutral-slate">
                Multi-factor authentication (MFA) required for all access. Role-based access controls ensure users access only data required for their role. Detailed logs of all access attempts and interactions. Quarterly access reviews.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <FileCheck className="h-6 w-6 text-brand-indigo mb-3" strokeWidth={1.5} />
              <h4>HIPAA Compliance</h4>
              <p className="mt-2 text-neutral-slate">
                Comprehensive HIPAA compliance program addressing the Privacy Rule, Security Rule, and Breach Notification Rule. Designated HIPAA Privacy and Security Officers. Regular risk assessments. Formal BAA management with all vendors. SOC 2 Type 2 certification in progress.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* Section 2: AI Data Processing */}
      <Section bg="white">
        <ScrollReveal>
          <SectionLabel>AI Data Processing &amp; Privacy</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            Zero retention. Zero training. Full de-identification.
          </h2>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h4>Data Flow</h4>
              <p className="mt-2 text-neutral-slate">
                Patient audio → AugMend encrypted cloud server → HIPAA-compliant third-party AI service for processing → generated responses delivered back to device. All transmissions use TLS encryption.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h4>Third-Party AI Vendor Controls</h4>
              <p className="mt-2 text-neutral-slate">
                All AI vendors operate under HIPAA-compliant BAAs with: zero data retention (all data deleted immediately after processing), no use of patient data for model training, encryption in transit, compliance with HIPAA Security Rule.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h4>Automated De-Identification</h4>
              <p className="mt-2 text-neutral-slate">
                All transcripts undergo automated de-identification using NLP tools, replacing names, dates, geographic identifiers, and other HIPAA-specified identifiers with generic labels. Aligned with HIPAA Safe Harbor method for removal of the 18 specified identifiers.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h4>Data Minimization</h4>
              <p className="mt-2 text-neutral-slate">
                No PHI stored on VR headset devices. Audio and transcript data transmitted to encrypted cloud in real time, not cached locally. Temporary processing memory purged upon completion of each step.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* Section 3: AI Safety Monitoring */}
      <Section bg="deep-space">
        <ScrollReveal>
          <SectionLabel dark>AI Safety Monitoring &amp; Governance</SectionLabel>
          <h2 className="mt-4 text-white max-w-3xl">
            Dual-layer detection. Four-tier classification. Clinician-in-the-loop.
          </h2>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          <motion.div variants={staggerChild}>
            <div className="bg-white/[0.06] rounded-2xl p-8 border-l-2 border-l-accent-lime h-full">
              <Eye className="h-6 w-6 text-accent-lime mb-3" strokeWidth={1.5} />
              <h4 className="text-white">Real-Time Safety Detection</h4>
              <p className="mt-3 text-white/70">
                Dual-layer system operating continuously during every session. Layer 1 (Deterministic): keyword-based detection scanning against comprehensive safety dictionary. Layer 2 (Contextual): AI-based detection analyzing contextual meaning, identifies indirect references, euphemistic language, and emergent risk indicators that keyword matching alone would miss.
              </p>
            </div>
          </motion.div>
          <motion.div variants={staggerChild}>
            <div className="bg-white/[0.06] rounded-2xl p-8 border-l-2 border-l-accent-lime h-full">
              <AlertTriangle className="h-6 w-6 text-accent-lime mb-3" strokeWidth={1.5} />
              <h4 className="text-white">Post-Session Risk Classification</h4>
              <p className="mt-3 text-white/70">
                Four-tier system: Tier 0 (no concern), Tier 1 (passive harming thoughts, monitor), Tier 2 (active risk signals, escalate), Tier 3 (imminent danger, immediate intervention). Each classification is evidence-grounded with justification linked to specific conversational exchanges. Conservative rule: uncertain between tiers → select the higher tier.
              </p>
            </div>
          </motion.div>
          <motion.div variants={staggerChild}>
            <div className="bg-white/[0.06] rounded-2xl p-8 border-l-2 border-l-accent-lime h-full">
              <UserCheck className="h-6 w-6 text-accent-lime mb-3" strokeWidth={1.5} />
              <h4 className="text-white">Clinician-in-the-Loop</h4>
              <p className="mt-3 text-white/70">
                Licensed healthcare professionals retain full clinical decision-making authority at all times. CAS sessions are configured by the supervising clinician. All outputs are reviewed and approved by the clinician before entering the clinical record. Safety alerts route to the clinician for assessment. The system does not autonomously initiate clinical interventions.
              </p>
            </div>
          </motion.div>
          <motion.div variants={staggerChild}>
            <div className="bg-white/[0.06] rounded-2xl p-8 border-l-2 border-l-accent-lime h-full">
              <Brain className="h-6 w-6 text-accent-lime mb-3" strokeWidth={1.5} />
              <h4 className="text-white">Evidence Traceability</h4>
              <p className="mt-3 text-white/70">
                Every finding in a clinical report traces back to the specific conversational exchange it was derived from. Full version history maintained across the pipeline. No data is overwritten; edits create new versions while originals remain immutable.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Section 4: Regulatory Classification */}
      <Section bg="white">
        <ScrollReveal>
          <SectionLabel>Regulatory Classification</SectionLabel>
          <h2 className="mt-4 max-w-3xl">
            Not a medical device. No FDA filing required.
          </h2>
          <p className="mt-6 max-w-2xl text-neutral-slate">
            AugMend&#39;s platform components do not constitute medical devices under applicable FDA regulatory frameworks.
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerParent}
        >
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h4>CAS (Conversational AI System)</h4>
              <p className="mt-2 text-neutral-slate">
                Classified as Non-Device Clinical Decision Support Software. Meets the 21st Century Cures Act Section 3060(a) exclusion and FDA Clinical Decision Support Software guidance (2022) criteria: the system presents structured information for clinician review, does not make independent diagnostic or treatment decisions, and enables clinicians to independently verify every finding.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={staggerChild}>
            <Card className="h-full">
              <h4>VRAIE (VR &amp; AI Exercises)</h4>
              <p className="mt-2 text-neutral-slate">
                Classified as a General Wellness Product under FDA&#39;s General Wellness Policy (2019). Delivers educational content and skill-building exercises. Does not diagnose, treat, cure, mitigate, or prevent any condition. No FDA premarket review, 510(k), or IDE required.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* Security Controls Table */}
      <Section bg="cream">
        <ScrollReveal>
          <SectionLabel>Summary</SectionLabel>
          <h2 className="mt-4">Security Controls</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full bg-surface-white border border-neutral-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-surface-cream">
                  <th className="text-left px-6 py-4 font-body font-bold text-sm uppercase tracking-[0.05em] text-neutral-slate">Domain</th>
                  <th className="text-left px-6 py-4 font-body font-bold text-sm uppercase tracking-[0.05em] text-neutral-slate">Control</th>
                  <th className="text-left px-6 py-4 font-body font-bold text-sm uppercase tracking-[0.05em] text-neutral-slate">Standard</th>
                </tr>
              </thead>
              <tbody>
                {securityControls.map((row, i) => (
                  <tr key={row.domain} className={i % 2 === 1 ? "bg-surface-cream/50" : ""}>
                    <td className="px-6 py-4 font-body font-bold text-sm text-neutral-near-black">{row.domain}</td>
                    <td className="px-6 py-4 font-body text-sm text-neutral-slate">{row.control}</td>
                    <td className="px-6 py-4 font-body text-sm text-neutral-slate">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section bg="indigo">
        <ScrollReveal>
          <h2 className="text-white text-center">
            Questions about our security infrastructure?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button variant="ghost" href="/contact">
              Contact Our Team
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
