// Code your solutions in this file
const cards= ["Guadalupe", "Ollie","Aki"];
function writeCards(cards) {
    let newArray=[];
    for (let i = 0; i < cards.length; i++) {
        newArray.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return newArray;
}

function countDown() {
    let i =10;
    while(i >= 0) {
        console.log(i--);
    }
}

