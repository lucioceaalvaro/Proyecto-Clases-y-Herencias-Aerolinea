export class EmpleadoAr {
    private _dni: string
    protected _iban: string
    private _email: string
    protected _salarioBase: number
    protected _expedientes: Boolean
    protected _CalVacaciones:number
    

    constructor(dni: string, iban: string, email: string, salarioBase: number, expedientes: Boolean,CalVacaciones:number){
            this._dni= dni,
            this._iban= iban,
            this._email= email,
            this._salarioBase= salarioBase,
            this._expedientes= expedientes,
            this._CalVacaciones=CalVacaciones
    }
        
          get dni() {
            return this._dni;
          }
          get iban() {
            return this._iban;
          }

          set iban(newIban: string){    // Necesario para poder modificar
            this._iban = newIban
          }

          get email() {
            return this._email;
          }

          get salarioBase() {
            return this._salarioBase;
          }
        
        get expedientes(){
            return this._expedientes;
          } 
        
        get CalVacaciones(){
            return this._CalVacaciones;
        }
        
          
        SalarioBruto(): number | any {
            let SalarioBruto: number
            let retrasos: Boolean
            retrasos = this._expedientes
            SalarioBruto = this._salarioBase
            if (retrasos == true){
              SalarioBruto= SalarioBruto *0.80;
            }
            return SalarioBruto
        }
        actualizarVaciones(diasVacaMes:number){
            this._CalVacaciones=this._CalVacaciones-diasVacaMes
        }
        todo() {
            return `DNI: ${ this._dni}, 
            IBAN: ${this._iban}, 
            Email: ${this._email} , 
            salario Base: ${this._salarioBase}, 
            expedientes : ${this._expedientes} `;
        }
}