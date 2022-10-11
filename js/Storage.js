//Se muestra un ejemplo con uso de evento y uso de sessionStorage
//Al momento de cerrar la pestaña o navegador los datos guardados se perderan
//Se podra almacenar un dato, mostrar el dato y eliminarlo, un solo dato.


//Para guardar el dato
btnGuardar.addEventListener('click', ()=>{
    let text = document.getElementById("inputV").value;
    sessionStorage.setItem("guardar" , text); //guardamos el dato que se envio
    document.getElementById("inputV").value = ""; //para que limpie el imput despues de ingresar 
});


//para mostrar el dato
btnMostrar.addEventListener('click', ()=>{
    let text = sessionStorage.getItem("guardar"); //recupero el dato que se guardo 
    document.getElementById("mostrarText").innerHTML = text;
});

//para eliminar el dato
btnBorrar.addEventListener('click', ()=>{
    document.getElementById("mostrarText").innerHTML = ""; //borramos el dato que se ingreso 
    sessionStorage.clear(); //para eliminar todos los datos que se ingresaron
});