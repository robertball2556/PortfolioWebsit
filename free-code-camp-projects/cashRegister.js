const billValue = [
    ["PENNY", 1],
    ["NICKEL", 5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000]
  ]
  function sumDictVals(dict){
    let total = 0
    Object.keys(dict).map(function(key){
      total += dict[key]
  
    })
    return total
  }
  function checkCashRegister(price, cash, cid) {
    let changedue = Math.round(cash * 100) - Math.round(price *100);
    let status
    let registerCash = {}
    let change = {}
  
    cid.map(function(list){
      registerCash[list[0]] = Math.round(list[1]*100)
    })
  
    for (let i = billValue.length-1; i >= 0; i--) {
      let moneyAvailable = true
      while (moneyAvailable == true){
        if ((billValue[i][1] <= changedue)&&(registerCash[billValue[i][0]]>=billValue[i][1])){
  
        //remove from due to customer
        changedue = changedue - billValue[i][1]
        //remove value from register 
        registerCash[billValue[i][0]] = registerCash[billValue[i][0]] - billValue[i][1]
        //give to customer
        if (!(billValue[i][0] in change)){
          change[billValue[i][0]] = billValue[i][1]
        }
        else{
          change[billValue[i][0]] = change[billValue[i][0]] + billValue[i][1]
        }
        
  
      }
      else{
        moneyAvailable = false
      }
      }  
      
    }
  
    if((changedue ==0) && (sumDictVals(registerCash) == 0)){
      let changelist = []
        Object.keys(registerCash).map(function(key){
          if (key in change){
            changelist.push([key,change[key]/100])
          }
          else{
            changelist.push([key,0])
          }
          
        })
      //console.log(changelist)
      return {status:"CLOSED",change:changelist}
    }
    else if (changedue == 0){
        let changelist = []
        Object.keys(change).map(function(key){
          changelist.push([key,change[key]/100])
        })
        return {status:"OPEN",change:changelist}
      }
    else{
        return{status: "INSUFFICIENT_FUNDS", change: []}
      }
  
    }
    
  
  let res = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  
  console.log(res)