import React from 'react'
import styles from './hero-banner.module.scss'

export default function HeroBanner() {
  return (
    <div className={styles.hero}>
        <div className={styles.locator}>
            <p className={styles.locatorHeading}>Find professionals near you</p>
            <p className={styles.locatorSubHeading}>Confirm your location to see quality pros near you.</p>
            <input type='text' 
                value='Kingston'
                className={styles.searchBox}
            />
            <div className={styles.searchButton}>
                Start Search
            </div>
        </div>
    </div>
  )
}
