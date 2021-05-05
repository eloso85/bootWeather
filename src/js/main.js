function geoFindMe() {

 

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude)
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413`)
    .then(response => response.json())
    .then(locData=>{
      console.log(locData)
      
      $(".default-city").html(`<p>${locData.name} <br/>  </p>`)
      $(".default-temp").html(`<p>${Math.round(locData.main.temp)}&#x2109;<p>`)
      

      $(".default-description").html(`<h6>Feels: ${locData.main.feels_like}</h6>`)
      $(".current-humidity").html(`<h6>humidity: ${locData.main.humidity}</h6>`)
      $(".current-feel").html(`<h6>Feels: ${locData.main.feels_like}</h6>`)
      $(".current-feel").html(`<h6>Feels: ${locData.main.feels_like}</h6>`)
      $(".logo").html(`<img src="http://openweathermap.org/img/wn/${locData.weather[0].icon}@2x.png">`)

    });
  }

  function error(){
    console.log('error');
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London,us&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413")
   .then(response => response.json())
   .then(today=>{
     console.log(today)
     $(".default-city").html(`<div>${today.name} </div>`);
     $(".default-temp").html(`<div>${Math.round(today.main.temp)}&#x2109</div>`);
     $(".default-description").html(`<div>${today.weather[0].description}</div>`);

   })
  }

  if(!navigator.geolocation) {
   
  
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

geoFindMe();



// async function defaulWeather(){
//  await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,us&units=imperial&APPID=166a433c57516f51dfab1f7edaed8413")
//    .then(response => response.json())
//    .then(today=>{
//      console.log(today)
//      $(".default-city").html(`<div>${today.name} </div>`);
//      $(".default-temp").html(`<div>${Math.round(today.main.temp)}&#x2109</div>`);
//      $(".default-description").html(`<div>${today.weather[0].description}</div>`);

//    })
//   };

//   defaulWeather();
