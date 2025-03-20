'use client'

import Link from 'next/link';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
        <div className={styles.title}>
            <h1>Google</h1>
        </div>
        <ul className={styles.menu}>
            <li><Link href={'/'} className={pathname == '/' ? styles.active : ''}>Home</Link></li>
            <li><Link href={'/profile'} className={pathname == '/profile' ? styles.active : ''}>Profile</Link></li>
            <li><Link href={'/contact'} className={pathname == '/contact' ? styles.active : ''}>Contact</Link></li>
        </ul>
    </nav>
  );
}