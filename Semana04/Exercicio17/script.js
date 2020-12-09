// Crie uma função que apresente o ranking dos livros mais vendidos. Você precisa 
// diferenciar a posição apenas dos 3 primeiros do ranking, os demais serão apenas listados.

// REST OPERATOR

const ranking = function (primeiro, segundo, terceiro, ...demais) {
    console.log(`O primeiro livro mais vendido é: ${primeiro}`);
    console.log(`O segundo livro mais vendido é: ${segundo}`);
    console.log(`O terceiro livro mais vendido é: ${terceiro}`);
    console.log(`Os demais livros da lista são ${demais.join(", ")}`);
}

const livros = [
    "Mais esperto que o diabo",
    "A sutil arte de ligar o foda-se",
    "Do mil ao milhão",
    "O milagre da manhã",
    "Box Harry Potter",
    "Decida vencer",
    "Seja foda!",
    "O poder da autorresponsabilidade",
    "Os segredos da mente milionária",
    "Sol da meia-noite",
    "Mindset",
    "Pai rico, pai pobre - Edição de 20 anos",
    "DNA da cocriação",
    "Mulheres que correm com os lobos (capa dura)",
    "A garota do lago",
    "Escravidão",
    "O poder do hábito",
    "Sapiens",
    "21 lições para o século 21",
    "A revolução dos bichos"];

ranking(...livros);