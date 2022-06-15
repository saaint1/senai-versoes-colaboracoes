//se a peça possuir um peso superior a 100 gramas, pode cadastrar
//lista de peças superior a 10 = capacidade insuficiente
//nome com quantidade menor que 3 caracteres = erro

let pesoPeca = 50; 
let nomePecas = "para-choque"; 
let listaQtdPecas = 9; 

if(pesoPeca >= 100) {
   console.log("Peça cadastrável"); 
}else {
   console.log("Peça não cadastrável"); 
}

if(listaQtdPecas >= 10){
   console.log("Carrinho cheio"); 
}

 if(nomePecas.length < 3){
    console.log("Erro: Nome inválido. Digite pelo menos 3 caracteres!"); 
 }