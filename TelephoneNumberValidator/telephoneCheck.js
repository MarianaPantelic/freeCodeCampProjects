/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/



// Without regex

'use strict';

function telephoneCheck(str) {
    
  var check = true;
  if(str.charAt(0) == "-") check = false;
  else{
    var newStr = str.replace(/[^0-9().]/ig, "");
    for(var i = 0; i < newStr.length; i++){
        if(newStr.charAt(i) != "(" || newStr.charAt(i) != ")"){
            if(newStr.length == 10) {check = true;
            }else if(newStr.length == 11){
                if(newStr.charAt(0) == 1) {check =true;
            }else check = false;
            } else check = false;
        } else check = false;
    }
    
    if((newStr.charAt(0) == "(" && newStr.charAt(4) == ")") || (newStr.charAt(1) == "(" && newStr.charAt(5) == ")")){
      if(newStr.length == 12){ check = true;
      } else if(newStr.length == 13) {
        if(newStr.charAt(0) == 1){ 
          check = true;
        } else check = false;
      } else check = false;
    }
  }
return check;
}

// With regex

/*
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  return regex.test(str);
}
*/


console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("-1 (757) 622-7382"));



