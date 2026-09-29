import './App.css'
interface ProductProps {
    title:string
    price:number
    inStock:boolean
}
function ProductCard({title,price,inStock}:ProductProps) {
    return (
        <>
        <div className="opa">
            <p>{title}</p>
            <p>{price}</p>
            <p>{inStock}</p>
        </div>
        </>
    )
}

export default ProductCard;