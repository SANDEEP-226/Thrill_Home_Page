import React from 'react'
import styles from '../../../css/Bangalore.module.css'
import data from '../../../Json/Destinations.json'
import Item from './Item'
export default function Places(props) {
    var places = data.map((ii) => {if(ii.city === props.value){
        return ii.places
    }} )
    return (
        <div className={styles.item}>
            {
                
                places[Number(props.k)].map((i)=>(
                    <div>
                        <Item name={i.name} cost={i.cost}/>
                    </div>
                ))
            }
            
        </div>
    )
}
