function rekurencja(num1,num2){
    if(num1 >= num2){
        console.log(num1);
    }else{
        console.log(num1);
        num1++;
        return rekurencja(num1,num2);
    }

}
rekurencja(2,9);