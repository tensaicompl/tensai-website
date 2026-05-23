import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — TensAI",
  description: "Get in touch with the TensAI team.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
