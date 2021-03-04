const teclas = document.querySelectorAll(".num");
let valor = document.getElementById("value");

for(let i=1; i<17; i++){

    teclas[i].onclick = ()=>{
        valor.value += teclas[i].innerHTML;
    }
}
teclas[0].onclick = ()=>{valor.value = ""}
teclas[teclas.length -1].onclick = ()=>{valor.value = eval(calc.txt.value)}



console.log(teclas[3])
// document.calc.txt.value +=