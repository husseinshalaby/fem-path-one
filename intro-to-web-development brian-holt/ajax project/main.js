const BREED_URL = 'https://dog.ceo/api/breeds/image/random'
const dog = document.querySelector('.dog');
const addButton = document.querySelector('.add');
const dogImg = document.createElement('img');

// ********* adding dog on click  ************

const add = () => {
  const promise = fetch(BREED_URL);
  promise.then( response => {
    const res = response.json();
    return res;
  })
  .then( res => {
    console.log(res);
    dogImg.setAttribute('src' , res.message)
    dogImg.setAttribute('alt' , 'my dog')
  })
  dog.appendChild(dogImg)
}

addButton.addEventListener('click', add)