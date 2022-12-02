import "./FeaturedItems.css"

export default function FeaturedItems({ item, handleAddToCart }) {
    return (
        <div className="feature-container">
            <div className="feature-float">
                <div className="name">{item.name}</div>
                    <div className="img-container">
                        <img  className="img" src={item.img} />
                    </div>
                        <span>${item.price.toFixed(2)}</span>
                    <button className="add-to-cart" onClick={() => handleAddToCart(item._id)}>Add To Cart</button>
              </div>
        </div>
        
    )
}