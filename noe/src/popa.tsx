import { useEffect, useState } from "react"
import loading_gif from "./assets/middle-click-black-man.gif"
import ProductCard from "./ProductCard"
interface List {
    id:string
    title:string
    price:string
}

export default function DL(){
    let itemsARR = [{id: "JEWISH", title: "ISRAEL", price:"NUMBER ONE"} ]
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
