// Instancia de uma promise
// Argumento/função resolve: executa uma ação se tudo deu certo
// Argumento/função reject: executa uma ação se algo deu errado
const myPromise = new Promise((resolve, reject) => {
    const name = "Caiq1ue"

    if (name === "Caique") {
        resolve("Usuário encontrado!")
    } else {
        reject("Usuário não encontrado!")
    }
})

// Método then executa a promise
myPromise.then(data => {
    console.log(data)
    // Método catch executa uma ação se e somente se reject for ativado
    // tratamento de erro
}).catch(err => {
    console.log("Ocorreu um erro: " + err)
})

// Encadeamentos de then's

const myPromise2 = new Promise((resolve, reject) => {
    const name = "Caique"

    if (name === "Caique") {
        resolve("Usuário encontrado!")
    } else {
        reject("Usuário não encontrado!")
    }
})

myPromise2.then(data => {
    return data.toUpperCase()
}).then(modifedString => {
    console.log(modifedString)
})

// Resolvendo várias promessas com all
const p1 = new Promise((resolve, reject) => {
    resolve("p1 ok!")
})

const p2= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 ok!")
    }, 5000)
})

const p3 = new Promise((resolve, reject) => {
    resolve("p3 ok!")
})

const allPromise = Promise.all([p1, p2, p3]).then(data => {
    console.log(data)
})

console.log("Depois")

// Resolvendo várias promessas com race
// Resolve a promessa que concluir primeiro
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p4 ok!")
    }, 2000)
})

const p5= new Promise((resolve, reject) => {
    resolve("p5 ok!")
})

const p6 = new Promise((resolve, reject) => {
    resolve("p5 ok!")
})

const racePromise = Promise.race([p4, p5, p6]).then(data => {
    console.log(data)
})