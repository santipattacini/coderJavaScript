// el siguiente codigo hace el calculo de una escala a otra, dependiendo lo que ingrese el ususario
let escala, grados, calculo, repetir
do{
    do{
        escala = prompt("Ingrese la escala a la que le quiere realizar el cálculo (C = Celsius / F = Fahrenheit)")
        if(escala == "C" || escala == "c"){
            grados = parseFloat(prompt("Ingrese los grados °C para convertirlos a °F"))
            if(isNaN(grados)){
                alert("Por favor ingresar números válidos")
            }
            calculo = grados * 1.8 + 32
        } else if(escala == "F" || escala == "f"){
            grados = parseFloat(prompt("Ingrese los grados °F para convertirlos a °C"))
            if(isNaN(grados)){
                alert("Por favor ingresar números válidos")
            }
            calculo = (grados - 32) / 1.8
        } else {
            alert("La escala es incorrecta. Intente nuevamente")
        }
    } while(isNaN(grados))
    
    switch(escala){
        case "C":
            alert(`${grados} grados Celsius corresponden a ${calculo.toFixed(2)} grados Farenheit`)
            break
        case "c":
            alert(`${grados} grados Celsius corresponden a ${calculo.toFixed(2)} grados Farenheit`)
            break
        case "F":
            alert(`${grados} grados Fahrenheit corresponden a ${calculo.toFixed(2)} grados Celsius`)
            break
        case "f":
            alert(`${grados} grados Fahrenheit corresponden a ${calculo.toFixed(2)} grados Celsius`)
            break
    }
    repetir = prompt("¿Desea realizar otro cálculo? (SI / NO)")
} while(repetir == "si" || repetir == "SI")
