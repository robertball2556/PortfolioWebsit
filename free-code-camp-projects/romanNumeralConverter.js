function numeralConversion(num){
  var arabicToRoman = {1: "I", 2: "II", 3: "III",  4 : "IV", 5: "V", 6: "VI", 7 : "VII", 8 : "VIII", 9 : "IX", 
10 : "X", 20 : "XX", 30 : "XXX", 40 : "XL", 50 : "L", 60 : "LX", 70 : "LXX", 80 : "LXXX", 90 : "XC", 
100 : "C", 200 : "CC", 300 : "CCC", 400 : "CD", 500 : "D", 600 : "DC", 700 : "DCC", 800 : "DCCC", 900 : "CM", 
1000: "M", 2000: "MM", 3000: "MMM"};

  return arabicToRoman[num] 
}

function convertToRoman(num) {
  if (num <=0 || num > 3999 ){
    return console.log("Input Error")
  }
  let converted = num.toString().split("")
  console.log("Before: ",converted)
  

switch(converted.length) {
  case 4:
    converted[0] = converted[0]+"000"
    converted[1] = converted[1]+"00"
    converted[2] = converted[2]+"0"
    break;
  case 3:
    converted[0] = converted[0]+"00"
    converted[1] = converted[1]+"0"
    break;
  case 2:
    converted[0] = converted[0]+"0"
    break;
}

converted = converted.map(num => parseInt(num))
console.log("Mid:  ",converted)
converted = converted.map(num => numeralConversion(num))


  console.log("After:  ",converted)
  console.log(converted.join(""))
 return converted.join("");
}

convertToRoman(36);