import { EmpleadoAr } from './EmpleadoAr';
export class Piloto extends EmpleadoAr {
    private _BPeligrosidad: boolean;
    private _permisos: number;
    constructor(
        dni: string, 
        iban: string, 
        email: string, 
        salarioBase: number, 
        expedientes: boolean, 
        BPeligrosidad: boolean, 
        permisos: number
      ) 
        
      {
        //Asignamos como valor fijo el numero de dias de vacaciones anuales por convenio
        super(dni,iban,email,salarioBase, expedientes,190);
        this._BPeligrosidad = BPeligrosidad;
        this._permisos=permisos;
      }

//METODOS
      SalarioBruto(): number | any{
        let salario : number;
        salario = super.SalarioBruto();
        let BPeligrosidad : Boolean;
        let permisos : number;
        let SalarioBruto : number;
        let salarioa : number
        let salariob : number 
        permisos = this._permisos;
        BPeligrosidad = this._BPeligrosidad;
        if (this._expedientes == true){
            
                if (BPeligrosidad == true) {
                    salarioa = (salario + 200)*0.90;
                        if (permisos > 2 ){
                                salariob = (salarioa + (75*0.90));
                                return salariob
                        } else {
                                salariob=0;
                        } 
                        SalarioBruto=salarioa+salariob;
                        return SalarioBruto         
                } else {
                  salarioa=salario*0.90;
                        if (permisos > 2 ){
                              salariob = (salarioa + (75*0.90));
                              return salariob
                        } else {
                              salariob=0;
                        }  
                }
                  SalarioBruto=salarioa+salariob;
                  return SalarioBruto
            

        }else {
                if (BPeligrosidad == true) {
                      salarioa = salario + 200;
                        if (permisos > 2 ){
                              salariob = salarioa + 80;
                              return salariob
                        } else {
                              salariob=0;
                        }
                        SalarioBruto=salarioa+salariob;
                        return SalarioBruto
                } else {
                    salarioa = salario
                        if (permisos > 2 ){
                            salariob = salarioa + 85;
                            return salariob
                        } else {
                            salariob=0;
                        }
                    SalarioBruto=salarioa+salariob;
                    return SalarioBruto
                }
        }
      }
    
      actualizarVaciones(diasVacaMes:number){
        //Calculamos la diferencia para comprobar que nos son mas de 15 dias por mes
        this._CalVacaciones=this._CalVacaciones-diasVacaMes
        if(diasVacaMes>15){
          console.log("Este empleado ha cogido dias de vacaciones extra este mes deben de ser Max 15 dias")
        }
      }
      todo(){
        let resultado: string
        resultado = `${super.todo()}, 
          Complemento de BPeligrosidad: ${this._BPeligrosidad}, 
          Permisos Comerciales: ${this._permisos} `
        return resultado
      }

    } 