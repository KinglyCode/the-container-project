import { useEffect, useState } from "react"
import * as ordersAPI from "../../utilities/orders-api"
import CartDetail from "../../components/CartDetail/CartDetail"
import "./ShoppingCartPage.css"

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

    async function handleChangeQty(itemId, newQty) {
        const updateCart = await ordersAPI.setItemQty(itemId, newQty)
        setCart(updateCart)
    }

    async function handleRemoveItem(itemId) {
        const updateCart = await ordersAPI.setRemoveItem(itemId)
        setCart(updateCart)
    }

    return (
        <>
        <div className="cart">
            <h1>Your Cart</h1>
            <CartDetail order={cart} handleChangeQty={handleChangeQty} handleRemoveItem={handleRemoveItem}/>
        </div>
        </>
    )
}