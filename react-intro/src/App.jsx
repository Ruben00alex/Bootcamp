import { useState } from 'react'
function App() {
  const [isFullstack, setIsFullstack] = useState(false)// useState is a hook used to manage state in a functional component, we need a state variable to hold the value of the checkbox, and a function to update the state variable because we can't directly update the state variable, because it's a function component, not a class component
  return (
    <div >
      {isFullstack ? <h1>Fullstack</h1> : <h1>Not Fullstack</h1>}
      <button onClick={() => setIsFullstack(!isFullstack)}>snuggle</button>
    </div>
  )
}

export default App
