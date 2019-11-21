let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = []; 
cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped", cardOne);
cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped", cardTwo);
if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]){
        alert("you've found a match!");
    } else {
        alert("sorry, try again");
    }
}
