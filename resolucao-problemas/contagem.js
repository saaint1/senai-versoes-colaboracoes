//se for par, alertar par e o numero
//se for impar, alertar impar e o numero
//se for zero, alertar zero e o numero

let alunosPresentes = 17;
for (let aluno = 0; aluno <= alunosPresentes; aluno++) {
    
    if (aluno == 0) {
        console.log ("Zero " + aluno);
    }
    
    if (aluno % 2 == 0) {
        console.log("par " + aluno);
    } else {
        console.log("ímpar " + aluno);
    }
}