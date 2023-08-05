import { useState } from "react"

export const MultiCounterApp = () => {

    const [state, setMultiCounter] = useState({
        counter1: 0,
        counter2: 10,
        counter3: 100,
    })

    const {counter1, counter2, counter3} = state;

  return (
    <>
        <h3>
            MultiCounterApp - Counter 1: {counter1} <br /> 
            MultiCounterApp - Counter 2: {counter2} <br />
            MultiCounterApp - Counter 3: {counter3} <br />
        </h3>

        <hr />

        <button onClick={()=>{setMultiCounter({
            ...state,
            counter1: counter1+1,
        })}}>
            +1
        </button>
    </>
  )
}
