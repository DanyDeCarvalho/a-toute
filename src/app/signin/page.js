"use server";

import LoginForm from "@/components/signin/page";

export default async function SignInPage() {
  return (
    <div className="container mx-auto py-10">
      <LoginForm />
    </div>
  );
}
