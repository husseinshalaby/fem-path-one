const _ = {}
const x = {0 : 'was', 1: 'it', 2: 'in' }
let y = []
let e = 'the billiards room?'
_.from = (x, z) => {
  for(key in x){
    y.push(x[key])
    console.log(x[key])
  }
  y.push(e)
  return y.join(' ');
}
_.from(x, e)