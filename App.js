const request = require("postman-request")
const fs = require('fs');
const GeoCode = require('./utlis/GeoCode');
const forcast = require('./utlis/ForCast');



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












const locationinput = process.argv[2]


    if(!locationinput){
        console.log('please provide an address')
    }else{

        GeoCode(locationinput,(error,{latitude,longitude,Name})=>{
            
            if(error){
            return console.log(error)
            }
            
            

            forcast(latitude,longitude,(error,ForCastData)=>{


                if(error){
                    return console.log(error)
                }



                console.log(Name)
                console.log(ForCastData)
            })

        })
    }
