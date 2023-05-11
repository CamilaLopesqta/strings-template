//let fraseConcatenacao = "A cor favorita de " + pessoa + " é " + cor + "."
//console.log("Concatenação: ", fraseConcatenacao)

//let fraseTemplateString = `A cor favorita de ${pessoa} é ${cor}.`
//console.log("Template string: ", fraseTemplateString)

let pessoa = prompt("Qual é o seu nome?").toUpperCase()
let cor = prompt("Qual é a sua cor favorita?")
let citacao = prompt("qual é a sua citação favorita?")

let fraseConcatenacao = "A cor favorita de " + pessoa + " é " + cor + ". \"" + citacao + "\""
console.log("Concatenação: ", fraseConcatenacao)

let fraseTemplateString = `A cor favorita de ${pessoa} é ${cor}. ${citacao}`
console.log("Template string: ", fraseTemplateString)

let fraseQuebraDeLinha = "Nome: " + pessoa + "\nCor favorita: " + cor
let fraseQuebraDeLinhaTemplateString = `Nome: ${pessoa}
cor favorita: ${cor}`

console.log(fraseQuebraDeLinhaTemplateString)
console.log(fraseQuebraDeLinha)

console.log(pessoa.length)
console.log(pessoa.includes("A"));

//para guardar na cabeça
let nome = prompt("Qual é o seu nome?")
let email = prompt("Qual é o seu e-mail?")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome}!.`.replace("r", "X"))
console.log(nome.length)
console.log(email.includes("@"))
