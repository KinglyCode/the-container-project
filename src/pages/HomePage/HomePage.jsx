import * as itemsAPI from '../../utilities/items-api'
import { useEffect, useState } from 'react'
import './HomePage.css'
import ShoppingCartPage from '../ShoppingCartPage/ShoppingCartPage'


export default function HomePage() {
    const [items, setItems] = useState([])

    useEffect(function() {
        async function getItems() {
            const items = await itemsAPI.getAll()
            setItems(items)
            console.log(items)
        }
        getItems()
    }, [])

    return(
        <>
        <h1>Featured Items</h1>
        {items.map(item => {
            return(
                <>
                    <h3>Box Sets:</h3>
                    <div className='name' key={item._id}>{item.name}</div>
                    <img className='img' src={item.img}></img>
                    <div className='price'>{item.price}</div>
                    <button className="btn-sm" onClick={() => console.log('clicked')}>Add To Cart</button>
                    
                </>
            )
        })}
        </>
    )
    
}