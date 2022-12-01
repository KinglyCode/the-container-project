import { useEffect, useState } from "react"
import * as ordersAPI from "../../utilities/orders-api"
import CartDetail from "../../components/CartDetail/CartDetail"

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

    //  /*--- Event Handlers ---*/

    //  async function handleAddToCart(itemId) {
    //     const updateCart = await ordersAPI.addItemToCart(`${itemId}`)
    //     setCart(updateCart)
    //  }


    return (
        <>
        <h1>Your Cart</h1>
        <CartDetail order={cart} />
        </>
    )
}