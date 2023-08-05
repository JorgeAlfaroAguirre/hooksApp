import { useState } from "react"

export const CounterApp = () => {
    const initialValue = 0;
    const limit = ()=>{
        if(Counter === 0){
            setCounter(0)
        }else{
            setCounter(Counter -1)
        }
    }
    const [Counter, setCounter] = useState(initialValue)
  return (
    <>
    
        <h3>Counter: {Counter}</h3>
        <hr />
        <button onClick={()=>{setCounter(Counter+1)}}>+1</button>
        <button onClick={()=>{limit()}}>-1</button>
        <button onClick={()=>{setCounter(initialValue)}}>Reset</button>

    </>
  )
}
