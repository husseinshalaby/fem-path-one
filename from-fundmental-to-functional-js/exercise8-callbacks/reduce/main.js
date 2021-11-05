// my practice of reduce
// return the longest word of array
const theBiggest = ['Bla', 'propaganda', 'Other', 'AAA', 'Battery', 'Test', 'propaganda_two']
const array1 = [1, 2, 3, 4];
let check = theBiggest.reduce(function(acc,current){
  acc.length > current.length ? acc : acc = current
  return acc 
})
check

// my practice of filter & reduce 
// *****reduce && filter
// exclude the @ and join them wit filter and reduce methods 
const removeChars = ['h','@','@','e','l','@','@','l','@','o']
let check2 = removeChars.filter(word => word !== '@').reduce((acc,current)=>acc +current)
check2

// reduce implementation (instructor solution)
// first solution
const reduce = function(list, cb,initial){
  let memo = initial;
  for (let i = 0; i < list.length; i++){
    if(i === 0 && memo === undefined){
      memo = list[0]
    } else {
      memo = cb(list[i], memo)
    }
  }
  return memo
}
reduce([1,2,3], (v,sum)=> v+sum)

// second solution
// const reduce = function(list, cb,initial = list[0]){
//   let memo = initial;
//   for (let i = 0; i < list.length; i++){
//       memo = cb(list[i], memo)
//   }
//   return memo
// }
// reduce([1,2,3], (v,sum)=> v+sum)




