document.addEventListener("DOMContentLoaded", () => {
  let temp, loc, icon, lat, lon, zipCode, apiKey, feelsLike;
  
  // zipCode = '90210'
  // zipCode = '25314'
  // zipCode = '99504'
  zipCode = '59801'
  apiKey = '1348f83b111dc5421baf189222031f32'

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // lat = position.coords.latitude
      // lon = position.coords.longitude
      // Siberia, Russia:
      // lat = '61.0137'
      // lon = '99.1967'

      // New Zeeland:
      lat = '36.8483'
      lon = '174.7626'

      console.log('lat: ', lat)
      console.log('log: ', lon)
      
      // const apiZipCode = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`
      const apiLatLng = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      
      // fetch(apiZipCode)
      fetch(apiLatLng)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        temp = convertKelvinToFarenheit(data.main.temp)
        loc = data.name
        icon = matchIconToWeatherCode(data.weather[0].id)
        feels_like = convertKelvinToFarenheit(data.main.feels_like)
        lat = data.coord.lat
        lon = data.coord.lon
        climate = data.weather[0].main


        console.log('data: ', data)
        // debugger;

        const params = {
          temp: temp,
          loc: data.name,
          icon: icon,
          feelsLike: feels_like,
          lat: lat,
          lon: lon, 
          climate: climate
        }
        loadPage(params)
      }).catch(error => {
        console.log('error in fetch api: ', error)
      })
    })
  }
})

const loadPage = (params) => {
  // let temp, loc, icon, lat, lon, zipCode, apiKey;
  
  loc = document.getElementById('location')
  loc.innerText = params.loc
  
  icon = document.querySelector('img#temp-icon')
  icon.src = `/icons/${params.icon}`
  
  temp = document.getElementById('temp-value')
  temp.innerText = params.temp
  
  feelsLike = document.getElementById('feels-like')
  feelsLike.innerText += params.feelsLike
  
  latDiv = document.getElementById('lat')
  latDiv.innerText += ` ${params.lat}`
  
  lonDiv = document.getElementById('lon')
  lonDiv.innerText += ` ${params.lon}`
  
  climateDiv = document.getElementById('climate')
  climateDiv.innerText = ` ${params.climate}`
}

const convertKelvinToFarenheit = (temp) => {
  return Math.round((temp - 273.15) * 1.8 + 32)
}

const matchIconToWeatherCode = (code) => {
  // list of codes here:  https://openweathermap.org/weather-conditions
  if (code <= 250) {
    return 'thunder.svg'
  } else if (code <= 550) {
    return 'rainy-7.svg'
  } else if (code <= 650) {
    return 'snowy-6.svg'
  } else if (code === 800) {
    return 'day.svg'
  } else if (code > 800) {
    return 'cloudy-day-3.svg'
  }
}