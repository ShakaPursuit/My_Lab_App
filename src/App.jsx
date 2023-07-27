import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
        <h1>Bicycles!</h1>
        <h2>The best bike shop in town<span>!</span></h2>
      
      <main>
        <section><h3>Road Bikes</h3></section>
        <section><h3>Dirt Bikes</h3></section>
        <section><h3>Electric Bikes</h3></section>
      </main>
      
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis
        </p>
        <p>
          harum dolore sunt, quis velit accusantium pariatur! Illo, sed nam
          similique pariatur voluptate doloremque iusto vero quod itaque
        </p>
        <p>eligendi</p>
        <p>deleniti?</p>
      
        </div>
        
    
  )
}

export default App
