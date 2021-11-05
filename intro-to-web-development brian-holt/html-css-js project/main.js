let x = 0;
let y = 0;
let z = 0;
let k = 0;
let d = 0;
let final = document.querySelector('.result');
let result = 0;
let newResult = 0;
let operator = '';
const multiply = (a , b) => {
  return c = a * b
}
const divide = (a , b) => {
  return c = a / b
}
const add = (a , b) => {
 return c =  a + b
}
const sub = (a , b) => {
 return c =  a - b
}

const container = document.querySelector('.container');
container.addEventListener('click', function(event){
  if (event.target.classList.contains('del') ){
    operator = event.target.innerText;
    console.log(`x: ${x} |qqqqq| y: ${y}`)
  }
  else if(event.target.classList.contains('operator-button')){
    operator = event.target.innerText;
    x = result;
    y = 0;
    console.log(`x: ${x} |sssss| y: ${y}`)
  }
  else{
    if(!x){
      x=event.target.innerText
      final.innerText = x;
      result = x;
      console.log(`x: ${x} |1| y: ${y}`)
    }
    
    else if (x && !operator){
      x = x.toString();
      z = event.target.innerText.toString();
      x = parseInt(x+z);
      result = x;
      final.innerText = x;
      console.log(`x: ${x} |2| y: ${y}`)
    }
    else if (x && operator && !y){
      y= event.target.innerText;
      result = y;
      final.innerText = `${y}`;
      console.log(`x: ${x} |3| y: ${y}`)

    }
    else if (x && y && operator){
      y = y.toString();
      k = event.target.innerText.toString();
      y = parseInt(y+k);

      final.innerText = `${y}`;
      console.log(`x: ${x} |4| y: ${y}`)
    }

    x = parseInt(x);
    y = parseInt(y);
  }
  x = parseInt(x)
  
  switch (operator) {

    case ('*'):
    result = multiply(x,y);
    break;

    case ('/'):
     d = divide(x,y);
     result = Math.round(d);
    break;

    case ('+'):
    result = add(x,y);
    break;

    case ('-'):
    result = sub(x,y);
    break;

    case ('='):
    final.innerText = result;
    break;

    case ('C'):
    final.innerText = 0;
    result = 0;
    x = 0;
    y = 0;
    operator='';
    break;

    case('b'):
      if (final.innerHTML == x ){
        newResult = x.toString().split('').slice(0, -1).join('')
        console.log(`x: ${x} newResult: ${newResult}`)
        console.log(`x: ${typeof(x)} newResult: ${typeof(newResult)}`)
        if(newResult) {
          newResult = parseInt(newResult)
        }else{
          newResult = 0
          final.innerText = 0;
          result = 0;
          x = 0;
          y = 0;
          operator='';
        }
        result = newResult;
        x = newResult;
        final.innerText = newResult;
      }
      if (final.innerHTML == y){
        newResult = y.toString().split('').slice(0, -1).join('')
        console.log(`y: ${y} newResult: ${newResult}`)
        console.log(`y: ${typeof(y)} newResult: ${typeof(newResult)}`)
        if(newResult) {
          newResult = parseInt(newResult)
        }else{
          newResult = 0
          final.innerText = 0;
          result = 0;
          x = 0;
          y = 0;
          operator='';
        }
        y = newResult; 
        final.innerText = y;
      }     
    break;
    default:
  }
});