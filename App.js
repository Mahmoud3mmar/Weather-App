const request = require("postman-request")
const fs = require('fs');



const url = 'http://api.weatherstack.com/current?access_key=1ce8a0b5e1f91866a138bab7eb732a61&query=37.8267,-122.4233&units=f'


request({url:url , json:true},(error,response)=>{

//     const RawData= response
//     const JsonData = JSON.parse(RawData.body)
//    // console.log(JsonData)
//     const BufferData= JSON.stringify(JsonData)
//     fs.writeFileSync('WeatherData.Json',BufferData)
    
    console.log("the temp. is  "+ response.body.current.temperature+"  degree out  " +" but it feels like  "+response.body.current.feelslike+"  degree out  ")

})
