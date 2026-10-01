import { useState } from "react"
import UserProfile from "./Stopwatch"
import DL from "./popa"
import Fall from "./FallsNigga"

import './App.css'
function App() {
  const [isLoading, setIsLoading] = useState(true)
setTimeout(() => {
  setIsLoading(false)
}, 5000);

  return (
<>

<UserProfile userId={0}/>
<DL/>
<Fall/>
</>
  )
}

export default App
