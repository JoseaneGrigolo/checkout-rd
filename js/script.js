
/* Ex aula JS 03 * - Material: AJAX e Storage*/

let cepUsuario = document.querySelector('#cepUsuario');
let endereco = document.querySelector('#enderecoUsuario');
let cidade = document.querySelector('#cidadeUsuario');
let bairro = document.querySelector('#bairroUsuario');

cepUsuario.addEventListener('keyup', apiCep);

/* Precisa estar em uma função assíncrona , não pode esquecer! */

async function apiCep(e) {
    if (this.value.length == 8) {

        /* alert(cepUsuario.value); */

        /* Buscar o cep na api */

        /* 
        fetch('https://brasilapi.com.br/api/cep/v1/' + this.value )
            .then(function (resposta) {
                return resposta.json;
            })
            .then(function (cep) {
                console.log(cep);
            }); 
        */


        /* Forma mais simples de fazer - vai retornar a resposta e colocar na variavel */
        
        let resposta = await fetch('https://brasilapi.com.br/api/cep/v1/' + this.value);
        let cep = await resposta.json();
        endereco.value = cep.street;
        bairro.value = cep.neighborhood;
        cidade.value = cep.city;
    }
}

