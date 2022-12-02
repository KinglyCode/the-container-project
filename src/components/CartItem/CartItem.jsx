import "./CartItem.css"

export default function CartItem({ cartItem, isPaid, handleChangeQty, handleRemoveItem }) {
    return(
        <>
        <div>
            <img className="cart-img"src={cartItem.item.img} />
            <span className="cart-name">{cartItem.item.name}</span>
            <div className="cart-price">${cartItem.extPrice.toFixed(2)}</div>
            {/* <span>{cartItem.item.price.toFixed(2)}</span> */}
              
            
        </div>
        <div style={{ justifyContent: isPaid && 'center'}}>
            {!isPaid && 
                <button className="button-60"onClick={() => handleChangeQty(cartItem._id, cartItem.qty - 1)}>-</button>
            }
            <span>{cartItem.qty}</span>
            {!isPaid &&
                <button className="button-60" onClick={() => handleChangeQty(cartItem._id, cartItem.qty + 1)}>+</button>
            }
            <button className="button-9" onClick={() => handleRemoveItem(cartItem._id)}>Remove From Cart</button>
        </div>
        
        </>
    )
}