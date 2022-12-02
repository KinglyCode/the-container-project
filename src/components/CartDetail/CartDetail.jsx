import CartItem from "../CartItem/CartItem";
import "./CartDetail.css"

export default function CartDetail({ order, handleChangeQty, handleRemoveItem }) {
    if (!order) return null

    const cartItems = order.cartItems.map(item => 
        <CartItem
            cartItem={item}
            isPaid={order.isPaid}
            key={item._id}
            handleChangeQty={handleChangeQty}
            handleRemoveItem={handleRemoveItem}
        />
    )
    console.log("Order", order)
    return (
    <>
    <div className="cart-detail">
       <div className="section-area">
        {order.isPaid ?
          <span>Your Order<span>{order.orderId}</span></span>
          :
          <span></span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
    </div> 
    <div>
        {cartItems.length ? 
            <>
                {cartItems}
                <section>
                    {order.isPaid ?
                        <span>Total&nbsp;&nbsp;</span>
                        :
                        <button onClick={() => alert('clicked')} disabled={!cartItems.length}>Pay Now</button>
                    }
                    <span>{order.totalQty}</span>
                    <span>${order.orderTotal.toFixed(2)}</span>
                </section>
            </>
            :
            <div>Select your items for purchase</div>
        }
      </div>
    </div>
</>    
    )
}