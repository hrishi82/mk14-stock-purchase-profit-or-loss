var initialPrice = document.querySelector('#initial-price');
var noOfStocks = document.querySelector('#no-of-stocks');
var currentPrice = document.querySelector('#current-price');
var checkBtn = document.querySelector('#check-btn');
var result = document.querySelector('#result');


const typeText = ['Profit or Loss Calculator']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

//Self Invoked function 
// ( function x(){} () );

(function typeWriterFn(){

    //when reaching the last index, reset index to 0
    if(count === typeText.length){
      count = 0;
    }

    // access the current text using the index value
    currentText = typeText[count];

    //this line gives us one letter at a time for the current word selected 
    letter = currentText.slice(0, ++index);

    // adding each letter to the HTML .typing class
    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){
      count++;
      index = 0;
    }

    setTimeout(typeWriterFn, 400);

}());




function clickHandler(){
    var ip = Number(initialPrice.value);
    var noOfSt = Number(noOfStocks.value);
    var cp = Number(currentPrice.value);

    console.log(noOfStocks.value)

    if (initialPrice.value === '' || noOfStocks.value === '' || currentPrice.value === ''){
      showOutput(`Please enter values in all the fields`);
    }else{
      profitorloss(ip, noOfSt, cp);
    }

}


function profitorloss(ip, noOfSt, cp){
    if (ip > cp) {
        var loss = (ip - cp) * noOfSt;
        var lossPercentage = (loss / ip) * 100;
        var lp = lossPercentage.toFixed(2);

        showOutput(
          `Hey, the loss is ${loss} and the loss percentage is ${lp}%`, 'red'
        );
      } else if (cp > ip) {
        var profit = (cp - ip) * noOfSt;
        var profitPercentage = (profit / ip) * 100;
        var pp = profitPercentage.toFixed(2);
    
        showOutput(
          `Hey, the profit is ${profit} and the profit percentage is ${pp}%`, 'green'
        );
      } else {
        showOutput(`No profit or loss`, "black");
      }
    }


function showOutput(message, color){
    result.innerText = message;
    result.style.color = color;
}
    


checkBtn.addEventListener('click', clickHandler)

