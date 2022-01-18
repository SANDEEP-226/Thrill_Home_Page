import React from 'react'
import styles from '../css/ParadiseCard.module.css'

export default function ParadiseTitles(props) {
    return (
        <div className={styles.TContainer}>
            <p>{props.content}</p>
            {/* <a href='#'>Winter Ladakh</a>
            <a href='#'>Chadar Trek</a>
            <a href='#'>Spiti Bike Trip</a>
            <a href='#'>Kedherkantha Trek</a>
            <a href='#'>Ladakh Bike trip</a> */}
        </div>
    )
}
