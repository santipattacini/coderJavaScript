// el boton "jugar" esconde la pantalla de bienvenida y muestra el juego
const pantalla = document.getElementById("cargarPantalla")

pantalla.addEventListener("click", () => {
    document.getElementById("pantallaBienvenida").style.display = "none"
    document.getElementById("main").style.display = "block"
})

// defino saldo inicial
let saldo = 10000

// apretar fichas suma apuesta
const apuestaValue = document.getElementById("apuestaValue")
let apuesta = 0

function sumarFicha(valor){
    apuesta += valor
}

const fichaDeCien = document.getElementById("fichaDeCien")
fichaDeCien.addEventListener("click", () => {
    if(apuesta > 2400 || saldo < 100){
        Swal.fire('La apuesta máxima es $2500.')
    } else {
        sumarFicha(100)
        apuestaValue.innerText = apuesta
        saldo -= 100
    }
})

const fichaDeQuin = document.getElementById("fichaDeQuin")
fichaDeQuin.addEventListener("click", () =>{
    if(apuesta > 2000 || saldo < 500){
        Swal.fire('La apuesta máxima es $2500.')
    } else {
        sumarFicha(500)
        apuestaValue.innerText = apuesta
        saldo -= 500
    }
})

const fichaDeMil = document.getElementById("fichaDeMil")
fichaDeMil.addEventListener("click", () => {
    if(apuesta > 1500 || saldo < 1000){
        Swal.fire('La apuesta máxima es $2500.')
    } else {
        sumarFicha(1000)
        apuestaValue.innerText = apuesta
        saldo -= 1000
    }
})

// accion de boton repartir
const saldoValue = document.getElementById("saldoValue")
const repartir = document.getElementById("botonRepartir")
// DECIDIR CON BOTONES
const botonPlantarse = document.getElementById("botonPlantarse")
const botonPedir = document.getElementById("botonPedir")

// FUNCION PARA TRAER BNARAJA DE .JSON
const traerBaraja = async() => {
    const response = await fetch("./json/cartas.json")
    const baraja = await response.json()
    return baraja
}

const carta1 = document.getElementById("carta1")
const carta2 = document.getElementById("carta2")
const carta3 = document.getElementById("carta3")
const carta4 = document.getElementById("carta4")
const conteoUser = document.getElementById("conteoUser")
const conteoBanca = document.getElementById("conteoBanca")
const cartasUser = document.getElementById("cartasUser")
const cartasBanca = document.getElementById("cartasBanca")


// FUNCION RESET para dar vuelta las al terminar la mano
function resetCartasAtras(){
    carta1.innerHTML = null
    carta2.innerHTML = null
    carta3.innerHTML = null
    carta4.innerHTML = null
    cartasUser.innerHTML = `<div id="carta1"></div><div id="carta3"></div>`
    cartasBanca.innerText = `<div id="carta2"></div><div id="carta4"></div>`
}

// FUNCION EMPATE
function hayEmpate(){
    Swal.fire('Empataste.')
    saldo += apuesta
    saldoValue.innerText = saldo
    // resetear valores
    apuesta = 0
    apuestaValue.innerText = apuesta
    conteoBanca.innerText = null
    conteoUser.innerText = null
    // resetear pantalla
    return(resetCartasAtras()) 
}

// FUNCION GANAR
function jugadorGana(){
    Swal.fire('Ganaste.')
    let fin = "yes"
    // sumar saldo
    saldo += apuesta*2
    saldoValue.innerText = saldo
    // resetear valores
    apuesta = 0
    apuestaValue.innerText = apuesta
    conteoBanca.innerText = null
    conteoUser.innerText = null
    // resetear pantalla
    return(resetCartasAtras())
}

// FUNCION GANAR CON BJ
function jugadorGanaBJ(){
    Swal.fire('Ganaste con blackjack.')
    let fin = "yes"
    // sumar saldo
    saldo += apuesta*2.5
    saldoValue.innerText = saldo
    // resetear valores
    apuesta = 0
    apuestaValue.innerText = apuesta
    conteoBanca.innerText = null
    conteoUser.innerText = null
    // resetear pantalla
    return(resetCartasAtras())
}

function jugadorPierde(){
    Swal.fire('Perdiste.')
    fin = "yes"
    // resetear valores
    apuesta = 0
    apuestaValue.innerText = apuesta
    conteoBanca.innerText = null
    conteoUser.innerText = null
    // resetear pantalla
    return(resetCartasAtras())
}

repartir.addEventListener("click", () => {
    saldoValue.innerText = saldo
    let valorBanca = 0
    let valorUser = 0
    // REPARTIR PRIMERAS 3
    if(apuesta > 0){
    traerBaraja().then(baraja => {
        // MATH RANDOM CON LA CANTIDAD DE CARTAS
        let cantidad = 51.99999
        let cartaOculta = null
        // REPARTIR PRIMERAS 3 CARTAS
        for(let i = 1; i <= 4; i++){
            let random = parseInt(Math.random()*cantidad)
            setTimeout(() => {
                if(i == 1){
                    valor = baraja[random].value
                    valor1 = valor
                    if(baraja[random].value == 1){
                        conteoUser.innerText = `${valor} / ${valor+10}`
                    } else {
                        conteoUser.innerText = valor
                    }
                    carta1.innerHTML = `<img src="img/deck/${baraja[random].img}.jpg" class="carta"></img>`
                }
            }, 600)
            setTimeout(() => {
                if(i == 2){
                    valor = baraja[random].value
                    valor2 = valor
                    if(baraja[random].value == 1){
                        conteoBanca.innerText = `${valor} / ${valor+10}`
                    } else {
                        conteoBanca.innerText = valor
                    }
                    carta2.innerHTML = `<img src="img/deck/${baraja[random].img}.jpg" class="carta"></img>`
                }
            }, 1200)
            setTimeout(() => {
                if(i == 3){
                    valor = baraja[random].value + valor1
                    // ALERTA BLACKJACK
                    if(((baraja[random].value == 1) || (valor1 == 1)) && valor == 11){
                        valor3 = valor + 10
                        conteoUser.innerText = valor + 10
                    } else {
                        valor3 = valor
                        if(valor1 == 1 || baraja[random].value == 1){
                            conteoUser.innerText = `${valor} / ${valor+10}`
                        } else {
                            conteoUser.innerText = valor
                        }
                    }
                    carta3.innerHTML = `<img src="img/deck/${baraja[random].img}.jpg" class="carta"></img>`
                }
            }, 1800)
            setTimeout(() => {
                if(i == 4){
                    valor = baraja[random].value + valor2
                    valor4 = valor
                    carta4.innerHTML = `<img src="img/deck/carta-reves.png" class="carta"></img>`
                    // SI JUGADOR TIENE BLACKJACK Y BANCA DIEZ O AZ REVISAR
                    if(valor3 == 21){
                        // SI BANCA TAMBIEN TIENE
                        if((baraja[random].value == 1) || (valor2 == 1) && valor == 11){
                            carta4.innerHTML = `<img src="img/deck/${baraja[random].img}.jpg" class="carta"></img>`
                            conteoBanca.innerText = valor
                            return(hayEmpate())
                        } else {
                            carta4.innerHTML = `<img src="img/deck/${baraja[random].img}.jpg" class="carta"></img>`
                            conteoBanca.innerText = valor
                            return(jugadorGanaBJ())
                        }
                    }
                    // SI BANCA TIENE BLACKJACK Y JUGADOR NO
                    if((baraja[random].value == 1) || (valor2 == 1) && valor == 11){
                        if(valor3 == 21){
                            carta4.innerHTML = `<img src="img/deck/${baraja[random].img}.jpg" class="carta"></img>`
                            conteoBanca.innerText = valor
                            return(jugadorPierde())
                        }
                    }
                    cartaOculta = baraja[random].img
                }    
            }, 2400)
        }
        // SEGUNDA PARTE
        // BOTON PEDIR
        botonPedir.addEventListener("click", () => {
            let random = parseInt(Math.random()*cantidad)
            cartasUser.innerHTML += `<div><img src="img/deck/${baraja[random].img}.jpg" class="carta"></img></div>`
            valorUser = baraja[random].value + valor3
            conteoUser.innerText = valorUser
            if(valorUser > 21){
                carta4.innerHTML = `<img src="img/deck/${cartaOculta}.jpg" class="carta"></img>`
                valorBanca = valor4
                conteoBanca.innerText = valorBanca
                return(jugadorPierde())
            }
        })
        // BOTON QUEDARSE
        /*
        botonPlantarse.addEventListener("click", () => {
            carta4.innerHTML = `<img src="img/deck/${cartaOculta}.jpg" class="carta"></img>`
            valorBanca = valor4
            conteoBanca.innerText = valorBanca
            if(valorUser > valorBanca){
                return
            } else if(valorUser < valorBanca){
                return
            } else {
                return(hayEmpate())
            }
        })
        */
    })
    } else {
        Swal.fire('Debes apostar para repartir.')
    }
})



// BOTONES SIN FUNCIONALIDAD DE MOMENTO
const botonDoblar = document.getElementById("botonDoblar")
botonDoblar.addEventListener("click", () => {
    Swal.fire('BOTÓN SIN FUNCIONALIDAD POR EL MOMENTO')
})
const botonDividir = document.getElementById("botonDividir")
botonDividir.addEventListener("click", () => {
    Swal.fire('BOTÓN SIN FUNCIONALIDAD POR EL MOMENTO')
})

