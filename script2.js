//odd/even
function evenOdd(){
    let userNumber= +prompt("Enter a number");
    if(userNumber%2 === 0){
        alert("It's even!")
    }
    else if(userNumber%2 === 1){
        alert("It's odd!")
    }
    else{
        alert("That's not a number. Try again.")
    }
}


//branching ifs
function ifs(){
    let secondUserNumber= +prompt("Enter a number"),
        result;
    if(secondUserNumber<0){
        result=secondUserNumber%3===0?secondUserNumber**2:secondUserNumber%8;
    }
    else if(secondUserNumber>0){
        let root=Math.ceil(Math.sqrt(secondUserNumber));
        result=root>1?root**2:root-0.5;
    }
    else{
        result=secondUserNumber.toString();
    }
    alert(`${result} (${typeof(result)})`);
}

//number guess
function guess(){
    let ourNumber=Math.round(Math.random()*10);
    if(confirm("Press OK if you're 18 or older")){
        tryToGuess();
    }
    else{
        alert("You're too young for this")
    }


    function tryToGuess(){
        let userGuess= +prompt("What number am I thinking of?");
        if(userGuess==ourNumber){
            alert("Correct!")
        }
        else{
            alert("Nope! Try again!");
            tryToGuess();
        }
    }
}