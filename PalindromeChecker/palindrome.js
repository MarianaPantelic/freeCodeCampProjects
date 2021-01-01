/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
 */


 'use strict';

 function palindrome(str){
    str = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let string  = true;
    let wordLength = str.length;
    for(let Index = 0; Index < (wordLength /2); Index++){
        if(str.charAt(Index) !== str.charAt(wordLength - Index - 1)){
            string = false;
        }
    }
    return string;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("not a palindrome"))