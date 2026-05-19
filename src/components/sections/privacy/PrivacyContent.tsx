import { type ReactNode } from "react"
import Link from "next/link"
import Section from "@/components/layout/Section"
import SectionLabel from "@/components/ui/SectionLabel"
import ScrollReveal from "@/components/ui/ScrollReveal"

interface PolicySectionProps {
  number: string
  title: string
  children: ReactNode
}

function PolicySection({ number, title, children }: PolicySectionProps) {
  return (
    <ScrollReveal className="mt-16 first:mt-0 scroll-mt-32" >
      <div id={`section-${number}`}>
        <div className="font-body text-sm uppercase tracking-[0.1em] text-brand-indigo">
          Section {number}
        </div>
        <h2 className="mt-3">{title}</h2>
        <div className="mt-6 space-y-5 text-neutral-slate prose-policy">
          {children}
        </div>
      </div>
    </ScrollReveal>
  )
}

interface SubsectionProps {
  number: string
  title: string
  children: ReactNode
}

function Subsection({ number, title, children }: SubsectionProps) {
  return (
    <div className="mt-8">
      <h3 className="font-display text-[1.375rem] leading-tight font-semibold text-neutral-near-black tracking-[-0.005em]">
        <span className="text-brand-indigo">{number}</span> {title}
      </h3>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  )
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5 list-disc marker:text-brand-indigo/60">
      {items.map((item, i) => (
        <li key={i} className="leading-relaxed">{item}</li>
      ))}
    </ul>
  )
}

export default function PrivacyContent() {
  return (
    <>
      {/* Hero */}
      <Section bg="white" padding="large" className="pt-32!">
        <nav className="mb-8 font-body text-sm text-neutral-slate">
          <Link href="/" className="hover:text-brand-indigo transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-near-black">Privacy Policy</span>
        </nav>

        <ScrollReveal>
          <SectionLabel>Legal</SectionLabel>
          <h1 className="mt-4 max-w-3xl">Privacy Policy</h1>
          <p className="mt-4 font-body text-sm text-neutral-slate">
            Last Updated: May 5, 2025
          </p>
          <div className="mt-8 max-w-2xl space-y-4 text-neutral-slate">
            <p>
              Welcome to AugMend (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our VR software application.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our application.
            </p>
            <p>
              This Privacy Policy covers the &ldquo;personal information,&rdquo; meaning information about an identified or identifiable individual that is collected through our services. By accessing or using our services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Body */}
      <Section bg="warm-white" padding="large">
        <div className="mx-auto max-w-3xl">
          <PolicySection number="1" title="Information We Collect">
            <p>
              The specific data collected may vary depending on your use of the application, device capabilities, and enabled features.
            </p>

            <Subsection number="1.1" title="Personal Information">
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <List
                items={[
                  "Create an account",
                  "Use our VR software application",
                  "Contact our customer support",
                  "Subscribe to our newsletter",
                  "Participate in surveys or promotions",
                  "Register for events or webinars",
                ]}
              />
              <p>This information may include:</p>
              <List
                items={[
                  "Contact information (name, email address, phone number)",
                  "Account credentials (username)",
                  "Billing information (payment method details, billing address)",
                  "Profile information (profile picture, biographical information)",
                  "Communication preferences",
                ]}
              />
            </Subsection>

            <Subsection number="1.2" title="Usage Data">
              <p>
                When you use our VR software application or visit our website, we may automatically collect certain information about your device and usage patterns, including:
              </p>
              <List
                items={[
                  "Device information (hardware model, operating system version, unique device identifiers)",
                  "IP address and network information",
                  "Location data (with your consent)",
                  "VR session data (duration, features used, performance metrics)",
                  "Log data (access times, pages viewed, time spent on pages)",
                  "Error reports and crash logs",
                ]}
              />
            </Subsection>

            <Subsection number="1.3" title="VR-Specific Data">
              <p>Our VR software application may collect additional information specific to your VR experience:</p>
              <List
                items={[
                  "Movement and positional tracking data",
                  "Hand tracking and gesture data",
                  "Eye tracking data (if applicable hardware is used)",
                  "Voice commands and audio inputs",
                  "Virtual environment interactions",
                  "Performance and system diagnostics",
                  "Body dimensions that you choose to store in the tracking features of your VR device",
                  "Physical environment data, such as the dimensions of the room where you use the device",
                  "Technical system information, such as crash logs which may contain your user ID, device ID, IP address, local computer file path, feature quality, and use of that feature",
                ]}
              />
            </Subsection>

            <Subsection number="1.4" title="AI-Assisted Interactions">
              <p>
                Our VR software may incorporate artificial intelligence (AI) capabilities to enhance user experience through natural conversation. When these features are active:
              </p>
              <List
                items={[
                  "Voice inputs may be processed through AI systems to understand and respond to your requests",
                  "Text from conversations may be processed to generate appropriate responses",
                  <>
                    We implement appropriate privacy safeguards including:
                    <ul className="mt-2 space-y-2 pl-5 list-[circle] marker:text-brand-indigo/40">
                      <li>Data minimization principles to limit collection to what is necessary</li>
                      <li>Zero-retention policies where possible with our AI technology providers</li>
                      <li>Deletion of audio data after processing</li>
                      <li>De-identification of conversation transcripts when storage is required</li>
                      <li>Encryption of all data during transmission and storage</li>
                    </ul>
                  </>,
                ]}
              />
            </Subsection>
          </PolicySection>

          <PolicySection number="2" title="How We Use Your Information">
            <p>We use the information we collect for various purposes, including:</p>

            <Subsection number="2.1" title="To Provide and Maintain Our Services">
              <List
                items={[
                  "Creating and managing your account",
                  "Processing transactions and billing",
                  "Delivering the functionality of our VR software application",
                  "Providing customer support and responding to inquiries",
                  "Sending service-related communications",
                ]}
              />
            </Subsection>

            <Subsection number="2.2" title="To Improve Our Services">
              <List
                items={[
                  "Analyzing usage patterns and trends",
                  "Identifying and fixing technical issues",
                  "Developing new features and enhancements",
                  "Personalizing user experience",
                  "Conducting research and development",
                ]}
              />
            </Subsection>

            <Subsection number="2.3" title="Marketing and Communications">
              <List
                items={[
                  "Sending newsletters and promotional communications (with your consent)",
                  "Providing information about new features or services",
                  "Measuring the effectiveness of our marketing campaigns",
                  "Conducting surveys and collecting feedback",
                ]}
              />
            </Subsection>

            <Subsection number="2.4" title="Legal and Security Purposes">
              <List
                items={[
                  "Detecting and preventing fraud and security incidents",
                  "Protecting against unauthorized access or misuse",
                  "Complying with legal obligations",
                  "Enforcing our terms of service and other policies",
                ]}
              />
            </Subsection>
          </PolicySection>

          <PolicySection number="3" title="Data Retention and Deletion">
            <Subsection number="3.1" title="Retention Period">
              <p>
                We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
              </p>
            </Subsection>

            <Subsection number="3.2" title="Data Deletion Requests">
              <p>
                Regardless of your location or region, you have the right to request deletion of your personal information. To request deletion of your personal data, please email us at{" "}
                <a href="mailto:info@augmend.health" className="text-brand-indigo underline underline-offset-4 hover:text-brand-deep-space">
                  info@augmend.health
                </a>
                .
              </p>
              <p>Upon receiving your request, we will:</p>
              <List
                items={[
                  "Verify your identity",
                  "Process your request within 30 days",
                  "Notify you when the deletion is complete",
                  "Provide confirmation of deletion",
                ]}
              />
              <p>Some information may be retained for legal or legitimate business purposes even after deletion request, such as:</p>
              <List
                items={[
                  "Information necessary for legal compliance",
                  "Aggregated or anonymized data that no longer identifies you",
                  "Information needed to detect security incidents or protect against malicious activities",
                ]}
              />
            </Subsection>
          </PolicySection>

          <PolicySection number="4" title="Data Sharing and Disclosure">
            <Subsection number="4.1" title="Third-Party Service Providers">
              <p>
                We may share your information with third-party vendors, service providers, and other business partners who perform services on our behalf, such as:
              </p>
              <List
                items={[
                  "Cloud hosting and storage providers",
                  "Payment processors",
                  "Analytics providers",
                  "Customer support services",
                  "Marketing and email service providers",
                ]}
              />
              <p>
                All third-party service providers are contractually obligated to use your information only for the purposes for which we disclose it and in accordance with this Privacy Policy.
              </p>
            </Subsection>

            <Subsection number="4.1.1" title="Third-Party Access">
              <p>
                Some components or features of our Service may include additional privacy notices, such as an optional feature that uses your personal information in a unique way. The language of those terms and privacy notices supplement this Privacy Policy.
              </p>
              <p>
                You may follow links contained in our Service or provided to you by other users to third-party websites or products not operated by us. This Privacy Policy does not apply to third-party websites or products. We strongly suggest you review their privacy policies to understand how your personal information is used and stored by those third parties.
              </p>
            </Subsection>

            <Subsection number="4.2" title="Business Transfers">
              <p>
                If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you of any change in ownership or uses of your information.
              </p>
            </Subsection>

            <Subsection number="4.3" title="Legal Requirements">
              <p>
                We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
              </p>
            </Subsection>

            <Subsection number="4.4" title="With Your Consent">
              <p>We may share your information with third parties when we have your consent to do so.</p>
            </Subsection>
          </PolicySection>

          <PolicySection number="5" title="Data Security">
            <p>
              We have implemented comprehensive technical and organizational measures to protect the security and confidentiality of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, while we strive to protect your information, we cannot guarantee its absolute security.
            </p>
            <p>Our security practices include:</p>

            <Subsection number="5.1" title="Enterprise-Grade Encryption">
              <List
                items={[
                  "Transport Layer Security (TLS) for all communications between users and our systems",
                  "Advanced Encryption Standard (AES) encryption for stored information",
                  "Encrypted WebSocket technology for data connections with frequently-rotated access credentials",
                ]}
              />
            </Subsection>

            <Subsection number="5.2" title="Access Controls">
              <List
                items={[
                  "Multi-factor authentication for system access",
                  "Role-based permissions limiting access to authorized personnel only",
                  "Detailed access logs of all system interactions",
                  "Regular security audits and compliance verification",
                ]}
              />
            </Subsection>

            <Subsection number="5.3" title="Infrastructure Security">
              <List
                items={[
                  "Data hosting on Amazon Web Services (AWS), providing enterprise-grade security infrastructure",
                  "Regular security assessments and penetration testing",
                  "Robust security incident response procedures",
                  "Regular security training for our staff",
                ]}
              />
            </Subsection>

            <Subsection number="5.4" title="Compliance and Certification">
              <List
                items={[
                  "Compliance with applicable data protection regulations",
                  "SOC 2 certification process to validate our security controls (in progress)",
                  "Regular third-party security assessments",
                ]}
              />
              <p>
                If you have an account with us and you suspect unauthorized use of your account or its credentials, you should contact us immediately using the contact information provided in Section 10.
              </p>
            </Subsection>
          </PolicySection>

          <PolicySection number="6" title="Your Rights and Choices">
            <Subsection number="6.1" title="Access and Update">
              <p>You can access and update certain personal information through your account settings or by contacting us directly.</p>
            </Subsection>

            <Subsection number="6.2" title="Communication Preferences">
              <p>
                You can opt out of receiving marketing communications from us by following the unsubscribe instructions included in each email or by updating your communication preferences in your account settings.
              </p>
            </Subsection>

            <Subsection number="6.3" title="Cookie Preferences">
              <p>
                You can set your browser to refuse all or some browser cookies or to alert you when cookies are being sent. Please note that some parts of our website may become inaccessible or not function properly if you disable cookies.
              </p>
            </Subsection>

            <Subsection number="6.4" title="Do Not Track">
              <p>
                We do not currently respond to &ldquo;Do Not Track&rdquo; signals as there is no common industry standard for compliance.
              </p>
            </Subsection>
          </PolicySection>

          <PolicySection number="7" title="Children's Privacy">
            <p>
              Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16 years of age. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to delete such information and comply with applicable legal requirements.
            </p>
          </PolicySection>

          <PolicySection number="8" title="International Data Transfers">
            <p>
              We are headquartered in the United States and may use service providers that operate in other countries. Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.
            </p>
            <p>
              We have taken appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy when transferred internationally. Please note that your personal information will be stored within the US.
            </p>
          </PolicySection>

          <PolicySection number="9" title="Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated &ldquo;Last Updated&rdquo; date, and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to stay informed about how we are protecting your information.
            </p>
            <p>
              If we make material changes to this Privacy Policy, we will notify you by updating the date of this Privacy Policy and posting it on the Service or other appropriate means. Any modifications to this Privacy Policy will be effective upon our posting the modified version (or as otherwise indicated at the time of posting).
            </p>
          </PolicySection>

          <PolicySection number="10" title="Contact Us">
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <div className="rounded-xl border border-neutral-border bg-surface-white p-6">
              <p className="font-display text-lg font-semibold text-neutral-near-black">AugMend Health, Inc.</p>
              <p className="mt-2">1 Broadway, 14th Floor, Cambridge, MA</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:info@augmend.health" className="text-brand-indigo underline underline-offset-4 hover:text-brand-deep-space">
                  info@augmend.health
                </a>
              </p>
              <p className="mt-1">
                Phone:{" "}
                <a href="tel:+16176935727" className="text-brand-indigo underline underline-offset-4 hover:text-brand-deep-space">
                  (617) 693-5727
                </a>
              </p>
            </div>
          </PolicySection>

          <PolicySection number="11" title="California Privacy Rights">
            <p>
              If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA). For more information, please visit our California Privacy Rights page at{" "}
              <span className="text-neutral-near-black">www.augmend.com/california-privacy</span>.
            </p>
          </PolicySection>

          <PolicySection number="12" title="EU/EEA Privacy Rights">
            <p>
              If you are located in the European Union or European Economic Area, you have certain rights under the General Data Protection Regulation (GDPR). For more information, please visit our EU Privacy Rights page at{" "}
              <span className="text-neutral-near-black">www.augmend.com/eu-privacy</span>.
            </p>
          </PolicySection>

          <PolicySection number="13" title="Supplementary Privacy Notice for Healthcare Data">
            <p>
              AugMend Health recognizes that our VR software application may be used in healthcare and research settings where protected health information (PHI) may be processed. This supplementary notice explains our additional privacy protections for such data.
            </p>

            <Subsection number="13.1" title="HIPAA Compliance">
              <p>
                AugMend Health is fully HIPAA-compliant for applicable healthcare-related services. When our services are used in a healthcare context, we function as a Business Associate and maintain appropriate Business Associate Agreements (BAAs) with covered entities as required by law.
              </p>
            </Subsection>

            <Subsection number="13.2" title="Enhanced Data Protection Measures">
              <p>For healthcare and research applications, we implement additional protections:</p>
              <List
                items={[
                  <>
                    <span className="font-bold text-neutral-near-black">Automatic De-identification:</span> Before storage, all session transcripts undergo automatic de-identification using natural language processing tools that recognize and replace personally identifiable information such as names, dates, and locations with generic labels (e.g., [Name_1]).
                  </>,
                  <>
                    <span className="font-bold text-neutral-near-black">Data Isolation:</span> Healthcare and research data remains completely isolated from our other operations through technical separation measures. De-identified data collected for research purposes remains within the approved research scope and will not be repurposed for commercial applications outside the specified context.
                  </>,
                  <>
                    <span className="font-bold text-neutral-near-black">Healthcare-Grade Security:</span> In addition to our standard security measures, healthcare data benefits from additional protections including enterprise-grade AWS infrastructure with specialized healthcare security configurations.
                  </>,
                  <>
                    <span className="font-bold text-neutral-near-black">Enhanced Audit Controls:</span> We maintain detailed access logs for all healthcare data, enabling regular security audits and compliance verification.
                  </>,
                  <>
                    <span className="font-bold text-neutral-near-black">Specialized Data Retention:</span> Healthcare data retention follows HIPAA guidelines with a minimum six-year retention period unless otherwise specified by the applicable healthcare institution or research protocol.
                  </>,
                ]}
              />
            </Subsection>

            <Subsection number="13.3" title="AI Processing in Healthcare Contexts">
              <p>When our VR application processes healthcare conversations using AI:</p>
              <List
                items={[
                  "We implement zero data retention policies with our AI providers where data exists only temporarily to serve the request",
                  "Audio processed for speech-to-text is deleted immediately after transcription",
                  "We maintain strict data minimization principles, collecting only information necessary for the authorized healthcare or research purpose",
                  "All data transmissions use multiple layers of encryption",
                  "User conversations are processed through secure channels with appropriate access controls",
                ]}
              />
            </Subsection>

            <Subsection number="13.4" title="Incident Response">
              <p>
                In the unlikely event of a security incident involving healthcare data, AugMend maintains a formal response plan that includes immediate reporting, rapid containment, thorough documentation, and appropriate notifications as required by HIPAA and other applicable regulations.
              </p>
            </Subsection>
          </PolicySection>
        </div>
      </Section>
    </>
  )
}
