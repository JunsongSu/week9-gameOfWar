// create a class for card, with properties of suit, name and value
class Card{
    constructor(suit, name, value){
        this.suit = suit;
        this.name = name;
        this.value = value;
    }
}


class Deck{
    //create a deck class
    constructor() {
        this.cards = [];
        this.suits = ['Heart', 'Spade', 'Diamond', 'Club'];
        this.names = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        this.values = [14, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13];
    }

    //use two for loops to create a deck, each suit has 13 names
    createDeck(){
        for (let i = 0; i < this.suits.length; i++) {
            for (let n = 0; n < this.names.length; n++){
                this.cards.push(new Card(this.suits[i], this.names[n], this.values[n]))
            }
        }
        return this.cards
    }

    //shuffle cards 
    shuffleDeck(){
        const shuffledDeck = [];
        for (let i = 0; i <52; i++){
            let randomPoistion = Math.floor((this.cards.length - i)* Math.random());
            let randomItem = this.cards.splice(randomPoistion, 1);
            shuffledDeck.push(randomItem);
        }
        return shuffledDeck;
    }

    //this function deal same number 26 cards to each of the two players
    dealDeck(players, shuffledDeck) {
        let dealingCards1 = shuffledDeck.splice(0,26);
        for (let i = 0 ; i < dealingCards1.length; i++){
            players[0].hands.push(dealingCards1[i]);
        }

        let dealingCards2 = shuffledDeck.splice(0, 26);
        for (let i = 0 ; i < dealingCards2.length; i++){
            players[1].hands.push(dealingCards2[i]);
        }
    }

}

// create a class for players, including properties of name, points and how many cards in hands
class Players {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.hands = [];
    }
}

// create a menu
class Game{
    constructor(){
        this.players = [];
    }

    // to start user needs to enter names for both players and push these two players to an array
    start(){
        //create two new players and push them into players' array
        alert('Welcome to the Game of War')
        let player1 = prompt("Please enter first player's Name: ");
        let player2 = prompt("Please enter second player's Name: ")
        this.players.push(new Players(player1));
        this.players.push(new Players(player2));
        alert(`DECLARE WAR!! ${player1} ${player2}`);

        //create a new deck, shuffle the cards
        let myDeck = new Deck();
        myDeck.createDeck();
        let shuffledDeck = myDeck.shuffleDeck();

        //deal the shuffled cards to each of the two player
        myDeck.dealDeck(this.players, shuffledDeck);

        this.playGame();

        this.endGame();
    }

    playGame(){
       let player1 = this.players[0];
       let player2 = this.players[1];

       let roundWinner = '';
       let turn = 0;

       while (player1.hands.length !== 0 && player2.hands.length !==0){
        //Use pop method to remove and create a new array for the last item in the array
            let player1Card = player1.hands.pop()[0];
            let player2Card = player2.hands.pop()[0];

            //Use ifif condition if player1 card value larger, then log out winner is player1
            if (player1Card.value > player2Card.value){
                roundWinner = player1.name;
                player1.points += 1;
                console.log('Turn:', (turn += 1), '\nPlayer 1 card: ', player1Card.suit, player1Card.name, '\nPlayer 2 card: ', player2Card.suit, player2Card.name, "\nThe winner of this round is: ", roundWinner);
            } 
            
            //Use if condition if player2 card value is larger, and log out the winner is player2
            else if (player2Card.value > player1Card.value) {
                roundWinner = player2.name;
                player2.points += 1;
                console.log('Turn:', (turn += 1), '\nPlayer 1 card: ', player1Card.suit, player1Card.name, '\nPlayer 2 card: ', player2Card.suit, player2Card.name, "\nThe winner of this round is: ", roundWinner);
            } 
            
            //If both players' cards have the same value, then logges out there is a tie
            else{
                console.log('Turn:', (turn += 1), '\nThe cards for both players are: ', player1Card.suit, player1Card.name, "\nIt is tie for this round");
            }
        }
    }

    endGame(){
        let gameWinner = "";
        let player1 = this.players[0];
        let player2 = this.players[1];
        let winnerPoints = 0;

        // if player1 points more than player2 point, logges out the winner is player 1
        if (player1.points > player2.points){
            gameWinner = player1.name;
            winnerPoints = player1.points;
            alert('GAME OVER!' + '\n'+ gameWinner + 'Won the game!\nFINAL SCORES:\n' + player1.name +': ' + player1.points + '\n' + player2.name + ':' + player2.points +'\nThank you for playing');

        //vise versa
        }else if(player2.points > player1.points){
            gameWinner = player2.name;
            winnerPoints = player2.points;
            alert('GAME OVER!' + '\n'+ gameWinner + 'Won the game!\nFINAL SCORES:\n' + player1.name +': ' + player1.points + '\n' + player2.name + ':' + player2.points +'\nThank you for playing')
        // in situation of tie game
        }else {
            alert('GAME OVER \nTIED GAME\nFINAL SCORES:\n' + player1.name +': ' + player1.points + '\n' + player2.name + ':' + player2.points +'\nThank you for playing');
        }
    }

}


let game = new Game();
game.start();

// let deck = new Deck();
// deck.createDeck();
// // // console.log(deck.createDeck());
// let shuffledDeck = deck.shuffleDeck();
// // // console.log(shuffledDeck);

// let players = [];
// let player1 = new Players('Junsong');
// let player2 = new Players('Shuqin');
// players.push(player1);
// players.push(player2);

// deck.dealDeck(players, shuffledDeck);


// // // console.log(player1);
// // // console.log(player2);

// let player1Card = player1.hands.pop()[0];
// console.log(player1Card);
// console.log(player1.hands.pop());
// console.log(player1Card.value);
// player1 = players[0];
// console.log(player1.name);
// player1.points +=1;
// console.log(player1.points);
// let turn = 0;
// let roundWinner = player1.name;
// console.log('Turn:', (turn += 1), '\nPlayer 1 card: ', player1Card.suit, player1Card.name,"\nThe winner of this round is: ", roundWinner);





// // let game = new Game();
// // game.start();


// // player1.name = 'Junsong';
// // player2.name = 'Shuqin';
// // deck.dealDeck(players, shuffledDeck);
// // console.log(player1);


