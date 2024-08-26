import React from 'react'
import "./weather.css"

function LeftSide({fetchWeather , setCity , city}) {
  return (
             <div className=" mar-left white">

             <div className={city == 'Delhi' ?  "city-box-selected "  :  "city-box white"} onClick={() =>  {
             
              setCity('Delhi')
              fetchWeather("Delhi")
             }}>
               <p>Delhi</p>
             </div>
             <div className={city == 'Mumbai' ?  "city-box-selected "  :  "city-box white"} onClick={() =>  {
             
             setCity('Mumbai')
             fetchWeather("Mumbai")
            }}>
               <p>Mumbai</p>
             </div>
             <div className={city == 'Chennai' ?  "city-box-selected "  :  "city-box white"} onClick={() =>  {
             
             setCity('Chennai')
             fetchWeather("Chennai")
            }}>
               <p>Chennai</p>
             </div>
             <div className={city == 'Kolkata' ?  "city-box-selected "  :  "city-box white"} onClick={() =>  {
             
             setCity('Kolkata')
             fetchWeather("Kolkata")
            }}>
               <p>Kolkata</p>
             </div>
            
             <div className={city == 'Noida' ?  "city-box-selected "  :  "city-box white"} onClick={() =>  {
             
             setCity('Noida')
             fetchWeather("Noida")
            }}>
               <p>Noida</p>
             </div>
             <div className={city == 'Gurgaon' ?  "city-box-selected "  :  "city-box white"} onClick={() =>  {
             
             setCity('Gurgaon')
             fetchWeather("Gurgaon")
            }}>
               <p>Gurgaon</p>
             </div>
             <div className={city == 'Faridabad' ?  "city-box-selected "  :  "city-box white"} onClick={() =>  {
             
             setCity('Faridabad')
             fetchWeather("Faridabad")
            }}>
               <p>Faridabad</p>
             </div>
   
            </div>
  )
}

export default LeftSide
