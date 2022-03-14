const colors = ['red', 'green', 'blue', 'yellow', 'pink']
const bg = document.getElementsByTagName('body')[0]
const btn = document.getElementsByTagName('button')[0]
const painelColor = document.getElementById('color')

const hxd = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


const randomNumber = () => {
  return Math.floor(Math.random() * 16)
}

// Liga e desliga
let id, key = true;

btn.addEventListener('click', () => {
  if (key){
    key = false
    id = setInterval(() => {
      const c = createColor()
      bg.style.backgroundColor = c
      painelColor.textContent = c
    }, 500)
  } else {
    key = true
    clearInterval(id)
  }
})

const createColor = () => {
  let color = '#';
  while (color.length !== 7){
    const n = randomNumber()
    color += hxd[n]
  }
  return color
}