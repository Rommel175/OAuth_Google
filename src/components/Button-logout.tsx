'use client'

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function ButtonLogOut() {
  const supabase = createClient();
  const router = useRouter();

  async function handleLogOut() {
    await supabase.auth.signOut();
    router.refresh();
  }
  
  
  return (
    <button onClick={handleLogOut}>Cerrar sesión</button>
  );
}