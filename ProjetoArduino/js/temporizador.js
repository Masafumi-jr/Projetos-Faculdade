
/*** Liga e Desliga ***/
/*************************************************************************************
var botaoTemporizador = document.querySelectorAll(".botaoTemp");
var lampadaImg = document.querySelectorAll(".lampadaImg");

for (i = 0; i < botaoTemporizador.length; i++){
	botaoTemporizador[i].index = i;
	botaoTemporizador[i].addEventListener('click', temporizador);
}

function temporizador (event) {
	console.log("click");
	event.preventDefault();
	var indice = this.index;	
	//Altera Botao
	 n = 10;
	this.textContent = "Temporizador " + n;
	this.classList.add("Ativo");

	//Altera Imagem
	lampadaImg[indice].classList.add("Ligado");

	//Contador de tempo
	contador(this);

	//retorna ao estado original
	//setTimeout(voltaInicio, 2000, this, lampadaImg[indice]);	
}

function contador(n) {
if (n < 0) {
	n--;
	console.log(n);	
	setTimeout(contador(n) ,1000);  

}else{
	console.log("Acabou");
	}
}

function voltaInicio(botao, lampada) {
	console.log("contando");
	botao.textContent = "Temporizador";
	botao.classList.remove("Ativo");

	lampada.classList.remove("Ligado");
	lampada.classList.add("Desligado");
}
*************************************************************************************/