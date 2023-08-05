import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(15);

    return (


    <>
    
        <h3>Counter With Custom Hook: {counter} </h3>
        <hr />
        <button onClick={()=>increment(2)}>+1</button>
        <button onClick={()=>decrement(2)}>-1</button>
        <button onClick={reset}>Reset</button>

    </>
  )
}
