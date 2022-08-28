import React, { useEffect, useState } from 'react'

const Offer = () => {
  const[sec, setSec] = useState();
  const[min, setMin] = useState();
  const[hours, setHours] = useState();

  
  
useEffect(()=>{
  setInterval(()=>{const d = new Date()
    const sec1 = d.getSeconds();
    setSec(sec1);
    setMin(d.getMinutes());
    setHours(d.getHours());
  },1000)
 
})
  return (
    <div class = "bg-sky-800 text-yellow-50 w-full">
      <h1 class="sm:text-center pl-2 relative">Today Offer<span class="bg-red-600 absolute right-2 px-2 py-0 md:py-2 rounded-lg">Offer Ends in {`${24-hours}:${60-min}:${60-sec}`}</span></h1>
     <div class = " w-11/12  text-yellow-100 text-center">
     10% off on all clothes products by paying axis bank 🥳. </div>  
    </div>
  )
}

export default Offer