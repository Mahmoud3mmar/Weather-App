const request = require("postman-request")
const fs = require('fs');



const url = 'http://api.weatherstack.com/current?access_key=1ce8a0b5e1f91866a138bab7eb732a61&query=37.8267,-122.4233&units=f'


request({url:url , json:true},(error,response)=>{

//     const RawData= response
//     const JsonData = JSON.parse(RawData.body)
//    // console.log(JsonData)
//     const BufferData= JSON.stringify(JsonData)
//     fs.writeFileSync('WeatherData.Json',BufferData)
    
    console.log(response.body.current.weather_descriptions[0]+ " .the temp. is  "+ response.body.current.temperature+"  degree out  " +" but it feels like  "+response.body.current.feelslike+"  degree out  ")

})



const GeoUrl='http://api.positionstack.com/v1/forward?access_key=950cf51aa05520dd8fa6fa83a127c7dc&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC'


request({url :GeoUrl,json:true},(error,response)=>{

console.log(response.body.data[0].latitude)
console.log(response.body.data[0].longitude)


})