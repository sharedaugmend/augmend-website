import ScrollReveal from "@/components/ui/ScrollReveal"
import Button from "@/components/ui/Button"
import { BOOKING_URL, CTA_LABEL } from "@/data/newsletter"

export default function CtaBlock() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-28"
      style={{
        background: "linear-gradient(135deg, #0D0B3E 0%, #2820b8 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.5' cy='1.5' r='1.5' fill='%23ffffff' fill-opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        <ScrollReveal>
          <div className="max-w-[720px] mx-auto text-center">
            <h2 className="text-white" style={{ fontSize: 40, marginBottom: 12 }}>
              Ready to see AugMend<br />in your clinic?
            </h2>
            <p
              className="font-body text-[17px] mb-10"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              We run structured pilots with specialty care practices. Most go live in under four weeks.
            </p>

            <Button variant="primary" size="large" href={BOOKING_URL} newTab>
              {CTA_LABEL} →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
