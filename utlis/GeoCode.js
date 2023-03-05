
const request = require("postman-request")




const GeoCode =(address,callback)=>{
    const GeoUrl ='http://api.positionstack.com/v1/forward?access_key=950cf51aa05520dd8fa6fa83a127c7dc&query=1600%255'+address+'%20Ave%20NW,%20Washingtons%20DC'

    request({url :GeoUrl,json:true},(error,response)=>{
       
       //low level error handling
        if(error){

            callback("unable to connet to the GeoCoding Service",undefined)

        }else if(response.body.data[0].length===0){

            callback("unable to find location , try another search ",undefined)

        }else{

            callback(undefined,{latitude : response.body.data[0].latitude,
                                longitude : response.body.data[0].longitude,
                                Name : response.body.data[0].country,
             })
        }

    })

}



module.exports=GeoCode