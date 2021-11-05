// *******from fundemental to functional js exercise 1
// practicing dot notation and bracket notation 
// clue game
let clue = {}
clue.characters = ['kyle', 'brian' ]
clue['rooms'] = ['room1', 'room2']
clue.weapons = ['knife', 'klashinkof']
clue.weapons[4] = 'bianca';
clue.weapons.push('bibo');
clue['cards'] = {}
clue
clue['cards']['card1'] =  {murder : 'kyle', weapon: 'lightbulb', room: 'room2'}
clue['cards'].card2 = {murder : 'brian', weapon: 'knife', room: 'room1'}
clue['cards'].card3 = {}
clue