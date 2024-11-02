function palindrome(str) {
  //Use REGEX to remove all non letters 
  let newStr = str.replace(/[^a-zA-Z0-9]/g, '')
  console.log(str)
  console.log(newStr.toLowerCase())
  //Make everything lowercase
  let arr = newStr.toLowerCase().split("")
  //Two point check 
  for (let index = 0; index < arr.length;index++){
    let pointerOne = index
    let pointerTwo = arr.length -1 -index
    
    if (arr[pointerOne] != arr[pointerTwo]){
      return false
    }
  }
  return true
}

palindrome("eye");