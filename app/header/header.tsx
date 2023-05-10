import React from 'react'
import styles from './header.module.scss'
import Link from 'next/link'

export default function header() {
  return (
    <nav className={styles.header}>
        <div className={styles.branding}>
            <p>Some Cool Name and Logo Will go here</p>
        </div>
        <ul className={styles.menu}>
            <li className={styles.menuButton}>Join as a pro</li>
            <li>
              <Link href='/auth/register' className={styles.menuItem}>Sign Up</Link>
            </li>
            <li>
              <Link href='/auth/login' className={styles.menuItem}>Login</Link>
            </li>
        </ul>
    </nav>
  )
}
