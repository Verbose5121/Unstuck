import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Providers } from "@/app/providers";

import type { Database } from "@/lib/database.types";
import LoginForm from "@/components/auth/LoginForm";

export default async function LoginPage() {
  return (
    <div>
      <Providers>
        <LoginForm />
      </Providers>
    </div>
  );
}
