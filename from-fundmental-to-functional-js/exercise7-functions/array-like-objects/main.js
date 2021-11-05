// Array-like object old way >>>>>>> Array.prototype.slice.call(arguments);

// const constructArr = function (){
//   const arr = Array.prototype.slice.call(arguments);
//   arr.push('the billiards room?');
//   return arr.join(' ');
// };
// constructArr('was', 'it', 'in');


// array-like object new way >>>>> Array.from(arguments)
const constructArr = function (){
  const arr = Array.from(arguments);
  arr.push('the billiards room?');
  return arr.join(' ');
};
constructArr('was', 'it', 'in');