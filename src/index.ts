import { menuPral } from './view/menuPral'
import { EmpleadoAr } from './clases/EmpleadoAr'
import { EmpNuevo, AzafatoNuevo, ConsultaDNi,PilotoNuevo, MostrarSalario,Opsalario,EliminarEmp, EdiIbanEmp,ModifDiasVacas} from './acciones/funciones'

//Menu
const main = async () => {
    let empleados: Array<EmpleadoAr> = new Array<EmpleadoAr>();
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
               // Empleado Nuevo
                await EmpNuevo(empleados)
                break
            case 2:
                //Azafatos Nuevos
                await AzafatoNuevo(empleados)
                break
            case 3:
                //Pilotos Nuevos
                await PilotoNuevo(empleados)
                break
            case 4:
                //Muestra el salario de los empleados
                MostrarSalario(empleados)
                break
            case 5:
                //Ejecuta las operaciones para sacar el salario final
                Opsalario(empleados)
                break
            case 6:
                //Despedir o Eliminar un empleado
                await EliminarEmp(empleados)
                break
            case 7:
                //Editamos el IBAN de los empledos
                await EdiIbanEmp(empleados)
                break
            case 8:
                //Busacamos información del empleado buscando por su DNI
                await ConsultaDNi(empleados)
                break
            case 9:
                //Modificamos o actualizamos los dias de vacaciones de los empleados
                await ModifDiasVacas(empleados)
                break
            case 0:
                console.log('\nAdios')
        }
    }while (n != 0)
}
main()


