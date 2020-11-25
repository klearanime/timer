// version 0:
// console.log('\u0007');

// Vesion 1: 
// setTimeout(function(){
//     console.log("3 seconds has passed.")
//     console.log("\u0007")
// }, 3000)

// Version 2: 
const getInput = process.argv[2]
setTimeout(function(){
    console.log(getInput + ' seconds has passed.')
    console.log('\u0007')
}, getInput * 1000)

// Version 3:
// const getInput = process.argv.slice(2)
//     setTimeout(function(){ 
//         console.log(getInput + ' seconds has passed.')
//         console.log('\u0007')
//     }, getInput * 1000)
