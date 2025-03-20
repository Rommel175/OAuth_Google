import ButtonLogIn from "@/components/Button-login";
import styles from "./page.module.css";
import ButtonLogOut from "@/components/Button-logout";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {

  const supabase = createClient();

  const {data: {session}} = await (await supabase).auth.getSession();

  const user = session?.user;


  return (
    <main className={styles.main}>
      <header>
        <h1>Google authenticator</h1>
      </header>
      <div>
        <h2>Autenticación</h2>
        <div className={styles.buttons}>
          {
            !user ? <ButtonLogIn /> : <ButtonLogOut />
          }
        </div>
      </div>
    </main>
  );
}
