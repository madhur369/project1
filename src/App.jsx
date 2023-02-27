import './App.css'
import {useState} from 'react'
function App() {
 const [name , setName] = useState('')
function handelChange(e){
  setName(e.target.value)
}
  return (
    <div className="App">
      <div className='container'>
        <h1>{name}</h1>
      
        <input type="text" value={name} onChange={handelChange} />
        
       
      </div>
    </div>
  )
}

export default App
