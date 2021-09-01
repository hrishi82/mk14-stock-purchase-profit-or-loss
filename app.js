var initialPrice = document.querySelector('#initial-price');
var noOfStocks = document.querySelector('#no-of-stocks');
var currentPrice = document.querySelector('#current-price');
var checkBtn = document.querySelector('#check-btn');
var result = document.querySelector('#result');

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
        showOutput(`No profit or loss`);
      }
    }


function showOutput(message, color){
    result.innerText = message;
    result.style.color = color;
}
    


checkBtn.addEventListener('click', clickHandler)

