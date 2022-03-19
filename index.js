// Code your solutions in this file


/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy bithday to me!`)
    
}*/



/*const gifts = ["teddy bear", "drone", "dolls"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        debugger
    }
    return gifts
}

wrapGifts(gifts)*/

const guest= ['Dearra', 'Curtis', 'Taraji', 'Elon']

function writeCards(guest, event = 'Launch Party') {
     let greeting = []
    for (let j = 0; j <guest.length; j++)  {
        let newCard = `Thank you, ${guest[j]}, for the wonderful ${event} gift!`
        greeting.push(newCard)
    }
    return greeting
}


/*const gifts = ["teddy bear", "drone", "dolls"]

function wrapGifts(gifts){
let i = 0
while (i < gifts.length){
    console.log(`Wrapped ${gifts[i]} and added a bow!`)
    i++
    }
return gifts
}*/


function countDown() {
let countDown = 10
while (countDown >= 0){
    console.log(countDown--)
     }
}