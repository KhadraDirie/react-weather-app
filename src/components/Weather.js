import React, {useState} from 'react'
import DisplayWeather from '../components/DisplayWeather'
import "./weather.css"


function Weather(props) {
const APIKEY =  "f990eb328b8359342f7161fc85d9687d"


const [form,setForm] = useState({
    city: "",
    country: ""
})

const [weather,setWeather] = useState([])


//function which fetches weather data from API 

async function weatherData (e){
    e.preventDefault();
    if(form.city == ""){
        alert("Add values")
    } else {
        const data =  await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`)
        //returns a promise
        .then((res) => res.json())
        .then ((data)=> data);

        setWeather({
             data:data
        }
           
        );
    }
}

const handleChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    
    if(name== "city"){
        setForm({...form,city:value})
    }
    if(name== "country"){
        setForm({...form,country:value})
    }
   
}

  return (
    <div className='weather'>
      <span className='title'>Weather App</span>
      <br/>
      <form>
        <input type = "text" name = "city" placeholder='City' onChange={ (e) => handleChange(e)}/>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <input type = "text" name = "country" placeholder='Country' onChange={ (e) => handleChange(e)} />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          
          Submit</button>
      </form>
      
      
      {
        weather.data != undefined ? 
       <div>
        <DisplayWeather data = {weather.data} />
        </div>
        :null
      }
    
    </div>
  )
}

export default Weather
