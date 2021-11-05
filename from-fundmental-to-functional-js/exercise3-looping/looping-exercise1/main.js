// looping exercise 1 

const game = {
  suspects:[
    {
      name: 'kyle',
      color: 'yellow'
    },
    {
      name: 'brian',
      color:'blue'
    }
  ]
}
console.log(game['suspects'])
console.log(game.suspects)
let newArray = []
for (let i = 0 ; i < game.suspects.length; i ++){
  newArray.push(game.suspects[i])
}
console.log(newArray)
for (suspect of game.suspects) {
  newArray.push(suspect)
}
console.log(newArray)
let add = (x, y) => {
  for (let i = 0 ; i < x.length; i ++){
  y.push(x[i])
  }
}
add(game.suspects, newArray)
console.log(newArray)
