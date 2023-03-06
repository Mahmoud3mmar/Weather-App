
const request = require("postman-request")

const forcast=(latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=1ce8a0b5e1f91866a138bab7eb732a61&query='+latitude+','+longitude+'&units=f'
    request({url , json:true},(error,{body})=>{
        if (error) {
            //     //low level error handling
               callback("unable to connect to the Weather Stack service",undefined)
        }else if(body.error){


                callback("Unable to find location",undefined)
        }else{

        //     const RawData= response
        //     const JsonData = JSON.parse(RawData.body)
        //    // console.log(JsonData)
        //     const BufferData= JSON.stringify(JsonData)
        //     fs.writeFileSync('WeatherData.Json',BufferData)
            
              callback(undefined,body.current.weather_descriptions[0]+ " .the temp. is  "+body.current.temperature+"  degree out  " +" but it feels like  "+body.current.feelslike+"  degree out  ")

        }


    })
}



module.exports= forcast