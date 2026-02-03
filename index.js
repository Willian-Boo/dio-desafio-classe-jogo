class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'Guerreiro':
                ataque = 'Espada 🗡️';
                break;
            case 'Mago':
                ataque = 'Magia 🪄';
                break;
            case 'monge':
                ataque = 'Artes marciais 🥋';
                break;
            case 'Ninja':
                ataque = 'Shuriken 🥷';
                break;
            default:
                ataque = 'Punhos';
        }
        return `${this.nome}, o ${this.tipo} atacou usando ${ataque}.`;
    }
}
const heroi1 = new Heroi('Aragorn', 87, 'Guerreiro');
console.log(heroi1.atacar());