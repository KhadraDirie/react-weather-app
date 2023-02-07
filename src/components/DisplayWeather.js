import React from 'react'
import './displayweather.css'





function DisplayWeather(props) {
   
   // takes in a single prop and uses destructing to extract the data property from it.
    const {data} = props;
    const iconUrl = "http://openweathermap.org/img/wn/" + `${data.weather[0].icon}`+ ".png"

  return (

    <div className='displayweather'>
      <div className='maincard'>
        <span className='cardtitle'>
            {data.name},{data.sys.country}. Weather
        </span>
        <span className='cardsubtitle'>
            As of {new Date().toLocaleTimeString()}
        </span>
        <h1>{Math.floor(data.main.temp -276.44)}
        <sup>o</sup>   
        </h1>
        <span className='weather-main'> {data.weather[0].main}</span>
        <img src={iconUrl} className= "weather-icon" alt='' />
        <span className='weather-description'>{data.weather[0].description}</span>
        <div className='weatherdetails'>
            <div className='section1'>
                <table>
                    <td>
                        <h4>High/Low</h4>
                    </td>
                    <td>
                      <span>
                      {Math.floor(data.main.temp -276.44)}
                        </span>  
                    </td>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayWeather
