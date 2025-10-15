// Exercício 78: Crie um objeto "cachorro" com propriedades para raça, nome e idade. Adicione um método que retorne a idade do cachorro
//  em anos humanos (idade do cachorro * 7).

let cachorro = {
    raca: "viralata",
    nome: "titiu",
    idade: 5,
    idadeHumana: function() {
        return this.idade * 7;
    }
}

cachorro.idadeHumana();