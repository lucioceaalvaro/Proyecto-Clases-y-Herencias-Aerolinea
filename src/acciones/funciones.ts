import { leerTeclado } from '../view/entradaTeclado'
import { EmpleadoAr } from '../clases/EmpleadoAr'
import { Piloto } from '../clases/PilotoEmp'
import { Azafato } from '../clases/AzafatoEmp'


//Busca el elemento seleccionado y lo muestra por pantalla
export const ConsultaDNi = async (empleados: Array<EmpleadoAr>)  => {
    let objIndex: number
    let DNI: string = (await leerTeclado('\nIntroduce DNI del Empleado de la aerolinea que quieres buscar: '));
    if (empleados != undefined){
        objIndex = empleados.findIndex(( (obj) => obj.dni == DNI));  
        //metodo findIndex es de busqueda dentro de un array y devuelve el índice
        console.log(empleados[objIndex].SalarioBruto());
    }
}
//Borra el empleado
export const EliminarEmp = async (empleados: Array<EmpleadoAr>) =>  {
    let registro: string = await leerTeclado('\nDni del Empleado a eliminar');
    for(  let i = 0; i < empleados.length; i++){ 
        if ( empleados[i].dni == registro) { 
            empleados.splice(i, 1);   //cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        }
    }
    console.log('Eliminado');
}
// Creación de un Empleado Arerolinea genérico
export const EmpNuevo = async (empleados: Array<EmpleadoAr>) =>  {                                 
    let emp: EmpleadoAr;
    const dni = await leerTeclado('\nDNI');
    const iban = await leerTeclado('iban');
    const email = await leerTeclado('email') ;
    const salarioBase = parseInt( await leerTeclado('salarioBase') );
    const expedientes = Boolean( await leerTeclado('expedientes') );
    const dias = parseInt( await leerTeclado('Dias Vacaciones') );
    emp = new EmpleadoAr (dni, iban, email, salarioBase,expedientes,dias);
    empleados.push(emp);
}
//Creacion de un Empleado de la aerolinea Azafato
export const AzafatoNuevo = async (empleados: Array<EmpleadoAr>) =>  {
    let emp: EmpleadoAr;
    const dni = await leerTeclado('\nDNI');
    const iban = await leerTeclado('iban');
    const email = await leerTeclado('email') ;
    const salarioBase = parseInt( await leerTeclado('salarioBase') );
    const expedientes = Boolean( await leerTeclado('expedientes') );
    const horasExtras = parseInt( await leerTeclado('horasExtras') );
    const dietas = parseInt( await leerTeclado('dietas') );
    emp = new Azafato (dni, iban, email, salarioBase,expedientes, horasExtras, dietas);
    empleados.push(emp);
}
//Actualiza el Iban de los empleados
export const EdiIbanEmp  = async (empleados: Array<EmpleadoAr>)  => {
    if (empleados.length > 0){
            let DNI: string = (await leerTeclado('\nEmpleado a modificar (introduce DNI): '));
            let newIban : string = await leerTeclado('\nNuevo iban');
            empleados.map( (emp) => {              
                if (emp.dni == DNI)
                {
                    emp.iban = newIban;
                }
            } );
    }else{
        console.log(`\No hay ningún Empleado`)
    }
} 
//Creación de un EmpleadoAr Piloto
export const PilotoNuevo = async (empleados: Array<EmpleadoAr>) =>  {
    let emp: EmpleadoAr;
    const dni = await leerTeclado('\nDNI');
    const iban = await leerTeclado('iban');
    const email = await leerTeclado('email') ;
    const salarioBase = parseInt( await leerTeclado('salarioBase') );
    const expedientes = Boolean( await leerTeclado('expedientes') );
    const peligrosidad = Boolean( await leerTeclado('peligrosidad') );
    const permisos = parseInt( await leerTeclado('permisos') );
    emp = new Piloto (dni, iban, email, salarioBase,expedientes, peligrosidad, permisos);
    empleados.push(emp);
}

//Lista los salarios de los empleados
export const MostrarSalario = async (empleados: Array<EmpleadoAr>) => {
    for (let emp of empleados) {
        console.log(`Salario final: ${emp.SalarioBruto()}`)
        console.log(`${emp.todo()}`);
    }
}

// Realiza las operaciones segun los parametros de cada tipo de Empleado
export const Opsalario = async (empleados: Array<EmpleadoAr>) => {
    for (let a of empleados) {
        console.log(`${a.todo()}, Salario final: ${a.SalarioBruto()}`);
      }
}
   
export const ModifDiasVacas =async (empleados:Array<EmpleadoAr>)=>{
 
    if (empleados.length > 0){
        let DNI: string = (await leerTeclado('\nEmpleado a modificar (introduce DNI): '));
        let Ndias: number = parseInt (await leerTeclado('\nNumero de dias de vaciones'));
        empleados.map( (emp) => {              
            if (emp.dni == DNI)
            {
                emp.actualizarVaciones(Ndias);
            }
        } );
    }else{
    console.log(`\No hay ningún EmpleadoAr`)
    }
    
    

}