
function checCardForValid(){
    
    let valString = document.getElementById('nomberCard').value;
    let val = valString.split('');
    let arrInput = [];
    arrInput.push(val);
    arrInput[0].reverse();
    let numsToChange = arrInput[0].map(function(currentNumber, index) {
        return Number(currentNumber) * (index % 2 > 0 ? 2 : 0); // % - это остаток от деления
    });
    let otherInt =  arrInput[0].map(function(currentNumber, index) {
        return Number(currentNumber) * (index % 2 > 0 ? 0 : 1); // % - это остаток от деления
    });
    let arrNumsToChange = [];
    numsToChange.forEach(function(el){
        if(el > 9 || el > 0){
            arrNumsToChange.push(el);
        } 
    })
   let arrNumsToChangeBigger9 = [];
    console.log(arrNumsToChange);
    arrNumsToChange.forEach(function(element){
        if(element.toString().split('').length === 1){
            arrNumsToChangeBigger9.push(element);
        }else {
            let sc = element.toString().split('');
            arrNumsToChangeBigger9.push(Number(sc[0]) + Number(sc[1]));
        }
    });    
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sumVal = arrNumsToChangeBigger9.reduce(reducer);
    let sumValNochange = otherInt.reduce(reducer);
    let sumValues = sumVal+sumValNochange;
    let result = (sumValues % 10 === 0 ? "Your Card is valid!" : "Your Card is Not Valid. Please, check if entered number is correct and Try again."); 
    console.log(sumValues);
    document.getElementById('result').innerHTML = result;
}


