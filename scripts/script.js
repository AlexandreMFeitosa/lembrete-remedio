
function verificarQuantidade() {
    
    
let nameRemedio = document.getElementById('nameRemedio').value;
let totaldeRemedio = parseInt(document.getElementById('totalRemedio').value);
let avisoDeFim = document.getElementById('avisoFim');


if (totaldeRemedio <= 5) {
    alert("Atenção ! Estoque baixo !");
    avisoDeFim.innerHTML =`Estoque de ${nameRemedio} está baixo !`;

} else {
    alert("Estoque normal !")
   avisoDeFim.innerHTML = `Estoque de ${nameRemedio} está normal !`;

}
}