// Assignment Code



var generateBtn = document.querySelector("#generate");
var upperCaseCharactersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var lowerCaseCharactersArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
var numbersArray = '0123456789'.split('')
var specialCharactersArray = '!$%^@'.split('')
var passwordLength = 0
var specialCharactersPref;
var numbersPref;
var upperCasePref;
var lowerCasePref


function promptPassword() {
    var passwordPrompt = prompt("What is your password length?");
       
    validateLength(passwordPrompt)
}

function validateLength(password) {
    if (password > 7 && password < 128) {
        passwordLength = password
        promptSpecialCharacters()
    }
    else {
        alert('you need a different password length')
    }
}

//this function can be 
function promptSpecialCharacters() {
    specialCharactersPref = confirm("Click OK to confirm including special characters?");
    console.log("confirm ", specialCharactersPref)
    promptLowerCase()
}



function promptLowerCase() {
    //this variable belongs to this function 
    lowerCasePref = confirm("Click OK to confirm including lower case letters?");


    promptNumbers()
}
//this function can be 
function promptNumbers() {
    numbersPref = confirm("Click OK to confirm including numbers?");
    promptUpperCase()
}



//this function can be 
function promptUpperCase() {
    upperCasePref = confirm("Click OK to confirm including upper case letters?");

   
    outputPassword()
}



function replaceCharacters(tempAllCharacters, tmpArray) {

    //tmpArray is passed from specialcharacters Array, lowercaseArray, uppercaseArray
    // or numberArray

    //tempAllcharacter is passed tempAllcharacters that have everything
    for (let i = 0; i < tmpArray.length; i++) {

        //indexof check if a character exist in the tempAllCharacter
        // from specialcharacters Array, lowercaseArray, uppercaseArray
        // or numberArray accoding to the confirm that was pressed.

        //if charater, the value of index is greater than -1.
        let index = tempAllCharacters.indexOf(tmpArray[i]);
        console.log(tmpArray[i])
        if (index > -1) {
            //find the index of the character and deletes it
            tempAllCharacters.splice(index, 1);
        }
    }

    // It returns the results of the tempAllCharacter after the delele 
    //from specialcharacters Array, lowercaseArray, uppercaseArray
    // or numberArray accoding to the confirm cancel that was pressed.
    return tempAllCharacters
}

function generateRandomPassword(passwordLength) {
    var result = ''
    

    var tempAllCharacters = [...upperCaseCharactersArray, ...numbersArray, ...lowerCaseCharactersArray, ...specialCharactersArray]

    console.log("tempAllCharacters Array with everything:", tempAllCharacters)

    //confirm is cancel, it equals false for special characters 
    if (specialCharactersPref === false) {

        //calls the replace function to exclude all special characters
        tempAllCharacters = replaceCharacters(tempAllCharacters, specialCharactersArray)
        
    }
    //var num=5 assignment
    //"5"== 5 true, it only cares about the value not datatype
    //"5"=== 5 false, cares about value and datatype

    //confirm is cancel, it equals false for lower characters 
    if (lowerCasePref === false) {
        //calls the replace function to exclude all lower cases
        tempAllCharacters = replaceCharacters(tempAllCharacters, lowerCaseCharactersArray)
       
    }

    //confirm is cancel, it equals false for upper characters 
    if (upperCasePref === false) {
        //calls the replace function to exclude all uppper cases
        tempAllCharacters = replaceCharacters(tempAllCharacters, upperCaseCharactersArray)
      
    }

    //confirm is cancel, it equals false for numbers 
    if (numbersPref === false) {
        //calls the replace function to exclude all numbers
        tempAllCharacters = replaceCharacters(tempAllCharacters, numbersArray)
       
    }
    if (numbersPref === false && upperCasePref === false &&
        specialCharactersPref === false && lowerCasePref === false) {
        tempAllCharacters = []
    }
    console.log("updated tempAllCharacters Array:", tempAllCharacters)
    for (var i = 0; i < passwordLength; i++) {
        //no need to convert it to string, allCharacters is an array already
        // var allCharsString = allCharacters.join('')
        if (tempAllCharacters[Math.floor(Math.random() * tempAllCharacters.length)] != undefined) {
            result += tempAllCharacters[Math.floor(Math.random() * tempAllCharacters.length)];

            console.log("results:", result)
        }

    }



    return result
}



// Write password to the #password input
function outputPassword() {
    var password = generateRandomPassword(passwordLength);

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

     
    //
    // copyBtn.removeAttribute("disabled");
    // copyBtn.focus();
}


function copyToClipboard() {

    /* Get the text field */
    var copyText = document.getElementById("password");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    console.log("Copied the text: " + copyText.value);

    // BONUS 
}

// When generate button is pressed, I want the prompt to show up to ask user how many characters they want//

// Add event listener to generate button
document.addEventListener("click", function (event){

     
        promptPassword()
     

})

// document.querySelector("#copy").addEventListener("click", function(events){
//     copyToClipboard()
// })


// BONUS EVENT LISTENER