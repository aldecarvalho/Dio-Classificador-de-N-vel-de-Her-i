function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(){

}

(function main(){
const peso = 75;
const altura = 1.70;

const imc = calcularImc(peso, altura);
console.log(classificarImc(imc));
})();

