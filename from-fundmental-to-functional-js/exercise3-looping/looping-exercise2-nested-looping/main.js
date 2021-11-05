const game = {
  suspects:[
    {
      name: 'kyle',
      color: 'yellow'
    },
    {
      name: 'brian',
      color:'red'
    }
  ],
}
const getTheGuilty = (x) => {
  for (let key in x){
    for (suspect of x[key]) {
      suspect.color === 'red' ? console.log(`${suspect.name} is the guilty`):""
    }
  }
}
getTheGuilty(game)
