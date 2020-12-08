// Crie uma função que retornará uma promise, ela receberá dois valores numéricos como parâmetro, 
// a função deve somar os dois valores e somente resolver a promise caso o resultado seja par 
// retornando o valor da soma e rejeitando a promise caso ímpar, retornando uma mensagem explicativa

const add = (a, b) => {
    return new Promise((resolve, reject) => {

        let soma = a + b;

        if (soma % 2 === 0) {
            resolve(`A soma dos numeros é: ${soma}.`);
        } else {
            reject("A soma dos numeros nao é par.");
        }
    })
}

add(5, 5).then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log(reject);
});