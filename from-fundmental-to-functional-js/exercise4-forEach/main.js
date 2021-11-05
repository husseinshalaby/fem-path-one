// **********for loop*************
let createList =(name) => {
  return{
    name: name,
    speak(){
      console.log('my name is ', name);
    }
  }
}
let objects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
let objectList = []
for (obj of objects) {
  objectList.push(createList(obj));
}
objectList

//************* practicing forEach()****************
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
suspects.forEach(element => suspectsList.push(createSuspectObjects(element)))
suspectsList


//************creating _.each()************
const weapons = ['candlestick', 'lead pipe', 'revolver']
const _ = {}
_.each = (list, callback) =>{
  if(Array.isArray(list)){
    for(let i = 0; i <list.length; i ++){
      callback(list[i], i , list)
    }
  }else{
    for(key in obj){
      callback(list[key], key, list)
    }
  }  
}
_.each(weapons, function(name, i, list){
    if(list[i+1]) {
      console.log(name, 'is younger than', list[i+1])
    }else {
      console.log(name, 'is the oldest');
    }
})