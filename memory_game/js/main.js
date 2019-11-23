var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; 

var checkForMatch = function() {
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]){
            alert("you've found a match!");
        } else {
            alert("sorry, try again");
        }
    }
}

var flipCard = function(cardID) {
    console.log("User flipped", cards[cardID]);
    cardsInPlay.push(cards[cardID]);
    checkForMatch();
}

flipCard(0);
flipCard(1);


