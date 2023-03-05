const request = require("postman-request")
const fs = require('fs');
const GeoCode = require('./utlis');
const forcast = require('./utlis');



// const url = 'http://api.weatherstack.com/current?access_key=1ce8a0b5e1f91866a138bab7eb732a61&query=37.8267,-122&units=f'


// request({url:url , json:true},(error,response)=>{


    
// if (error) {
//     //low level error handling
//     console.log("unable to connect to the Weather Stack service")


// }else if(response.body.error){


//     console.log("Unable to find location")


// } else {

    //     const RawData= response
    //     const JsonData = JSON.parse(RawData.body)
    //    // console.log(JsonData)
    //     const BufferData= JSON.stringify(JsonData)
    //     fs.writeFileSync('WeatherData.Json',BufferData)
//     console.log(response.body.current.weather_descriptions[0]+ " .the temp. is  "+ response.body.current.temperature+"  degree out  " +" but it feels like  "+response.body.current.feelslike+"  degree out  ")

// }

// })





forcast(37.8267,-120,(error,data)=>{

    console.log('error',error)
    console.log('data',data)
})



// const GeoUrl='http://api.positionstack.com/v1/forward?access_key=950cf51aa05520dd8fa6fa83a127c7dc&query=1600%255Pennsylvania%20Ave%20NW,%20Washingtons%20DC'


// request({url :GeoUrl,json:true},(error,response)=>{



//     if(error){
//             //low level error handling
//         console.log('unable to connet to the GeoCoding Service')

//     }else if(response.body.data[0].length===0){
//         console.log("unable to find location , try another search ")




//         console.log("unable to find the location")



//     }else{

//         const latitude = response.body.data[0].latitude
//         const longitude = response.body.data[0].longitude

//         console.log(latitude)
//         console.log(longitude)
//     }









GeoCode('NewYork',(error,data)=>{

    console.log('error',error)
    console.log('data',data)

})
