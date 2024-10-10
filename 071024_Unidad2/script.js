//crear una funcion que recibe un para metro, despues agregar el valor al pantalla
function appendToDisplay(value){
    document.getElementById('display').value += value;
}
//poner el campo de texto en vacio, al id que se llama display
function clearDisplay(){
    document.getElementById("display").value = ""
}
//crear una funcion para limpiar el ultimo elemento agregado al cadena de texto al display
function deleteLast(){
    let displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0,-1);

}
//crar una funcion, deacuerdo con el contenido de la cadena y realiza una operacion matematica de acuerdo con lo que tiene
function calculateResult(){
    //captura el error y lo salta en vez de romper el programa
    try{
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error){
        alert("Expresion invalida");
    }
}