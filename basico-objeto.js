const pessoa = {
    nome: '',
    idade: 0,
    altura: 1.69,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é: ${this.idade}`);
    }
};

pessoa.nome = 'Anderson';
pessoa.idade = 43;
pessoa.altura = 1.69;

pessoa.descrever();
