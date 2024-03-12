// Ejercicio 1
// let nombre = "David";
// alert(nombre);



//Ejercicio 2 
//let nombre = prompt("Introduce tu nombre" );
//alert(nombre);

// Ejercicio 1.1
// let nombre;
// nombre = "David";
// console.log(typeof nombre);

// if(true) {
   //  let nombre = "Sara";
    // console.log(nombre);
// }
// console.log(nombre);

//Ejercicio 2 return

// let nombreyapellido = (name,surname) => {
//     name = ("David");
//     surname = ("Baeza")
//     return ("Mi nombre es: " + name + " " + surname);
// } 
// console.log(nombreyapellido());

//Ejercicio Boolean 
// function nombre () {
//     nombre = false;
//         console.log(!nombre);
// }
// nombre ();

//Ejercicio ForEach funcion dentro de una funcion 

// function parametros(...numbers){
//     numbers.forEach(number => console.log(numbers));
// }
// parametros(1,5,3,4,5);


function random () {
    let moneda = Math.round(Math.random());
    if(moneda){
        console.log("Te ha salido cara");
    }else{
        console.log("Te ha salido cruz");
    }
}

random();


