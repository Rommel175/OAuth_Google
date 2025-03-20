'use client'

import { createClient } from "@/utils/supabase/client";

export default function ButtonLogIn( props : { nextUrl? : string } ) {
  const supabase = createClient();
  
  async function handleLogin() {
    await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${location.origin}/auth/callback?next=${props.nextUrl || ""}`
        }
    });
  }

  return (
    <button onClick={handleLogin}>Iniciar sesión</button>
  );
}