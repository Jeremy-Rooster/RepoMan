// document.getElementById("count-el").innerText = 5
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)
// cmd+k+c

// let myAge = 47
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let originalPoints = 50
// console.log(originalPoints)
// let doubleTimes = originalPoints *2
// console.log(doubleTimes)
// let nextStep = doubleTimes /4
// console.log(nextStep)
// let bonusPoints = nextStep + 45
// console.log(bonusPoints)

// function increment () {
//     console.log("the button was clicked")
// }

// function countdown () {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()
// countdown()

// function fortyTwo() {
//     let numberOne = 6
//     let numberTwo = 7
//  console.log(numberOne * numberTwo)
// }
// fortyTwo()

//     let lap1 = 34
//     let lap2 = 33
//     let lap3 = 36
// function allLapTimes () {
//     console.log(lap1 +lap2 +lap3) 
// }
// allLapTimes()

// let lapsCompleted = 0

// function plusOne() {
// lapsCompleted = lapsCompleted + 1
// }
// plusOne()
// plusOne()
// plusOne()

// console.log(lapsCompleted)

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment () {
count += 1
countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
 }
 


// let username = "Jeremy"
// let message = "You have three new notifications"

// let messageToUser = username + ", " + message + "!"
// console.log(messageToUser)


// let username = "Jeremy"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + username + "!"
// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")
// let username = "Jeremy"
// let greeting = "Welcome back "
// welcomeEl.innerText = greeting + username
// welcomeEl.innerText += " 👋"
 