import {useState, useEffect} from 'react'

const lifeCycleComponentHook = (props) =>{
    const [count, setCount]=useState(0)//se inicializa en 0 el count
    useEffect(()=>{
      const id = setInterval(() => {
            setCount(prevState => prevState + 1)
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [count]);//cunado se actualiza count se correo de nuevo
    
    return(
        <>
         <div>{count}</div>
        </>
    );
}