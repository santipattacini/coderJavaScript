// el siguiente codigo hace el calculo de una escala a otra, dependiendo lo que ingrese el ususario
const CtoF = (grados) => grados * 1.8 + 32
const FtoC = (grados) => (grados - 32) / 1.8 

do{ 
    let escala, grados, calculo, repetir
    do{
        escala = prompt("Ingrese la escala a la que le quiere realizar el cálculo (C = Celsius / F = Fahrenheit)")
        if(escala == "C" || escala == "c"){
            grados = parseFloat(prompt("Ingrese los grados °C para convertirlos a °F"))
            if(isNaN(grados)){
                alert("Por favor ingresar números válidos")
            }
            calculo = CtoF(grados)
        } else if(escala == "F" || escala == "f"){
            grados = parseFloat(prompt("Ingrese los grados °F para convertirlos a °C"))
            if(isNaN(grados)){
                alert("Por favor ingresar números válidos")
            }
            calculo = FtoC(grados)
        } else {
            alert("La escala es incorrecta. Intente nuevamente")
        }
    } while(isNaN(grados))
    
    switch(escala){
        case "C":
            alert(`${grados} grados Celsius corresponden a ${calculo.toFixed(1)} grados Farenheit`)
            break
        case "c":
            alert(`${grados} grados Celsius corresponden a ${calculo.toFixed(1)} grados Farenheit`)
            break
        case "F":
            alert(`${grados} grados Fahrenheit corresponden a ${calculo.toFixed(1)} grados Celsius`)
            break
        case "f":
            alert(`${grados} grados Fahrenheit corresponden a ${calculo.toFixed(1)} grados Celsius`)
            break
    }
    do{
        repetir = "default"
        respuesta = prompt("Desea realizar otro cálulo? (SI / NO)")
        if(respuesta == "si" || respuesta == "SI"){
            repetir = "T"
        } else if(respuesta == "no" || respuesta == "NO"){
            alert("Muchas gracias por visitar nuestra web.")
            break
        } else {
            alert("Por favor ingrese una respuesta válida (SI o NO)")
        }
    } while(repetir == "default")
    
} while(respuesta == "si" || respuesta == "SI")
