
function cadastrarEstoque() {
    
    
let nameRemedio = document.getElementById('nameRemedio').value;
let totaldeRemedio = parseInt(document.getElementById('totalRemedio').value);
let avisoDeFim = document.getElementById('avisoFim');

if(nameRemedio.length === 0 || isNaN(totaldeRemedio) ) {
    alert("Favor preencher os campos obrigatórios !")
} else if (nameRemedio && totaldeRemedio) {
    let medicamentos = JSON.parse(localStorage.getItem(`medicamentos`)) || [];

    medicamentos.push({nameRemedio , totaldeRemedio});

    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));

    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));

    alert(` Cadastrado com sucesso !`);
    avisoDeFim.innerHTML = ` Cadastrado com sucesso !` ;

    /* if (totaldeRemedio <= 5) {
        alert("Atenção ! Estoque baixo !");
        avisoDeFim.innerHTML =`Estoque de ${nameRemedio} está baixo ! 
        Total de comprimidos = <mark>${totaldeRemedio}</mark>`;
    
    } else {
        alert("Estoque normal !")
       avisoDeFim.innerHTML = `<strong>Estoque de ${nameRemedio} está normal ! 
       Total de comprimidos = <mark>${totaldeRemedio}</mark>`;
    } */
}

}

// Button de pesquisar estoque !

function pesquisarEstoque() {
    let nameRemedio = document.getElementById('nameRemedio').value;
    let totaldeRemedio = parseInt(document.getElementById('totalRemedio').value);

    console.log('Testando se está chamando a funcao !')

    let verEstoque = document.getElementById('estoque')
    let medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    let infoEstoque = "";

    if(medicamentos.length > 0) {
        
        medicamentos.forEach(function(med) {
            infoEstoque += `${med.nameRemedio} : ${med.totaldeRemedio} comprimidos. <br><br>`
        });
    } else {
        infoEstoque.textContent = "O estoque está vazio !"
    }

    verEstoque.innerHTML = infoEstoque;
}

function limparEstoque() {

    localStorage.removeItem('medicamentos');
    let verEstoque = document.getElementById('estoque');

    verEstoque.innerHTML = `Estoque limpo com sucesso !`;
}


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