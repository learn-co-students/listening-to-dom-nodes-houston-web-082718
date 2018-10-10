//-----> Change main title when clicked
const main = document.querySelector('#main')
main.addEventListener('click', function(event) {
  main.innerHTML = 'I was clicked!'
  main.style.color = 'violet'
  main.style.fontSize = '6em'
})

//-----> Change input label to input value when someone presses enter
const input = document.querySelector('input')
input.addEventListener('keydown', function(e) {
  // console.log(e.wich)
  if (e.which === 13) {
    const label = document.querySelector('label')
    label.innerHTML = input.value + ':'
  }
})

//-----> Bubble: moves in to out
let divs = document.querySelectorAll('div');

function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}

//-----> Capture: moves out to in
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}

//-----> stopPropogation: only allows first bubbled item to surface
function bubble(e) {
 e.stopPropagation();
 console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
 divs[i].addEventListener('click', bubble);
}
