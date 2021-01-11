function verificar(num){
    let check = 0;

    if ( ( num % 3 == 0 ) && ( num != 0 ) ){
        check = 1;
    }

    if ( ( num % 5 == 0 ) && ( num != 0 ) ){
        check = 2;
    }

    if ( ( num % 5 == 0 ) && ( num % 3 == 0 ) ){
        check = 3;
    }


    if ( check == 0 ){
        return num;
    }

    if(check == 1){
        return "Fizz";
    }

    if(check == 2){
        return "Buzz";
    }

    if(check == 3){
        return "FizzBuzz";
    }
    
}

function cont(){
    
    document.forms["form"].elements[0].value++;
    var number = document.forms["form"].elements[0].value;
    
    document.forms["form"].elements[1].value = verificar(number);
    
    if(document.forms["form"].elements[0].value == 101){
        document.forms["form"].elements[0].value = 0;
    }

    if(document.forms["form"].elements[1].value == 101){
        document.forms["form"].elements[1].value = 0;
    }
}

function resete(){
    document.forms["form"].elements[0].value = 0;
    document.forms["form"].elements[1].value = 0;
}
