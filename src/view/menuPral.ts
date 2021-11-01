import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Nuevo Empleado')
    console.log('2.- Nuevo Empleado Azafato')
    console.log('3.- Nuevo Empleado Piloto')
    console.log('4.- Mostrar la lista de empleados')
    console.log('5.- Operación Salario')
    console.log('6.- Borrar empleado')
    console.log('7.- Actualizar iban de los empleados')
    console.log('8.- Buscador por DNI')
    console.log('9.- Actualizar dias de Vacaciones')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}