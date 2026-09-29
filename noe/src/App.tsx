import { useState } from "react"
import Timer from "./Stopwatch"
import DL from "./popa"
import './App.css'
function App() {
  const [isLoading, setIsLoading] = useState(true)
setTimeout(() => {
  setIsLoading(false)
}, 5000);
if (isLoading) return <Timer/>
  return (
<>
<DL/>
</>
  )
}

export default App
