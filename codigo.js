//elementos a encriptar
/*
e = enter
i = imes
a = ai
o = ober
u = ufat
*/

//funcion encriptar 
function encriptar() {
    let text = document.getElementById("textarea1").value;
    let elemento_encriptado = text
        .replace("e", "enter")
        .replace("i", "imes")
        .replace("a", "ai")
        .replace("o", "ober")
        .replace("u", "ufat");
    //la variable con las letras encriptadas se guarda en el textarea2
    document.getElementById("textarea2").value = elemento_encriptado;



}

function desncriptar() {
    let text = document.getElementById("textarea2").value;
    let elemento_desencriptado = text
        .replace("enter", "e")
        .replace("imes", "i")
        .replace("ai", "a")
        .replace("ober", "o")
        .replace("ufat", "u");
    document.getElementById("textarea2").value = elemento_desencriptado;


}

//funcion de limpiar los textarea
function limpiar() {
    let limpiar1 = document.getElementById("textarea1").value = "";
    let limpiar2 = document.getElementById("textarea2").value = "resultado...";

}

//funcion de copiar el texto del textarea2 

function copiar(){
    let copy = document.getElementById("textarea2").value;
    navigator.clipboard.writeText(copy);
    Swal.fire({
        position: "center",
        icon: "success",
        title: "texto copiado",
        showConfirmButton: false,
        timer: 1500
        
      });
    
}