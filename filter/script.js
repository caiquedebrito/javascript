const request = new XMLHttpRequest()
let doc;

request.onreadystatechange = function() {
    if (request.readyState === 4 &&  request.status === 200) {
        doc = JSON.parse(request.response)
        // console.log(doc)
        criateList(doc)
    }
}

// Configuração da requisição
request.open('GET', 'https://jsonplaceholder.typicode.com/users')

// Manda a requisição
request.send()

function criateList(obj) {
    const ul = document.getElementsByTagName('ul')
    for (let user of obj) {
        // console.log(user.name)
        let li = document.createElement('li')
        li.textContent = user.name
        ul[0].appendChild(li)
    }
}

function test(obj) {
    let value = obj.value.toUpperCase()
    console.log(value)
    const li = document.getElementsByTagName('li')
    for (let elem in li) {
        console.log(li[elem].textContent)
        let cont = li[elem].textContent.toUpperCase()
        if (cont.indexOf(value) > -1) {
            li[elem].style.display = 'block'
        } else {
            li[elem].style.display = "none"
        }
    }
}