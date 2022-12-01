import "./FeaturedItems.css"

export default function FeaturedItems({ item, handleAddToCart }) {
    return (
        <div>
            <div>{item.name}</div>
            <div className="img-container">
            <img  className="img" src={item.img} />
            </div>
              <span>${item.price.toFixed(2)}</span>
              <button className="btn-sm" onClick={() => handleAddToCart(item._id)}>Add To Cart</button>
        </div>
        
    )
}