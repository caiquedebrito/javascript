
var agora = new Date() // Date: Função que pega a informações atuais do sistema
var hora = agora.getHours() // Pega hora atual do sistema
console.log(`Agora são exatamente ${hora} horas`)
if (hora >= 4 && hora < 12) {
    console.log('Bom Dia!')
}else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}