import { threadId } from 'worker_threads';
import { EmpleadoAr } from './EmpleadoAr';
export class Azafato extends EmpleadoAr {    
    private _horasExtras: number;
    private _dietas: number;

    constructor(
        dni: string, 
        iban: string, 
        email: string, 
        salarioBase: number, 
        expedientes: Boolean, 
        horasExtras: number,
        dietas:number
    )
    {
        //Asignamos como valor fijo el numero de dias de vacaciones anuales por convenio
        super(dni,iban,email,salarioBase, expedientes,120)
        this._horasExtras = horasExtras;
        this._dietas=dietas;
    }

    get dietas(){
        return this._dietas;
    }

    get horasExtras(){
        return this._horasExtras;
    }

    

    //Metodos
    actualizarVaciones(diasVacaMes:number){
        //Calculamos la diferencia para comprobar que nos son mas de 10 dias por mes
        this._CalVacaciones=this._CalVacaciones-diasVacaMes
        if(diasVacaMes>10){
          console.log("Este EmpleadoAr ha cogido dias de vacaciones extra este mes deben de ser Max 10 dias")
        }
    }
    SalarioBruto(): number | any{

        //Variables
        let salario : number
        salario = super.SalarioBruto()
        let extras : number;
        let dietas: number;2
        let SalarioBruto : number;
        extras = this._horasExtras;
        dietas = this._dietas;




        if (this._expedientes == false){
            SalarioBruto= salario + (extras * 11.80) + (dietas * 10.30)
            return SalarioBruto
        } else{
            SalarioBruto = salario + ((extras * 11.80) + (dietas * 10.30) * 0.90)
            return SalarioBruto
        }
        
    }
    
    todo(){
        let resultado: string
        resultado = `${super.todo()}, Numero de Horas Extras: ${this._horasExtras}, Numero de Horas Extras: ${this._dietas} `
        return resultado
      }

}