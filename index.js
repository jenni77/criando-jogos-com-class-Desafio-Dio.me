class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        if(this.tipo == "mago"){
            console.log("o " + this.tipo + " atacou usando magia")
        } else if(this.tipo == "guerreiro"){
            console.log("o " + this.tipo + " atacou usando espada")
        } else if(this.tipo == "monge"){
            console.log("o " + this.tipo + " atacou usando artes marciais")
        } else if(this.tipo == "ninja"){
            console.log("o " + this.tipo + " atacou usando shuriken")
        }
    }
}

let magoDeFogo = new heroi("Savos", 50, "mago")
let guerreiroLendario = new heroi("Draxen", 40, "guerreiro")
let mongeAncestral = new heroi("Gandall", 90, "monge")
let ninjaSombrio = new heroi("Rael", 20, "ninja")

magoDeFogo.atacar()
guerreiroLendario.atacar()
mongeAncestral.atacar()
ninjaSombrio.atacar()
