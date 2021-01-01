/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/


'use strict';

function rot13(str) {
 var arr = str.split("");
 for(var i = 0; i < str.length; i++){
    var char = arr[i].toString();
     if( char.toUpperCase() != char.toLowerCase()){
         if(char.charCodeAt() < 78){
            arr[i] = String.fromCharCode(((char.charCodeAt()) + 13));
         } else {arr[i] = String.fromCharCode(((char.charCodeAt()) - 13));}
     }
 }
  return arr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));