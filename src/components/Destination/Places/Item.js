import React, { Component } from 'react'
import item from'../../../css/Item.module.css';
import img from '../../../assets/black.png'
class Item extends Component {
    render() {
        return (
            <div className={item.item}>
                <div >
                    <img src={img} className={item.img} alt='img'/>
                </div>
                <div className={item.Details}>
                    <div className='PlaceName'>
                        {this.props.name}
                    </div>
                    <div className={item.cost}>
                        Starts at <b>${this.props.cost}</b>
                    </div>
                </div>
            </div>
        )
    }
}
export default Item;