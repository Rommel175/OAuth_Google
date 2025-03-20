import { User } from "@supabase/supabase-js";
import Image from "next/image";
import styles from "./profileCard.module.css";

export function ProfileCard({ user }: { user: User }) {
  return (
    <div className={styles.container}>
      <Image src={user.user_metadata.avatar_url} width={100} height={100} alt="image" className={styles.img} />
      <h3>{user.user_metadata.name}</h3>
      <h3>{user.user_metadata.email}</h3>
    </div>

  );
}