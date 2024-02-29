
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    
    atacar() {
        let ataqueDescricao;

            switch (this.tipo) {
            case 'mago':
                ataqueDescricao = 'usou magia';
                break;
            case 'guerreiro':
                ataqueDescricao = 'usou espada';
                break;
            case 'monge':
                ataqueDescricao = 'usou artes marciais';
                break;
            case 'ninja':
                ataqueDescricao = 'usou shuriken';
                break;
            default:
                ataqueDescricao = 'usou um ataque indefinido';
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataqueDescricao}`);
    }
}

const mago = new Heroi('Gandalf', 100, 'mago');
const guerreiro = new Heroi('Aragorn', 35, 'guerreiro');
const monge = new Heroi('Lee Sin', 28, 'monge');
const ninja = new Heroi('Hanzo', 30, 'ninja');

mago.atacar();       // Saída: O mago Gandalf atacou usando magia
guerreiro.atacar();  // Saída: O guerreiro Aragorn atacou usando espada
monge.atacar();      // Saída: O monge Lee Sin atacou usando artes marciais
ninja.atacar();      // Saída: O ninja Hanzo atacou usando shuriken
