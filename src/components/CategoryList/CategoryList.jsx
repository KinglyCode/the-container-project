export default function CategoryList({ categories, onCat, setOnCat }) {
    const allCat = categories.map(cat => 
        <div
        key={cat}
        className={cat === onCat ? 'on' : ''}
        onClick={() => setOnCat(cat)}>
            {cat}
        </div>
        )
    return(
        <div>{allCat}</div>
        
    )
}