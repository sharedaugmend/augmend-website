# AugMend Health — Trust, Security & AI Governance

Source: AI Architecture, Data Governance and Regulatory Language (Version 1.0, March 2026)

Use the content below to build the public-facing Trust, Security & AI Governance page. This is extracted from AugMend's IRB regulatory document. Do NOT publish verbatim — adapt into accessible, buyer-facing page sections while maintaining accuracy.

---

## 1. Data Security Infrastructure

### Encryption
All data transmissions are encrypted using TLS 1.2 or higher. Real-time connections use encrypted WebSocket technology. All stored data is secured with AES-256 encryption at rest.

### Cloud Infrastructure
Hosted on Amazon Web Services (AWS) — enterprise-grade security infrastructure certified for HIPAA, SOC 2, and FedRAMP compliance. Containerized deployment with encrypted object storage for all session artifacts.

### Access Controls
Multi-factor authentication (MFA) required for all access. Role-based access controls ensure users access only data required for their role. Detailed logs of all access attempts and interactions. Quarterly access reviews.

### HIPAA Compliance
Comprehensive HIPAA compliance program addressing the Privacy Rule, Security Rule, and Breach Notification Rule. Designated HIPAA Privacy and Security Officers. Regular risk assessments. Formal BAA management with all vendors. SOC 2 Type 2 certification in progress.

### Incident Response
Formal incident response plan with immediate reporting, rapid containment, thorough documentation, and appropriate notifications as required by HIPAA.

---

## 2. AI Data Processing & Privacy

### Data Flow
Patient audio → AugMend encrypted cloud server → HIPAA-compliant third-party AI service for processing → generated responses delivered back to device. All transmissions use TLS encryption.

### Third-Party AI Vendor Controls
All AI vendors operate under HIPAA-compliant BAAs with: zero data retention (all data deleted immediately after processing), no use of patient data for model training, encryption in transit, compliance with HIPAA Security Rule. Current vendor: OpenAI (audio-to-text conversion, conversational response generation).

### Automated De-Identification
All transcripts undergo automated de-identification using NLP tools — replacing names, dates, geographic identifiers, and other HIPAA-specified identifiers with generic labels (e.g., [Name_1], [Date_1]). Aligned with HIPAA Safe Harbor method for removal of the 18 specified identifiers.

### Data Minimization
No PHI stored on VR headset devices. Audio and transcript data transmitted to encrypted cloud in real time, not cached locally. Temporary processing memory purged upon completion of each step.

---

## 3. AI Safety Monitoring & Governance

### Real-Time Safety Detection
Dual-layer system operating continuously during every session:
- **Layer 1 (Deterministic):** Keyword-based detection scanning against comprehensive safety dictionary. Triggers immediate flags on keyword match.
- **Layer 2 (Contextual):** AI-based detection analyzing contextual meaning — identifies indirect references, euphemistic language, and emergent risk indicators that keyword matching alone would miss.

Upon detection, the system immediately flags the event and initiates the site-specific safety response protocol, including clinician notification.

### Post-Session Risk Classification
Four-tier system: Tier 0 (no concern), Tier 1 (passive harming thoughts — monitor), Tier 2 (active risk signals — escalate), Tier 3 (imminent danger — immediate intervention). Each classification is evidence-grounded with justification linked to specific conversational exchanges. Conservative rule: uncertain between tiers → select the higher tier.

### Clinician-in-the-Loop
The platform is designed so licensed healthcare professionals retain full clinical decision-making authority at all times. CAS sessions are configured by the supervising clinician. All outputs (reports, risk classifications) are reviewed and approved by the clinician before entering the clinical record. Safety alerts route to the clinician for assessment. The system does not autonomously initiate clinical interventions or deliver therapeutic content.

### Evidence Traceability
Every finding in a clinical report traces back to the specific conversational exchange it was derived from. Full version history maintained across the pipeline. No data is overwritten; edits create new versions while originals remain immutable.

---

## 4. Regulatory Classification

### Not a Medical Device
AugMend's platform components do not constitute medical devices under applicable FDA regulatory frameworks. Based on functional characteristics, statutory exclusions (21st Century Cures Act), and FDA guidance documents.

### CAS (Conversational AI System)
Classified as Non-Device Clinical Decision Support Software. Meets the 21st Century Cures Act Section 3060(a) exclusion and FDA Clinical Decision Support Software guidance (2022) criteria — the system presents structured information for clinician review, does not make independent diagnostic or treatment decisions, and enables clinicians to independently verify every finding.

### VRAIE (VR & AI Exercises)
Classified as a General Wellness Product under FDA's General Wellness Policy (2019). Delivers educational content and skill-building exercises. Does not diagnose, treat, cure, mitigate, or prevent any condition. No FDA premarket review, 510(k), or IDE required.

### No FDA Filing Required
No component of the platform requires FDA clearance, premarket review, or investigational device exemption.

---

## Summary: Security Controls

| Domain | Control | Standard |
|--------|---------|----------|
| Encryption in Transit | TLS 1.2+ on all connections; WebSocket Secure | NIST SP 800-52 Rev. 2 |
| Encryption at Rest | AES-256 on all stored data | NIST SP 800-111 |
| Cloud Infrastructure | AWS (HIPAA, SOC 2, FedRAMP certified) | AWS Shared Responsibility Model |
| Access Control | MFA; role-based access; quarterly reviews | NIST SP 800-63 |
| Audit Logging | All access attempts logged via cloud monitoring | HIPAA § 164.312(b) |
| AI Vendor Controls | BAA with zero data retention for all vendors | HIPAA § 164.502(e) |
| De-Identification | Automated NLP-based PII removal, HIPAA Safe Harbor | HIPAA § 164.514(b) |
| Compliance Certification | SOC 2 Type 2 in progress | AICPA Trust Services Criteria |
