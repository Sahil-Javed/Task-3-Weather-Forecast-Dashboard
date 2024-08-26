import React from 'react'
import "./weather.css"

function RightSide({forcastData}) {
  return (
    <div className='white mar-right  right-side'>

      {forcastData && forcastData.map((item) => {
return(

       <div className='box-div'>
         <div className='date-div'>
             <p>{item?.dt_txt}</p>
         </div>
         <div className='normal-box'>
         Temprature: {item?.main?.temp}°F
         </div>
         <div className='normal-box'>
         Humidity: {item?.main?.humidity}%
         </div>
         <div className='normal-box capitalize'>
         Conditions: {item?.weather[0]?.description}
         </div>
       </div>
)

      })}
       {/* <div className='box-div'>
         <div className='date-div'>
             <p>23-08-24</p>
         </div>
         <div className='normal-box'>
         Conditions: broken clouds
         </div>
         <div className='normal-box'>
         Conditions: broken clouds
         </div>
         <div className='normal-box'>
         Conditions: broken clouds
         </div>
       </div>
       <div className='box-div'>
         <div className='date-div'>
             <p>23-08-24</p>
         </div>
         <div className='normal-box'>
         Conditions: broken clouds
         </div>
         <div className='normal-box'>
         Conditions: broken clouds
         </div>
         <div className='normal-box'>
         Conditions: broken clouds
         </div>
       </div> */}
       {/* <div className='box-div'>
         <div className='date-div'>
             <p>23-08-24</p>
         </div>
         <div className='normal-box'>
         Conditions: broken clouds
         </div>
         <div className='normal-box'>
         Conditions: broken clouds
         </div>
         <div className='normal-box'>
         Conditions: broken clouds
         </div>
       </div> */}
       {/* <div className='box-div'>
         <div className='date-div'>
             <p>23-08-24</p>
         </div>
         <div className='normal-box'>
         Conditions: broken clouds
         </div>
         <div className='normal-box'>
         Conditions: broken clouds
         </div>
         <div className='normal-box'>
         Conditions: broken clouds
         </div>
       </div> */}
    </div>
  )
}

export default RightSide
