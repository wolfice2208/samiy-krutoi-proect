import { useEffect, useState } from "react"
import loading_gif from "./assets/middle-click-black-man.gif"
import ProductCard from "./ProductCard"

interface List {
    id:number
    title:string
    price:number
}

export default function DL(){
    let itemsARR = [{id: 1, title: "CHMO1", price:9999},{id: 2, title: "CHMO333", price:1119},{id: 3, title: "CHMO213", price:991239} ]
    const [items, setItems] = useState<List[]>([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setItems(itemsARR)
        }, 1000
    )
    },[]
);
if (isLoading) return <img src={loading_gif} alt="" />

return <div className="card">
    {items.map(item => <ProductCard key={item.id} title={item.title} price={item.price} inStock={true}/>)}
</div>
}
