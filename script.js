function myFunction() {
  alert("Finishing");
}
function myFunctionC1() {
  alert("This was made when I was just board and wanted to make a quick sketch, it ended up becoming one of my favorite pieces to date and really helped solidify my art style and love for charcoal!");
}
function myFunctionC2() {
  alert("Finishing");
}
function myFunctionG1() {
  alert("Finishing");
}
function myFunctionG2() {
  alert("Finishing");
}
function myFunctionP1() {
  alert("Finishing");
}
function myFunctionP2() {
  alert("Finishing");
}
function myFunctionA1() {
  alert("Finishing");
}
function myFunctionA2() {
  alert("Finishing");
}

// MINIGAME
// making card flip on click   ----to access from memory-card needs a dot at teh start 
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard


// let popup = document.getElementById("popup"); 


// function closePopup(){
//   popup.classList.remove("open-popup");
// } 
 
function closePopup(){
     popup.classList.remove("open-popup");
   } 


function flipCard(){


  // this is accessing the classlist of the memeory card and toggling the flip class, meaning if class there remove if not then add it/
  //turns on and off a separate(flip in this case) class within the memory-card class  
  this.classList.toggle('flip');


  if (!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this; 
  console.log({hasFlippedCard,firstCard});
  }
  else {
    // let popup = document.getElementById("popup1"); 
    let popup = document.getElementById("popup"); 
    // let popup2 = document.getElementById("popup2"); 
    // let popup = document.getElementById("popup3"); 
    // let popup4 = document.getElementById("popup4"); 
    // let popup5 = document.getElementById("popup5"); 
    // let popup6 = document.getElementById("popup6"); 





    //means were on second card flip
    hasFlippedCard = false;
    secondCard = this;
    console.log({hasFlippedCard,firstCard});



    // function openPopup(){ 
    //   popup.classList.add("open-popup"); 
    // }



    // // we put the card and gave it the identifier data-(the name we wanted which i said name) and we access it usi g dataset.
    // console.log(firstCard.dataset.name); 
    // console.log(secondCard.dataset.name); 
    if (firstCard.dataset.name === secondCard.dataset.name){

      function openPopup(){ 
        popup.classList.add("open-popup"); 
      }
  
      //if its a match we disable the event listener of being able to click it .  on click remove eventlistener for fucntion flipcard

      firstCard.removeEventListener('click',flipCard);
      secondCard.removeEventListener('click',flipCard);
      setTimeout(()=> {
      if (firstCard.dataset.name === "P2"){
        openPopup()

          // popup.classList.add("open-popup"); 


          // popup.classList.remove("open-popup");

        // }
        // function closePopup(){
        //   popup.classList.remove("open-popup");
        // }

        alert("Congrats! You've discovered my first ever drawing made completeley in pen. This one took an entire summer and was such a mess. Goodluck finding all the rest! Made June 2021       FunFact: Art used to be an Olympic event!");
      }
      if (firstCard.dataset.name === "P1"){
        alert("Congrats! Okay so this one isn't only made in pen. It was the first time I really tried to combine both pen and charcoal and I think it came out alright! Made May 2021         FunFact: The Mona Lisa has her own mailbox in the Louvre because of all the love letters she receives.");
      }
      if (firstCard.dataset.name === "C1"){
        alert("Congrats! Made March 2020          FunFact: In 2003 street artist Banksy stuck his own work to the wall in the Tate Modern Museum.");
      }
      if (firstCard.dataset.name === "C2"){
        alert("Congrats! Made January 2021             FunFact: Van Gogh has only sold one painting during his lifetime.");
      }
      if (firstCard.dataset.name === "G1"){
        alert("Congrats! Made November 2020           FunFact: The largest statue in the world is the Mount Rushmore National Memorial.");
      }
      if (firstCard.dataset.name === "G2"){
        alert("Congrats! Made August 2019               FunFact: Art used to be an Olympic event!");
      }
    },500);
    }
    // console.log("function executed");
    //when its not a match it resets, but we need a delay so doesnt immedisately flip back so we know the option was wrrong
    else {
      setTimeout(() => {
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')
    },390);
    }

  }
  // console.log('I was clicked');
  // console.log(this);
}

//Since we want it to be run immediately every time we can wrap it into parenthesis and then put () after which makes this function an immediately invoked function,means executed right after definiton. 
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    //I am not sure BOUT THIS LINE BELOW I AM CONFUSEF HOW IT WORKS FULLY CUS I LOOKED UP ITS SYNTAX
    card.style.order = randomPos;
  });
})();


cards.forEach(card => card.addEventListener('click', flipCard));




var dict = {};

var form = document.getElementById("form");

function myFunction(event) {
  namesub = document.getElementById("namesub")
  // alert(namesub.value.toString())
  event.preventDefault();
  dict[namesub.value.toString()] = desc.value.toString() 
  console.log(dict)
}

// the secont thing is the name of my function
form.addEventListener("submit", myFunction, true)



// // MINIGAME
// // making card flip on click   ----to access from memory-card needs a dot at teh start 
// const cards = document.querySelectorAll('.memory-card');

// function flipCard(){
//   console.log('I was clicked');
//   console.log(this);
// }

// cards.forEach(card => card.addEventListener('click', flipCard));