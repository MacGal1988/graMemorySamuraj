const cardsColor = ['red', 'red', 'green', 'green', 'blue', 'blue', 'brown', 'brown', 'yellow', 'yellow', 'gray', 'gray', 'cadetblue', 'cadetblue', 'violet', 'violet', 'lightgreen', 'lightgreen'];


let cards = document.querySelectorAll('div');
cards = [...cards];

const clickCard = function(){
console.log('klik');
}

const init = function(){
    cards.forEach(function(card){
        const position = Math.floor(Math.random() * cardsColor.length);
        card.classList.add(cardsColor[position]);
        cardsColor.splice(position, 1);
    })

    setTimeout(function(){
        cards.forEach(function(card){
            card.classList.add('hidden');
            card.addEventListener('click', clickCard);
        })
    }, 2000);

}



init();