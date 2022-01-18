import React from 'react'
import styles from '../css/Gift.module.css'
import gift from '../assets/giftCard.png'
export default function Gift() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={gift} alt="Gift Card" />
            </div>
            <div className={styles.content}>
                <h1>Gift an Experience</h1>
                <p>With Thrillophilia Gift Cards</p>
                <button className={styles.button}>Know More</button>
            </div>
        </div>
    )
}
