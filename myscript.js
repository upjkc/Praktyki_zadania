function handleCalculatorForm(form){

    let toDisplay = form.number1.value;
    let toDisplay2 = form.number2.value;
    let toDisplay3 = form.symbol.value;
    document.getElementById("calcResult").innerHTML = calculate(toDisplay,toDisplay2,toDisplay3);
}

function handlePalindromeForm(form){

    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}

function calculate(var1, var2, var3){
    var1 = parseFloat(var1);
    var2 = parseFloat(var2);
    switch(var3){
    case "+":
        return "Result: "+(var1 + var2);
    case "-":
        return "Result: "+(var1 - var2);
    case "/":
        if(var2 == 0){
            return "Dividing by 0";
        }
        return "Result: "+(var1 / var2);
    case "*":
        return "Result: "+(var1 * var2);
    }
}


function palindrome(str){

    
    let rev="";
    for(let i = str.length-1; i >= 0; i--){
        rev = rev + str[i];
    }
    return rev === str;
}


function notLast(){
    let numbers = [1,2,5,3,8,9,10,7,10];
    let words = ["pa","pug","woo","ziemia","grunt","kamien","watt"];
     let length1 = numbers.length;
     let length2 = words.length;
    for(let j=0; j<length1; j++){
        for (let i=0; i < length1; i++){ 
            if(numbers[i] > numbers[i+1]){
                let temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
            }
        }
    }
    for(let j=0; j<length2; j++){
        for (let i=0; i < length2-1; i++){ 
            if((words[i].length) > (words[i+1].length)){
                let temp = words[i];
                words[i] = words[i+1];
                words[i+1] = temp;
            }
        }
    }

    var1 = numbers[length1-1];
    for(let z = length1; z >= 0; z--){
        if(var1>numbers[z]){
            var1 = numbers[z];
            break;
        }
    }
    var2 = words[length2-1];
    for(let x = length2; x >= 0; x--){
        if(var2>words[x]){
            var2 = words[x];
            break;
        }
    }

    console.log("Array of words: "+var2+"\nArray of numbers: "+var1);
    
}
notLast();