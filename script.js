// modo claro y modo oscuro de la pagina
let darkMode

if(localStorage.getItem("darkMode")){
    darkMode = localStorage.getItem("darkMode") // consulto el local storage
} else {
    localStorage.setItem("darkMode", "light") // creo
}
if (darkMode == "dark"){
    document.body.classList.add("darkMode")
}

const botonDarkMode = document.getElementById("botonDarkMode")
const botonLightMode = document.getElementById("botonLightMode")

botonDarkMode.addEventListener("click", () => {
    document.body.classList.add("darkMode")
    localStorage.setItem("darkMode", "dark")
})
botonLightMode.addEventListener("click", () => {
    document.body.classList.remove("darkMode")
    localStorage.setItem("darkMode", "light")
})

class Seguro {
    constructor(marca, cotizacion, valor){
        this.marca = marca
        this.cotizacion = cotizacion
        this.valor = valor
    }
}

// creo algunos objetos con los valores y un array con esos objetos
const seguro1 = new Seguro("chevrolet", 2000000, 4000)
const seguro2 = new Seguro("ford", 2400000, 4800)
const seguro3 = new Seguro("peugeot", 3000000, 6000)
const seguro4 = new Seguro("renault", 1800000, 3600)
const seguro5 = new Seguro("volkswagen", 1500000, 3000)

const seguros = [seguro1, seguro2, seguro3, seguro4, seguro5]
const segurosMarcas = seguros.map(seguro => seguro.marca)
// ordenamos alfabeticamente
segurosMarcas.sort()

// consulto por el valor que el usuario ingreso en el input
const form = document.getElementById("marcaForm")
const select = document.getElementById("formSelect")
const cotizacion = document.getElementById("cotizacion")

console.log(segurosMarcas)

// funcion para implementar valores en la lista
for(var i = 0; i < segurosMarcas.length; i++){
    var seg = segurosMarcas[i]
    var list = document.createElement("option")
    list.textContent = seg
    list.value = seg
    select.appendChild(list) 
} 

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const marca = document.getElementById("formSelect").value
    if (seguros.some(seguros => seguros.marca == marca) == true){
        const indice = segurosMarcas.indexOf(marca)
        cotizacion.classList.remove("colorRed")
        cotizacion.innerText = `La marca ${marca} está cotizada en $${seguros[indice].cotizacion} y el seguro tiene un valor de $${seguros[indice].valor}`
    } else {
        // cotizacion.innerText = `No cotizamos seguros para la marca ${marca}`
        // cotizacion.classList.add("colorRed")
        Swal.fire({
            title: 'No seleccionaste ninguna marca!',
            text: 'Debes seleccionar alguna para que podamos cotizar',
            color: 'black',
            imageUrl: 'img/meme-gato.jpg',
            imageWidth: 300,
            background: '#e29a9a',
          })
    }
})

