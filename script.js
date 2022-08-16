class Seguro {
    constructor(marca, cotizacion, valor){
        this.marca = marca
        this.cotizacion = cotizacion
        this.valor = valor
    }
    obtenerInfo(){
        return `- ${this.marca}`
    }
}

const seguro1 = new Seguro("chevrolet", 2000000, 4000)
const seguro2 = new Seguro("ford", 2400000, 4800)
const seguro3 = new Seguro("peugeot", 3000000, 6000)
const seguro4 = new Seguro("fiat", 1800000, 3600)
const seguro5 = new Seguro("renault", 1500000, 3000)
const seguro6 = new Seguro("nissan", 5000000, 10000)
const seguro7 = new Seguro("volkswagen", 4200000, 8400)
const seguro8 = new Seguro("bmw", 7000000, 14000)
const seguro9 = new Seguro("toyota", 3500000, 7000)
const seguro10 = new Seguro("honda", 2800000, 5600)

const seguros = [seguro1, seguro2, seguro3, seguro4, seguro5, seguro6, seguro7, seguro8, seguro9, seguro10]

function seguroPremium(seguro){
    return seguro *= 1.75
}

const obtenerInfoMarca = (x) => {
    return x.map(elemento => elemento.obtenerInfo() ).join("\n")
}

do{
    let cotizar = prompt("¿Desea cotizar el seguro de su vehiculo? (SI / NO)").toLowerCase()
    if(cotizar == "si"){
        let infoMarcas = obtenerInfoMarca(seguros)
        let marca = prompt("Ingrese la marca de su vehículo: \n" + infoMarcas).toLowerCase()
        if(seguros.some(seguros => seguros.marca == marca) == true){
            let arrayMarcas = seguros.map(seguro => seguro.marca)
            let indice = arrayMarcas.indexOf(marca)
            alert(`La marca ${marca} está cotizada en ${seguros[indice].cotizacion} y el seguro básico tiene un valor de ${seguros[indice].valor}`)
            premium = prompt("Si desea cotizar su vehiculo con el seguro premium ingrese 'P'. De lo contrario no ingrese nada.").toLowerCase()
            if (premium == "p"){
                alert(`El seguro premium de la marca ${marca} tiene un valor de ${seguroPremium(seguros[indice].valor)}`)
                seguros[indice].valor = seguroPremium(seguros[indice].valor)
            }
            alert("Abra la consola para ver la cotización. Gracias por elegirnos!")
            console.log(seguros[indice])
        } else {
            alert(`No cotizamos seguros para la marca ${marca}`)
        }
    } else if (cotizar == "no"){
        alert("Muchas gracias por visitar nuestra página. Esperamos verte pronto!")
        break
    } else {
        alert("Por favor ingrese una respuesta válida (SI / NO)")
        var repetir = "si"
    }  
} while(repetir == "si")

