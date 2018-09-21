module.exports = function check(str, bracketsConfig) {
  
  if (str.length %2 ) {
    return false;
  }


  const {open, close} = bracketsConfig.reduce((acc, curr) => {
      acc.open.push(curr[0]);
      acc.close.push(curr[1]);
      return acc;
  }, {open:[], close:[]});

/*
  let open = [];
  let close = [];

  for (let i = 0; i < bracketsConfig.length; i++){
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }
 */
  const stack =[];

  for (let i=0; i<str.length ;i++) {
    let index = close.findIndex(s=>s===str[i]);
    let openSymbol = open[index];

    let flag = true;
      if (close.includes(str[i])) {
        if (stack[stack.length-1]===openSymbol){ 
          stack.pop();
          flag = false;
      }
    }
    if (open.includes(str[i]) && flag) {
      stack.push(str[i]);
    }
    
  }
  
 if (stack.length !== 0){
    return false;
  }
  return true;
    
}
