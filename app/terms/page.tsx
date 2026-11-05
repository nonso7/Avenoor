import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of service", alternates: { canonical: "/terms" } };

// TODO: replace with reviewed terms of service before launch.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of service">
      <p>Our terms of service are being prepared ahead of launch.</p>
      <p>
        Avenor is an early-stage company. The products and capabilities described on this site are in development or
        planned, and are not yet available.
      </p>
    </LegalPage>
  );
}
