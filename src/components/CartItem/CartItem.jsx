export default function CartItem({ cartItem, isPaid }) {
    return(
        <>
        <div>
            <img src={cartItem.item.img} />
            <span>{cartItem.item.name}</span>
            <div>${cartItem.extPrice.toFixed(2)}</div>
            {/* <span>{cartItem.item.price.toFixed(2)}</span> */}
              
            
        </div>
        <div style={{ justifyContent: isPaid && 'center'}}>
            {!isPaid && 
                <button onClick={() => alert('clicked')}>-</button>
            }
            <span>{cartItem.qty}</span>
            {!isPaid &&
                <button onClick={() => alert('clicked')}>+</button>
            }
        </div>
        
        </>
    )
}