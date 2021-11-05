// .filter() exercise 
const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false},
    ]
  },
  {
    name: 'Mr white',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false},
    ]
  },
  {
    name: 'kyle',
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false},
    ]
  },
  {
    name: 'brian',
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false},
    ]
  },
]
let filtered =[]
const filterItems = (arr) => {
  return arr.filter(function(el) {
   el.present ? 
     filtered.push(el) && console.log(el.name + ' is present'):
     console.log(el.name +' is absent');
  })
}

filterItems(videoData)
filtered