// ********** closure examples
// closure example 1
var scope = 'global scope';
function checkscope(){
  var scope = 'local scope';
  function innerFunc(){
    return scope;
  };
  return innerFunc;
};
var test = checkscope();
test
test()

// closure example 2 
const findSomeone = () => {
  const speak = () => {
    console.log(who);
  };
  let who = 'why hello there, prof Plum!';
  return speak;
};
const someoneSpeak = findSomeone()
someoneSpeak()


// closure example 3 (stopwatch)
const makeTimer = () => {
  let elapsed = 0;
  const stopwatch = ()=> {return elapsed;};
  const increase = ()=> elapsed++;
  setInterval(increase, 1000);
  return stopwatch;
}
let timer = makeTimer()
timer()



