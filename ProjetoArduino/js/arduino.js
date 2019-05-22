var botaoLuz = document.querySelectorAll(".botaoLuz");
var lampadaImg = document.querySelectorAll(".lampadaImg");

for (i = 0; i < botaoLuz.length; i++){
	botaoLuz[i].index = i;
	botaoLuz[i].addEventListener('click', ligaDesliga);
}

function ligaDesliga (event) {
	event.preventDefault();
	 var indice = this.index;
	 if (lampadaImg[indice].classList.contains("Desligado")) {
	 	liga(this, lampadaImg[indice], indice);
	 }else{
	 	desliga(this, lampadaImg[indice], indice);
	 }

}

function liga(botao, lampada, indice) {
	botao.textContent = "Ligado";
	botao.classList.add("Ativo");
	lampada.classList.remove("Desligado");
	lampada.classList.add("Ligado");
	var urlParametroLigar = 'http://192.168.1.100/?' + indice + '_ligar'; // Pagina

//Liga Lampada
	$.ajax({
        type : 'get', // metodo post
        url : urlParametroLigar,
        success : function(r){
          // Agora você pode mostrar a saída em seu modal
          console.log("Ligando lampada");
        }
    });
}

function desliga(botao, lampada, indice) {
	botao.textContent = "Desligado";
	botao.classList.remove("Ativo");
	lampada.classList.remove("Ligado");
	lampada.classList.add("Desligado");	
	var urlParametroDesligar = 'http://192.168.1.100/?' + indice + '_desligar'; // Pagina

//Desliga Lampada
	$.ajax({
        type : 'get', // metodo post
        url : urlParametroDesligar, // Pagina
        success : function(r){
          // Agora você pode mostrar a saída em seu modal
          console.log("Desligando lampada");
        }
    });
}