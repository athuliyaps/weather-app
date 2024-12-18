import React from 'react'
import useFetch from './useFetch'


const  Palakad =() => {
      
  const Details =  useFetch("https://api.openweathermap.org/data/2.5/weather?q=PALAKKAD&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric&authuser=0")
   console.log(Details);
   
  return (
  
    <div className='d-flex justify-content-center align-items-center bg-secondary ' id='background'>
    <div className='shadow-lg bg-body-tertiary w-50 rounded ' id='bg'>
    <h1 className='text-center text-success-emphasis'> Today's Weather Forecast</h1>
    <div className='d-flex justify-content-center align-items-center'>
      <input className='shadow p-1 ' type="text"   placeholder='Palakkad'/>
      <button className='ms-3 bg-success text-white shadow '>search</button>
    </div>
       
      
        
        { Details && (

        <div>
           <div className='text-center'>
            <h1 className='fw-bolder fs-3 mt-5 mb-3  text-danger-emphasis'>
              {Details.name}</h1>  
            <p className='fw-bolder  fs-4'>  <i className="fas fa-temperature-high p-2"></i>
             Temperature :<span className='text-danger-emphasis'>
              {Details.main.temp}°C</span> </p>
            <p className='fw-bolder  fs-4'>
            <i class="fa-solid fa-cloud p-2"></i>
              Weather :<span className='text-danger-emphasis'>{Details.weather[0].main}</span></p>
            <p className='fw-bolder  fs-4'>
              <i className='fas fa-tint p-2'></i>
              Humidity:<span className='text-danger-emphasis'>
              {Details.main.humidity}%</span></p>
           </div>
           <div className='text-center d-flex justify-content-center align-items-center  p-5'>
            <div className=' ' id='sunrise'><span className='text-warning fw-bolder fs-4 mb-5 '>
              Sunrise </span><br></br> <span className='fw-bolder fs-3 text-warning-emphasis'>{new Date(Details.sys.sunrise * 1000).toLocaleTimeString()}</span></div>
            <div className=' ms-5 ' id='sunset'><span className='text-warning fw-bolder fs-3'>
              Sunset
              </span ><br>
            </br><span className='fw-bolder fs-3 text-warning-emphasis'>{new Date(Details.sys.sunset * 1000).toLocaleTimeString()}</span></div>
           </div>
        </div>


      
   )}
   </div>
   </div>
  );
  };
    



export default Palakad