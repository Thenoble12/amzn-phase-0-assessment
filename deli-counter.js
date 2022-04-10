// 1. Write your functions here


// 2. Example Usage

 const katzDeli = []

 function takeANumber(arr, customer) {
     arr.push(customer);
     console.log(`Welcome, ${customer}. You are number ${katzDeli.length} in line`)
 }

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"
function line(arr) {
    console.log("TEST: " + arr)
    output = ''
    if (arr.length){
        for (let i=0; i < arr.length; i++){    
            output += `${i+1}. ${arr[i]} `
            //console.log("TEST: " + output)
        }        
    }
    else{
        console.log(output = "Empty!")
    }
    console.log(`The line is currently: ${output}`)
}

function nowServing(katzDeli) {
    let current = katzDeli.shift()
    console.log(`Currently serving ${current}.`)
}

takeANumber(katzDeli, "Ada")
takeANumber(katzDeli, "Grace")
takeANumber(katzDeli, "Kent")

line(katzDeli)

nowServing(katzDeli)

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"