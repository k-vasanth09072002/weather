import './App.css';
import Axios from "axios"
import React, { useState } from 'react';

const KEY= '735d8c73a8dc57bc18f4b9bf0b4fb1c1'


function App() {

const [city,setCity]=useState("")
const [data,setData]=useState()


  const fatchData = async()=>{
    try{
      const response=await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
      setData(response.data);
    }
    catch(err){
      alert("Plese Enter The City Name ")
    }
  }
  return (
    <div className="App">
          <h1 className="title">weather-app</h1>
          <div className="input-container">
              <input 
                type="text"
                className="input"
                value={city}
                onChange={e =>setCity(e.target.value)}
                placeholder="enter the city name"
              />
                <button  className="button" onClick={fatchData}>fatch</button>
          </div>
          <div>
            {data &&(
              <div className='container'>
                <h1 className='city-name'> {data.name},{data.sys.country}</h1>
                <div className='weather-info'>
                    <div className='temp'>{Math.round(data.main.temp)} C</div> 
                    <div className='coordinater'>
                        <div>Lat  - {data.coord.lat}</div>  
                        <div>Lon  - {data.coord.lon}</div>  
                      
                    </div> 
                </div>               

              </div>
            )}
          </div>
      
    </div>
  );
}

export default App;
