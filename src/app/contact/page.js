"use server";

import SwitchForms from "@/components/contact/SwitchForms";

export default async function ContactPage() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <SwitchForms />
    </main>
  );
}