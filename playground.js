
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add =(firstnumber, secondnumber,callback)=>{

    
    setTimeout(()=>{
        sum = firstnumber+secondnumber



        callback(firstnumber+secondnumber)
    },2000)

}

add(1, 4, (Sum) => {
    console.log(Sum) // Should print: 5
})
console.log('hello')
