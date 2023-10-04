/* Crie uma classe para carro com marca, cor e gasto de combustível por Km. Depois crie um 
método para calcular o gasto em reais com combustível para fazer um percurso usando a distância
e o preço do combustível. */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca=marca;
        this.cor=cor;
        this.gastoMedioPorKm=gastoMedioPorKm
    }

    calcularGastoDoPercurso(distanciaEmKm,precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

palio = new Carro('fiat','azul',1/20);
console.log ('Você vai gastar R$ ' + palio.calcularGastoDoPercurso(527, 5) + 
'em combustível para fazer esse percurso');

/* crie uma classe para representar pessoas com nome, peso e altura.
calcule o imc=peso/altura² 
instancie uma pessoa chamada jose, 70kg, 1.75m de altura e calcule o imc
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor (nome,peso,altura){
        this.nome=nome;
        this.peso=peso;
        this.altura=altura;
        this.imc= peso/(Math.pow(altura,2));
    }

    classificarImc() {
        if (this.imc < 18.5){
            return 'Desnutrido';
        }else if (18.5 <= this.imc && this.imc <= 24){
            return 'Eutrófico';
        }else if (24 < this.imc && this.imc < 30 ){
            return 'Sobrepeso';
        }else if (30 <= this.imc && this.imc < 40){
            return 'Obesidade';
        }else {
            return 'Obesidade Grave';
        }

    }
}

jose = new Pessoa('José', 70, 1.75);

console.log('O IMC do ' + jose.nome + ' é ' + jose.imc.toFixed(2) + ' e ele está ' + jose.classificarImc());
