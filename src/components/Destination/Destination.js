import React, { Component } from 'react'
import data from '../../Json/Destinations.json'
import Places from './Places/Places'
import styles from '../../css/Destination.module.css'
import Router from './Router'
class Destination extends Component {
    render() {
        return (
            <div className={styles.Destination}>
                <div >
                    <h1 className={styles.Destination_Header}>Destinations Near You</h1>
                </div>
                <div className='Destination_places'>
                    <Router/>
                </div>
            </div>
        )
    }
}
export default Destination;