
let player = {
    name:"per",
    chips: 1
}
 

let cards = []    // array
let sum = 0; 
let hasBlackjack = false;
let isAlive = false;  
let message = ""
let messageEl = document.getElementById("message-el")

// let sumEl = document.getElementById("sum-el");
// instead of using getelementbyid we use queryselector and with id put # to identify it is id . 
let sumEl = document.querySelector("#sum-el");

let cardEl = document.querySelector("#card-el")

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips



//math.floor-->removing the decimal part-->0 to 12.  math.random*13--> gaining the random no from 0.000-- to 12.999-- and (+1)--> gaining the no btw 1 to 13 by adding 1..like 4+1 gaining 5..and we know card have 1 to 13 no..
function getRandomCard() {
    let RandomNumber = Math.floor(Math.random() * 13) + 1;

    if (RandomNumber > 10) {
        return 10
    } else if (RandomNumber == 1) {
        return 11
    } else {
        return RandomNumber
    }

}


function startgame() {
    isAlive = true;
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    Rendergame();
}

function Rendergame() {

   
    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum


    if (sum <= 20) {
        message = "Do you want to draw a new card? "

    } else if (sum == 21) {
        message = "wohoo! you're got Blackjack!"
        hasBlackjack = true;
    } else {
        message = "you're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newcard() {
    if (isAlive === true && hasBlackjack === false) {

        let card = getRandomCard();
        sum += card;
        cards.push(card)
        Rendergame();
    }

}

