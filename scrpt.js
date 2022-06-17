console.log("Se nota que todavia me extrañas");

let frase = document.getElementsByTagName("h2")[0].innerHTML;
console.log("frase :" + frase);

setInterval( cambiarSaludo, 2000);

/**
 * Cambia la frase en el titulo h2
 */
function cambiarSaludo() {
  //console.log("Me parece una falta de respecto");
  //Estoy asignando a una  variable el valor de h2
 let frase = document.getElementsByTagName("h2")[1].innerHTML;
  if (document.getElementsByTagName("h2")[1].innerHTML == "Ganando como siempre") {
    //frase = "Impongo moda para las niñas!";
    document.getElementsByTagName("h2")[1].innerHTML = "Impongo moda para las niñas!";
  } else {
    //frase = "Ganando como siempre";
    document.getElementsByTagName("h2")[1].innerHTML = "Ganando como siempre";
  }
  console.log("frase :" + frase);
}
