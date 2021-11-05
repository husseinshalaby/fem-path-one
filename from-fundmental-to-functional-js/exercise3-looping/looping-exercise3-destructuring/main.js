let suspects = [
  {
    name: 'rusty',
    color: 'orange'
  },
  {
    name: 'miss scarlet',
    color: 'red'
  }
];
// var color1 = suspects[0]['color']
// var color2 = suspects[1].color
let [color1, color2] = [suspects[0]['color'],suspects[1].color]
let [{color: firstColor}, {color: secondColor}] = suspects
let [obj1, obj2] = suspects
color1
color2
firstColor
secondColor
obj1.color
obj2.color