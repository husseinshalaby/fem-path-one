// ******* practicing map() ***********
let createSuspectObjects =(name) => {
  return{
    name: name,
    speak(){
      console.log('my name is ', name);
    }
  }
}
let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
let suspectsList = []
suspects.map(element => suspectsList.push(createSuspectObjects(element)))
suspectsList
const names = ['mohamed', 'ahmed', 'sayed']
let newNames = names.map(name =>name.toUpperCase())
names
newNames

// ********* creating _.map() *************

const weapons = ['knife', 'gun', 'klashinkof']
const _ = {}
const newArr = []
_.map = (list, callback) => {
  if(Array.isArray(list)){
    for(let i = 0; i<list.length; i++){
      callback(list[i], i, list)
    }
    return newArr;
  }
}
_.map(weapons, function(name, i, list){
   newArr.push(list[i]);
})
