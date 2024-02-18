
function verificarQuantidade() {
    
    
let nameRemedio = document.getElementById('nameRemedio').value;
let totaldeRemedio = parseInt(document.getElementById('totalRemedio').value);
let avisoDeFim = document.getElementById('avisoFim');


if (totaldeRemedio <= 5) {
    alert("Atenção ! Estoque baixo !");
    avisoDeFim.innerHTML =`Estoque de ${nameRemedio} está baixo ! 
    Total de comprimidos = <mark>${totaldeRemedio}</mark>`;

} else {
    alert("Estoque normal !")
   avisoDeFim.innerHTML = `<strong>Estoque de ${nameRemedio} está normal ! 
   Total de comprimidos = <mark>${totaldeRemedio}</mark>`;

}
}

// Agora vou adicionar um botao, que ao clicar nele fará um reset, e todos os inputs anteriormente preenchidos ficaram em branco !


function reset() {

let nameRemedio = document.getElementById('nameRemedio').value;

let totaldeRemedio = parseInt(document.getElementById('totalRemedio').value);

let avisoDeFim = document.getElementById('avisoFim');

    if (nameRemedio.length > 0 || totaldeRemedio > 0) {

        document.getElementById('nameRemedio').value = '';

        document.getElementById('totalRemedio').value = '';
        
        avisoDeFim.innerHTML = '<> Estoque <>'
    }

}