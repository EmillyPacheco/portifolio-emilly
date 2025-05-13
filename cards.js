export function createCards() {
    let section_cards = document.getElementById('cards');

    for(let i = 0; i < 16; i++){
        let div_card = document.createElement('div');
        div_card.className = 'card';

        section_cards.appendChild(div_card);
    }
}