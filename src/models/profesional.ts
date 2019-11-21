export class Profesional{
    _id: string;
    name: string;
    dni: string;
    type: number

    constructor(id: string, name: string, dni: string, type: number){
        this._id=id;
        this.name= name;
        this.dni=dni;
        this.type=type;
    }
}