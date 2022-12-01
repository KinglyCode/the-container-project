import FeaturedItems from "../FeaturedItems/FeaturedItems";

export default function FeaturedItemList({ items, handleAddToCart }) {
    const displayedItems = items.map(item => {
    return(
        <FeaturedItems
          key={item._id}
          item={item}
          handleAddToCart={handleAddToCart}
          />
    )})

    return (
        <main>
            {displayedItems}
        </main>
    )
}