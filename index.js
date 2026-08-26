const cardapio = [
    {nome: "Suco", preco: 6.5},
    {nome: "Chocolate", preco: 10.0},
    {nome: "Brownie", preco: 16.0},
    {nome: "Batata frita", preco: 25.5},
    {nome: "Batata frita c/bacon e cheedar", preco: 17.5}
]


function taxaEntrega(km){
    if(km <= 2){
        return 0;
    }else if(km <= 8){
        return 6;
    }else{
        return 6 + (km - 8) * 1.5;
    }
}

function teste (nome, esperado, resultado){
    if(esperado === resultado){
        console.log(nome + " passou")
    }else{
        console.log(nome + " não passou")
    }
}

function acumulador(precos){
    let total = 0;
    for(let i= 0; i< precos.length; i++){
        total += precos[i];
    }
    return total;
}

function buscaPreco(nome, cardapio){
    for(let i = 0; i < cardapio.length; i++){
        if(cardapio[i].nome === nome){
            return cardapio[i].preco;
        }
    }
    return -1; 
}

//console.log(buscaPreco("Batata frita c/bacon e cheedar", cardapio))


teste("1km", 0, taxaEntrega(10));