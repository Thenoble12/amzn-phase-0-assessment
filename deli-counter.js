// 1. Write your functions here


// 2. Example Usage

 const katzDeli = []

 function takeANumber(arr, customer) {
     arr.push(customer);
     console.log(`Welcome, ${customer}. You are number ${katzDeli.length} in line`)
 }

function line(arr) {
    output = ''
    if (arr.length) {
        for (let i=0; i < arr.length; i++){    
            output += `${i+1}. ${arr[i]} `
        }        
    }
    else {
        output = "Empty!"
    }
    console.log(`The line is currently: ${output}`)
}

function nowServing(arr) {
    if (arr.length) {
        let current = arr.shift()
        console.log(`Currently serving ${current}.`)
        line(arr)
    }
    else {
        console.log("There is nobody waiting to be served!")
    }
}

line(katzDeli)
nowServing(katzDeli)

takeANumber(katzDeli, "Ada")
line(katzDeli)
takeANumber(katzDeli, "Grace")
line(katzDeli)
takeANumber(katzDeli, "Kent")
line(katzDeli)
nowServing(katzDeli)
nowServing(katzDeli)
nowServing(katzDeli)
nowServing(katzDeli)

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"