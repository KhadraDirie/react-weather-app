import React from 'react'
import './displayweather.css'





function DisplayWeather(props) {
   
   // takes in a single prop and uses destructing to extract the data property from it.
    const {data} = props;
    const iconUrl = "http://openweathermap.org/img/wn/" +  `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png"

  return (

    <div className="displayweather">
      {data.cod != 404 ? (
      <div>

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
        </div>
        
        <div className='weatherdetails'>
          <div className='section1'>
                <table>
                    <tr>
                      <td>
                        <h4>High/Low</h4>
                    </td>
                    <td>
                      <span>
                      {Math.floor(data.main.temp_max -276.44)}/{" "} 
                      {Math.floor(data.main.temp_min -276.44)} <sup>o</sup>C
                        </span>  
                    </td>
                    </tr>
                    <tr>
                      <td>
                        <h4>Humidity</h4>
                    </td>
                    <td>
                      <span>
                      {data.main.humidity}
                        </span>  
                    </td>
                    </tr>
                    <tr>

                      <td>
                        <h4>Pressure</h4>
                    </td>
                    <td>
                      <span>
                        {data.main.pressure} hPa
                      </span>             
                    </td>             
                    </tr>

                    <tr>
                      <td>
                        <h4>Visibility</h4>
                    </td>
                    <td>
                      <span>
                      {data.visibility / 1000} Km
                        </span>  
                    </td>
                    </tr>
                </table>
            </div>

            <div className="section2">
            <table>
                  
                    <tr>
                    <td>
                        <h4>Wind</h4>
                    </td>
                    <td>
                      <span>
                      {Math.floor((data.wind.speed*18) / 5)} Km/hr
                        </span>  
                    </td>
                    </tr>
                    <tr>

                      <td>
                        <h4>Wind Direction</h4>
                    </td>
                    <td>
                      <span>
                      {data.main.humidity}
                        </span>  
                    </td>
                    </tr>
                    <tr>

                      <td>
                        <h4>Sunrise</h4>
                        
                    </td>
                    <td>
                      <span>
                        {new Date (data.sys.sunrise * 1000).toLocaleTimeString()} AM
                      </span>             
                    </td>             
                    </tr>

                    <tr>
                      <td>
                        <h4>Sunset</h4>
                    </td>
                    <td>
                      <span>
                      {new Date (data.sys.sunset * 1000).toLocaleTimeString()} PM
                        </span>  
                    </td>
                    </tr>
                </table>
            </div>
            </div>
            </div>
            

        
       ): (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  
    
  )
}

      
export default DisplayWeather
