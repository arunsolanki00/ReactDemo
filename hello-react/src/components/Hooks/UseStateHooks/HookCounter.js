import React,{useState} from 'react'

function HookCounter() {
    const initialCount = 0
    const[count,setCount] = useState(0)

    const incrementCounter = () => {
        for(let i=0; i<5; i++)
        {
            setCount(prevCount =>prevCount + 1)
        }
    }

    return (
        <div>
            <button onClick={()=> setCount(initialCount)}> Reset </button>
            <button onClick={()=> setCount(count + 1)}> Count {count} </button>
            <button onClick={()=> setCount(prevCount => prevCount + 1)}> Increment </button>
            <button onClick={()=> setCount(prevCount => prevCount - 1)}> Decrement + 1 </button>

            <button onClick={incrementCounter} > Increment 5 </button>
            <div> {count} </div>
        </div>
    )
}

export default HookCounter
