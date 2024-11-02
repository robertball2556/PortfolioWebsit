function converter(char){
  let letters = new RegExp("[A-Z]")
  if (!(char.match(letters))){
    return char
  }

  let decoded = {"N":"A","O":"B","P":"C","Q":"D","R":"E","S":"F","T":"G","U":"H","V":"I","W":"J","X":"K","Y":"L","Z":"M","A":"N","B":"O","C":"P","D":"Q","E":"R","F":"S","G":"T","H":"U","I":"V","J":"W","K":"X","L":"Y","M":"Z"}
  return decoded[char]
}

function rot13(str) {
  console.log(str)
  let out = str.split("")

  out = out.map(char => converter(char))

  console.log(out.join(""))
  return out.join("");
}

rot13("SERR PBQR PNZC");