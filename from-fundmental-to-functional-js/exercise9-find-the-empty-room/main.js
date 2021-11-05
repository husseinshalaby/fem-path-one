// here we have array of objects and we want to get the empty room 

const data = [
  {
      name: 'Miss Scarlet',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: true},
          {'dining room': true},
          {'billiard room': false},
          {library: true}
      ]
  },
  {
      name: 'Reverend Green',
      present: true,
      rooms: [
          {kitchen: true},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': true},
          {library: false}
      ]
  },
  {
      name: 'Colonel Mustard',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: true},
          {'dining room': false},
          {'billiard room': true},
          {library: false}
      ]
  },
  {
      name: 'Professor Plum',
      present: true,
      rooms: [
          {kitchen: true},
          {ballroom: false},
          {conservatory: false},
          {'dining room': true},
          {'billiard room': false},
          {library: false}
      ]
  }
];

// first we looped over the data array to find out the rooms
// we got array of arrays

let newArr = []
let arr = []
const rooms = (list) => {
  for(let i = 0; i < list.length; i ++){
    newArr.push(list[i]['rooms'])
  }
  return newArr
}
// so we merged them in one array (flattened the arrays)
rooms(data)
console.log(newArr)
var merged = arr.concat.apply([], newArr);

console.log(merged);

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
// we filtered the array to get new array of empty rooms only
let falseList = []
const findFalse = (list) => {
  for(let i = 0; i < list.length; i ++){
    getKeyByValue(list[i],false)? falseList.push(list[i]): console.log('hello')
  }
  return falseList
}

findFalse(merged)
console.log(falseList)

counter = {}
// the objects are in string form 
// the empty room is the most frequent room as every user has false value of present in it 
// we looped over the rooms after converting their data type into objects again 
// we counted the number of occurence for every key 
const h = falseList.forEach(function(obj) {
    var key = JSON.stringify(obj)
    counter[key] = (counter[key] || 0) + 1
})
console.log(counter)

var keys = Object.keys(counter);
var result = counter[keys[0]];

for (let i = 1; i < keys.length; i++) {
    var value = counter[keys[i]];
    if (value > result) result = Object.keys(JSON.parse(keys[i]));
}
console.log(`the empty room is >>>>> ${result}`)