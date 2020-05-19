import React,{useState, useEffect} from 'react'

function HookMouse() {
    const [x,setX] = useState(0)
    const [y, setY] = useState(0)
    
    const listenMousePosition = e =>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', listenMousePosition)
    },[])

    return (
        <div>
            X - {x}  Y - {y}
        </div>
    )
}

export default HookMouse
