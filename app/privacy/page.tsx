import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy policy", alternates: { canonical: "/privacy" } };

// TODO: replace with a reviewed privacy policy before launch.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy">
      <p>Our full privacy policy is being prepared ahead of launch.</p>
      <p>If you join the waitlist, we use your email address and stated interest only to contact you about Avenor.</p>
    </LegalPage>
  );
}
