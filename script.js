// const API=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

const API_KEY = "cab4bb42c847cb3de494c80695638b4b"
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

// const IMG_URL=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const getweather = async (city) => {
     weather.innerHTML="<h2>loading</h2>"
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
     const response = await fetch(url)
     // console.log(response)
     const data = await response.json()
    return showweather(data)
}
const showweather = async (data) => {

     if(data.cod=='404'){
         
          return;
     }
     // console.log(data) weather.innerHTML="<h2>city not found</h2>"
     weather.innerHTML = `
     <div>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
     <h2>${data.main.temp}℃</h2>
     <h3>${data.weather[0].main}</h3>
</div>`
}

form.addEventListener(
     "submit",
     function (event) {
          getweather(search.value)
          
          event.preventDefault()
     }
)