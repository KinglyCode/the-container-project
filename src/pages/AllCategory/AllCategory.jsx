// import { useState, useRef, useEffect } from "react"
// import CategoryList from "../../components/CategoryList/CategoryList"
// import AllCategories from "../../components/AllCategories/AllCategories"
// import * as itemsAPI from "../../utilities/items-api"
// import * as ordersAPI from "../../utilities/orders-api"

export default function AllCategory() {

    return(
        <h1>Area still a work in progress. Please pardon our dust!</h1>
    )
    // const [onCat, setOnCat] = useState('')
    // const [items, setItems] = useState([])
    // const [cart, setCart] = useState(null)

    // const catRef = useRef([])

    // useEffect(function() {
    //     async function getItems() {
    //         const items = await itemsAPI.getAll()
    //         catRef.current = items.reduce((cats, item) => {
    //             const cat = item.category.name
    //             return cats.includes(cat) ? cats : [...cats, cat]
    //         }, [])
    //         setItems(items)
    //         setOnCat(items[0].category.name)
    //     }
    //     getItems()
    // })

    // async function handleAddToCart(itemId) {
    //     const updateCart = await ordersAPI.addItemToCart(`${itemId}`)
    //     setCart(updateCart)
    //  }

    // return(
    //     <>
    //         <h1>List of All Categories</h1>
    //         <CategoryList 
    //         allCat={catRef.current}
    //         onCat={onCat}
    //         setOnCat={setOnCat}/>
    //         <AllCategories
    //             items={items.filter(item => item.category.name === onCat)} 
    //             handleAddToCart={handleAddToCart}
    //         />

    //     </>
    // )
}