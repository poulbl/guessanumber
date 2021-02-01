
    var target = Math.floor(Math.random() * 10 + 1); 
        
    var NumOfGuesses = 1; 
        
const submit = () => {


    var guess = document.getElementById("submitField").value;

    if(guess == target) 
    {     
        alert("Tilykke. Du gættede det rigtige tal på " + NumOfGuesses + " gæt");  
    } 
    else if(guess > target) /* if guessed number is greater 
                    than actual number*/ 
    {     
        NumOfGuesses++; 
        alert("Gættet var for højt"); 
    } 
    else
    { 
        NumOfGuesses++; 
        alert("Gættet var for lavt");
    } 
}