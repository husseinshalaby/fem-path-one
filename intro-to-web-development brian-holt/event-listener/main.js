// ********** events & listeners inputs & alert ***********

// ********* on keyup paragraph change **********

const input = document.querySelector('.in-text');
const p = document.querySelector('.p-text');
input.addEventListener('keyup', function(){
  p.innerText= input.value
})
//// ********* on click alert **********

const button = document.getElementById("p2");
document.getElementById("p2").addEventListener('click', function(){
  alert('you clicked an alert button')
})

// ********* change color (on change color-picker)  **********

const colorPicker = document.querySelector('.c-picker');
const colored = document.querySelector('.colored');

colorPicker.addEventListener('change', function(){
  colored.style.backgroundColor = colorPicker.value
})

// ********* event bubbling or event delegation **********

const container = document.querySelector('.event-bubbling');
const ul = document.querySelector('.container ul ');
const child = document.querySelectorAll('.child');
ul.style.listStyle = "none";

container.addEventListener('click', function(event){
    event.target.tagName ==="BUTTON" ?alert(`you clicked on button number ${event.target.innerText}`):event.stopPropagation();
});

