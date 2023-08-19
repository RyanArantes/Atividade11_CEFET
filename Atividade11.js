var header = document.querySelector("header");

var tituloH1 = document.createElement("h1");
tituloH1.textContent = "Titulo do Site";

header.appendChild(tituloH1);

var main = document.querySelector("main");

var div1 = document.createElement("div");

var tituloDiv1 = document.createElement("h2");
tituloDiv1.textContent = "Titulo da Primeira Div";

var paragrafoDiv1 = document.createElement("p");
paragrafoDiv1.textContent = "Conteudo da Primeira Div."; 

div1.appendChild(tituloDiv1);
div1.appendChild(paragrafoDiv1);

var div2 = document.createElement("div");

var tituloDiv2 = document.createElement("h2");
tituloDiv2.textContent = "Titulo da Segunda Div";

var paragrafoDiv2 = document.createElement("p");
paragrafoDiv2.textContent = "Conteudo da Div.";

div2.appendChild(tituloDiv2);
div2.appendChild(paragrafoDiv2);

main.appendChild(div1);
main.appendChild(div2);
