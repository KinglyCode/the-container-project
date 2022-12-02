import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
import { useEffect, useState } from 'react'
import './HomePage.css'
import FeaturedItemList from '../../components/FeaturedItemsList/FeaturedItemList'

export default function HomePage({ handleAddToCart }) {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState(null)

    useEffect(function() {
        async function getItems() {
            const items = await itemsAPI.getAll()
            setItems(items)
            console.log(items)
        }
        getItems()
    }, [])

    /*--- Event Handlers ---*/

    async function handleAddToCart(itemId) {
       const updateCart = await ordersAPI.addItemToCart(`${itemId}`)
       setCart(updateCart)
    }

    return(
        <>
            <header className="w3-container w3-xlarge">
                <p className="w3-center" id='featured'>Featured Items</p>
            </header>
            <FeaturedItemList items={items} handleAddToCart={handleAddToCart} />
        </>
        
    )
    
}