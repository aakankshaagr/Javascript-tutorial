//Create 2 variable firstCard and SecondCard.Set their values to a random number between 2-11
//Create a variable, sum and set it to the sum of 2 cards.
/*//part 1 (without arrays)
let Card=document.getElementById("card-el")
let firstCard=8,SecondCard=3,isBlackJack=false,isAlive=true       

sumEl=document.querySelector("#sum-el")
sumEltext=document.querySelector("#sum-el").textContent
sum=firstCard+SecondCard

message=""
mesDisp=document.getElementById("message-el")

function startGame(){
    Card.textContent+=firstCard+" "+SecondCard
    checkBlackJack()
}
function checkBlackJack(){
    sumEl.textContent=sumEltext+sum
    if(sum<21)
    message="Do you want to draw a new Card?"
    else if (sum===21)      //=== means strictily equal to including datatype styles etc.
    {
        message="You've got blackjack!"
        isBlackJack=true
    }
    else{
    message="You are out of the game!"
    isAlive=false
    }
    mesDisp.textContent=message
}
function newCard(){
    newcard=7
    sum+=newcard
    Card.textContent+=" "+newcard
    checkBlackJack()
    
}
//this is one way another is using arrays to display cards.
//We need to track player had a blackjack or not earlier for that we are using boolean. console.log doesn't remebers previous state.
//automata
// aptitude
// maths
// digital logic maths aptitute DSA algo
// OS
// COMPUTER NETWORK
// DATABASE
*/
//WAY 2 we will use array and will push new card in array and display them.
let cardEL=document.getElementById("card-el").textContent
let Card=document.getElementById("card-el")
let isBlackJack=false,isAlive=false

 //array
cards=[]       
sumEl=document.querySelector("#sum-el")
sumEltext=document.querySelector("#sum-el").textContent 


function getRandomCard(){
    num=Math.floor(Math.random()*12)+1
    //in blacjack 1 is treated ass 11 and 11-12-13 is treated as 10
if(num==1)
    return 11
else if (num>10)
    return 10
else
    return num
}

sum=0

message=""
mesDisp=document.getElementById("message-el")

function startGame(){
    //game should start when start game is clicked.
        isAlive=true
        let firstCard=getRandomCard(),SecondCard=getRandomCard()
        sum=firstCard+SecondCard
        cards=[firstCard,SecondCard]
    
    renderGame()
}
function renderGame(){
    Card.textContent=cardEL
    //displaying card array which has all the cards
    for(i=0;i<cards.length;++i){
        Card.textContent+=cards[i]+"  "
    }
    sumEl.textContent=sumEltext+sum
    if(sum<21)
    message="Do you want to draw a new Card?"
    else if (sum===21)      //=== means strictily equal to including datatype styles etc.
    {
        message="You've got blackjack!"
        isBlackJack=true
    }
    else{
    message="You are out of the game!"
    isAlive=false
    }
    mesDisp.textContent=message
}
function newCard(){
    // when game is over I shouldn't be able to draw a new card and also when I get a blackjack
    console.log(isAlive,isBlackJack)
    if(isAlive===true && isBlackJack===false){
    newcard=getRandomCard()
    sum+=newcard
    cards.push(newcard)
    renderGame()
    }
}