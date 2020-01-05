// Assignment Code

var generateBtn = document.querySelector("#generate");
var upperCaseCharactersArray= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var lowerCaseCharactersArray='abcdefghijklmnopqrstuvwxyz'.split('')
var numbersArray='0123456789'.split('')
var specialCharactersArray='!$%^@'.split('');
var allCharacters=[]


var passwordLength=0
// var specialCharacters=false;
// var lowerCase=false;
// var numbers=false;
// var upperCase=false;
var specialCharactersPref;
var numbersPref;
var upperCasePref;
var lowerCasePref;

function promptPassword() {
var passwordPrompt = prompt("What is your password length?");
function validateLength(password){
    if(password>7 && password<128){
        passwordLength=password
       promptSpecialCharacters()
    }
    else {
        alert('you need a different password length ya dummy')
    }
}
validateLength(passwordPrompt)
}
//this function can be 
function promptSpecialCharacters() {
 specialCharactersPref= confirm("Click OK to confirm including special characters?");
console.log("confirm ",specialCharactersPref)
promptLowerCase()
}
function checkSpecialCharacters(preference){
    if(specialCharactersPref){
        specialCharacters=true
    }
    //function call to next confirm
    promptLowerCase()

    checkSpecialCharacters(specialCharactersPref)
}




function promptLowerCase() {
    //this variable belongs to this function :) 
lowerCasePref= confirm("Click OK to confirm including lower case letters?");
    function checkLowerCasePref(preference){
        if(lowerCasePref){
            lowerCase=true
        }
    //function call to next confirm
    promptNumbers()
    }


//this function can be 
function promptNumbers() {
numbersPref= confirm("Click OK to confirm including numbers?");
}


function checkNumbersPref(preference){
        if(numbersPref){
            numbers=true
        }
        //function call to next confirm
        promptUpperCase()
    
    checkNumbers(numbersPref)
    }

    //this function can be 
function promptUpperCase() {
upperCasePref= confirm("Click OK to confirm including upper case letters?");
    function checkUpperCase(preference){
        if(upperCasePref){
            upperCases=true
        }
        //function call to next confirm
        promptLowerCase()
    }
    checkUpperCase(upperCasePref)
    }







    
    
    //checkLowerCasePref(lowerCasePref)
    var randomPasswordValue=generateRandomPassword(passwordLength)
    var passwordArea=document.getElementById('password')
    passwordArea.innerHTML=randomPasswordValue
    }
 
function generateRandomPassword(passwordLength){
    var result=''
    // if(specialCharactersPref){
    //     allCharacters=[...upperCaseCharactersArray,...numbersArray,...specialCharactersArray]
    // }
    // else if(!lowerCase && !specialCharactersPref){
    //     allCharacters=[...upperCaseCharactersArray,...numbersArray]
    // }
    // else if(lowerCase && !specialCharactersPref){
    //     allCharacters=[...upperCaseCharactersArray,...numbersArray,...lowerCaseCharactersArray]
    // }

    // else if(!lowerCase && !specialCharactersPref){
    //     allCharacters=[...upperCaseCharactersArray,...numbersArray]
    // }
    // else {
    //     allCharacters=[...upperCaseCharactersArray,...numbersArray,...lowerCaseCharactersArray,...specialCharactersArray]

    // }

// 
var tempAllCharacters=[...upperCaseCharactersArray,...numbersArray,...lowerCaseCharactersArray,...specialCharactersArray]

    if(specialCharactersPref === false ){
       // allCharacters= 
     allCharacters=  tempAllCharacters.toString().replace(specialCharactersArray,"").split("")
    }
    //var num=5 assignment
     //"5"== 5 true, it only cares about the value not datatype
     //"5"=== 5 false, cares about value and datatype
    if(lowerCasePref === false){
        
    }
    if(upperCasePref === false){
        
    }
    if(numbersPref === false){
        
    }

    for ( var i = 0; i < passwordLength; i++ ) {
        var allCharsString=allCharacters.join('')
        result += allCharsString.charAt(Math.floor(Math.random() * allCharacters.length));
     }
    return result
}

 

// Write password to the #password input
function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
      copyBtn.removeAttribute("disabled");
      copyBtn.focus();
    }
    
    function copyToClipboard() {
      // BONUS 
    }

// When generate button is pressed, I want the prompt to show up to ask user how many characters they want//

// Add event listener to generate button
document.addEventListener("click", event => {
    if(!event.target.matches('#generate')){
        return;
    }
    if(event.target.matches('#generate')){
       promptPassword()
    }
    
})





// BONUS EVENT LISTENER