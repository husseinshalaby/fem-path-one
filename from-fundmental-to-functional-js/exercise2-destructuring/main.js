// practicing destructuring exercise

// destructuring object
const myObj = {name: 'Rusty', room: 'Kitchen', weapon: 'candlestick' }
const {name, room, weapon} = myObj 

console.log(name)
console.log(room)
console.log(weapon)

// destructuring array
const [a, b , c] = ['kyle', 'brian']
console.log(a)
console.log(b)

//destructuring with spread operator
const [a,...b] = ['kyle', 'brian', 'holt']
console.log(a)
console.log(b)

// swaping variable values 
let x = 1, y = 2;
[x, y] = [y, x]
console.log(x,y)

// nested arrays 
let [a, [b,[c,d]]] = [1,[2,[[[3,4],5],6]]];
console.log('a:', a, 'b:',b , 'c:', c, 'd:', d);
