import React,{useState,useEffect} from 'react'

function UseEffectCounter() {
    const [count,setCounter]=useState(0)
    const [name,setName]=useState('')

    useEffect(()=>{
        document.title =`You clicked ${count} times`
        console.log('effect')
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCounter(count+1)}>Click {count}</button>
        </div>
    )
}

export default UseEffectCounter
