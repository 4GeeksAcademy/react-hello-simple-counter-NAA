import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Secondhand from './components/Secondhand';

let counter=0
const root = ReactDOM.createRoot(document.getElementById('root'));


setInterval(()=>{

  let slotOne=Math.floor((counter/1)%10)
  let slotTwo=Math.floor((counter/10)%10)
  let slotThree=Math.floor((counter/100)%10)
  let slotFour=Math.floor((counter/1000)%10)
  let slotFive=Math.floor((counter/10000)%10)
  let slotSix=Math.floor((counter/100000)%10)
  
  counter+=1

   root.render(
    <React.StrictMode>
      <Secondhand
        sixth={slotOne}
        fifth={slotTwo}
        fourth={slotThree}
        third={slotFour}
        second={slotFive}
        first={slotSix}
      />
    </React.StrictMode>
  )

}, 1000)
