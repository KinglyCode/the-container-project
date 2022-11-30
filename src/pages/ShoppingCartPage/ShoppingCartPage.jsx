import { useEffect, useState } from "react"
import * as ordersAPI from "../../utilities/orders-api"

export default function ShoppingCartPage() {
    const [cart, setCart] = useState(null)

    useEffect(function() {
        async function getCart() {
            const cart = await ordersAPI.getCart()
            setCart(cart)
            console.log(cart)
        }
        getCart()
    }, [])
    

    return (
        <h1>Your Cart</h1>
    )
}