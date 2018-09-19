module.exports = function check(str, bracketsConfig) {
  // your solution

  if(typeof str !== 'string')
    return false;

  let stack = [],
      // Сюда можно добавлять свои скобки: ключ - открываемая, значение - закрываемая
      brackets = {},
      openRegExp = [],
      closeRegExp = [],
      str1 = str;
     
      function ObgBreak (a,b) {
   
        brackets[a] = b;
        
      };
      
      for (let j=0;j<bracketsConfig.length;j++) {
          ObgBreak (bracketsConfig[j][0],bracketsConfig[j][1]);
      };
  
  // Создаём регулярные выражения для поиска
  Object.keys(brackets).forEach(e => openRegExp.push(`\\${e}`));
  openRegExp = new RegExp(openRegExp.join('|'));
  for(let i in brackets) if(brackets.hasOwnProperty(i)) closeRegExp.push(`\\${brackets[i]}`);
  closeRegExp = new RegExp(closeRegExp.join('|'));
  
  // Добавляем все найденные открывающие скобки в стёк
  while((tmp = openRegExp.exec(str1)) && (str1 = str1.substr(++tmp.index))) stack.push(tmp[0]);
  
  str1 = str;

  // Если нашли какую-то закрывающую скобку
  while((tmp = closeRegExp.exec(str1)) && (str1 = str1.substr(++tmp.index)))
    // То проверяем: Или закончился стёк, а закрывающие скобки всё прибывают
    // Или является ли найденная скобка парой к открывающей скобке в конце стёка (самой глубокой)
    if(!stack.length || brackets[stack.pop()] !== tmp[0]) return false;
  
  // Всё ОК
  return true; 
    
}
