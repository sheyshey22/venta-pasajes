
var asientos = document.getElementsByTagName('td');
for (var i = 0; i < asientos.length; i++) {
    asientos[i].addEventListener('click',redirect);
}
function redirect(event){
    var asiento=(event.target.textContent);
    var mostrar=document.getElementById("mostrar");
    mostrar.innerHTML=asiento;
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
}
// function mostrar(){
//     var nombre= document.getElementById("nombre").value;
//     var apellido= document.getElementById("apellido").value;
//     var dni= document.getElementById("dni").value;
//     var mostrar= document.getElementById("mostrar");
//     mostrar.innerHTML=nombre;
// }
function reservar(){
    var asiento=document.getElementById("mostrar").textContent;
    
    var name= document.getElementById("nombre").value;
    name.value;
    var last_name= document.getElementById("apellido").value;
    var dni= document.getElementById("dni").value;
    var celdas = document.getElementsByTagName('td');    
    celdas[asiento-1]={
        nombre: name,
        apellido:last_name,
        dni: dni
    };
    var str="";
    str= "el nombre es :"+ name;
    console.log(str);
    //var mostrar=document.getElementById("mostrar1")
    }
   

    // var mostrar= document.getElementById("mostrar");
    // mostrar.innerHTML=nombre;
    
function buscar(ingreso){
	var ingreso=document.getElementById("nro_dni").value;
	console.log(ingreso);
  	var operacion= ingreso*2;
  	document.getElementById("nro_dni").value=operacion;
}