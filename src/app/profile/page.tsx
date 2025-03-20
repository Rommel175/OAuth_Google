import { ProfileCard } from "@/components/Profile-card";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const supabase = createClient();
  const {data, error} = await (await supabase).auth.getUser();
  const user = data.user;

  if (!user) {
    redirect('/')
  }

  return (
    <ProfileCard user={user} />
  );
}