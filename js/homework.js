//Exercise_1
/*
let score = parseInt(prompt('Cual es tu calificacion? (0-100) '))


if(score >=90)
{
    console.log(`A`)
} 
else if(score >=80 && score < 90){
    console.log(`B`)
}
else if(score >= 70 && score < 80){
    console.log(`C`)
} 
else if(score >= 60 && score < 70){
    console.log(`D`)
}
else if(score >= 50 && score < 60){
    console.log(`e`)
}
    else {
            console.log('F')
}
*/
//Exercise_2
/*
let number = parseInt(prompt('Escribe un numero entre el 1 y el 100 '))

if(number % 2 === 0 && number % 11 === 0)
{
    console.log(`el numero ingresado es divisible entre 2 o 11`)
} 
else{
    console.log(`EL numero no es divisible entre 2 y 11`)
}*/
//Exercise_3
/*
let numberB = parseInt(prompt('Escribe un numero entre el 1 y el 100 '))

if(numberB % 2 === 0 )
{
    console.log(`el numero ingresado es PAR`)
} 
else{
    console.log(`EL numero es IMPAR`)
}*/
//Exercise_4
let number_Day = parseInt(prompt('Ingresa un numero del 1 - 7'))

switch(number_Day)
{
    case 1:console.log(`Lunes`)
    break;
    case 2:console.log(`Martes`)
    break;
    case 3:console.log(`Miercoles`)
    break;
    case 4:console.log(`Jueves`)
    break;
    case 5:console.log(`Viernes`)
    break;
    case 6:console.log(`Sabado`)
    break;
    default: 
       console.log("Domingo")
       break;
}