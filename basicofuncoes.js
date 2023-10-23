function teste(){
    console.log('testando a função teste\n');
}

function calcularJuros(valor, percentualJuros){
    const valorDeJuros = (percentualJuros / 100) * valor;
    return valor + valorDeJuros;
}
teste();

console.log(calcularJuros(100, 10));