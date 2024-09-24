
import React from 'react';
//To Do: que se actualice el tiempo
import { useState, useEffect } from 'react';


export const DigitalClock = () => {

  const[time, useTime] = useState(new Date().toLocaleTimeString())// this is the state

  const updateTime = () => {
    setInterval(() => useTime(new Date().toLocaleTimeString()),1000)
    
  }
  
  //Para ejectuar solo cuando se monta por que si solo se manda a llamar updateTime se va a quedar colgando cada vez
  useEffect(()=>{
    const id:any = updateTime()// no es recomendable usar any, pero para el ejercicio lo dejamos en any, podemos usar window.setInterval y poner una variable para asignarle y usarla (no asignarla aquí solo llamar updateTime)
    return () => {clearInterval(id)}
  },[])
  
  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{time}</h2>
    </div>
  );
};
