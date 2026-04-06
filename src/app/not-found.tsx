import Link from "next/link"
import Section from "@/components/layout/Section"
import Button from "@/components/ui/Button"

export default function NotFound() {
  return (
    <Section bg="white" padding="large" className="pt-32!">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-5xl">404</h1>
        <p className="mt-4 font-display text-2xl text-neutral-near-black">
          This page doesn&#39;t exist.
        </p>
        <p className="mt-2 text-neutral-slate">
          The data you&#39;re looking for might be elsewhere.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="primary" href="/">
            Go Home
          </Button>
          <Button variant="secondary" href="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  )
}
